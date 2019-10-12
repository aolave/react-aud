import { PureComponent, SyntheticEvent, Fragment } from 'react'

import cx from 'classnames'
import getvalue from 'get-value'
import { GenericTooltip } from '../global/Tooltip'
import EditorPreview from '../global/EditorPreview'
import { isEmpty, cacheMuestra, getCacheAllMuestra } from './utis'
import { TableMuestras, FormFichaTecnica } from './TableMuestra'
import { generarMuestras, calculateTamanoMuestra } from './utils_mas'

declare var app: any

type AppMuestreoMasProps = {
  id: string
  id_visita: string
  data: any
  editable: boolean
}

type AppMuestreoMasStateValueType = {
  /** Nivel confianza */
  Z: number
  /** Porcentaje Error Tolerable */
  E: number
  /** Proporcion del Exito */
  P: number
  /** Tamaño de la muestra */
  cf_1: number
  /** Valor Error Tolerable */
  Ev?: number

  pry_1: number
  pry_2: number
  pry_3: 'SI' | 'NO'

  conclusion_custom_mas: string
}

type AppMuestreoMasState = {
  step: number
  values: AppMuestreoMasStateValueType
  muestras: MuestraItem[]
}

function num(string: string | number) {
  const value = parseFloat('' + string)

  return isNaN(value) ? 0 : value
}

export default class AppMuestreoMas extends PureComponent<AppMuestreoMasProps, AppMuestreoMasState> {
  private handlers: { [s: string]: any } = {}

  private hasModified: boolean = false

  constructor(props: AppMuestreoMasProps) {
    super(props)

    const muestras = getvalue(props.data, 'muestras.mas', null)

    const Z = isEmpty(props.data.Z) ? 90 : num(props.data.Z)
    const E = isEmpty(props.data.E) ? (muestras === null ? -1 : 5) : num(props.data.E)
    const P = isEmpty(props.data.P) ? 0.9 : num(props.data.P)

    const cf_1 =
      isEmpty(props.data.cf_1) && this.props.editable
        ? calculateTamanoMuestra(props.data.N, P, Z, this.getErrorTolerable(E))
        : num(props.data.cf_1)

    this.state = {
      step: 1,
      values: {
        Z,
        E,
        P,
        cf_1,
        pry_1: props.data.pry_1,
        pry_2: props.data.pry_2,
        pry_3: props.data.pry_3,
        Ev: props.data.Ev,
        conclusion_custom_mas: props.data.conclusion_custom_mas || ''
      },
      muestras:
        muestras == null && this.props.editable
          ? this.generarMuestras(cf_1)
          : _.map(muestras, (muestra: MuestraItem) => {
              if (!isEmpty(muestra.r)) {
                muestra.r = parseFloat(muestra.r + '')
              }
              return muestra
            })
    }

    if (muestras != null) {
      _.forEach(muestras, (muestra) => cacheMuestra(muestra))
    } else if (this.props.editable) {
      $.blockUI(create_blockUI_loading_message('Guardando cambios'))

      this.sendToServer({
        type: 'mas',
        muestras: this.state.muestras,
        fields: _.omit(this.state.values, [ 'conclusion_custom_mas' ])
      }).done(() => {
        $.unblockUI()
      })
    }
  }

  isClosed() {
    return !!this.props.data.ficha_tecnica_mas_date
  }

  isReadOnly() {
    return !this.props.editable || !!this.props.data.ficha_tecnica_mas_date
  }

  attachHandler(field: string, handler: any) {
    if (!this.handlers[field]) {
      this.handlers[field] = handler
    }

    return this.handlers[field]
  }

  getErrorTolerable(E: number) {
    if (E == -1) {
      const materialidad = parseFloat(getvalue(app, 'vars.muestreo.materialidad.total_planeacion', 0))
      return 100 * materialidad / this.props.data.M
    } else {
      return E
    }
  }

  generarMuestras(tamano_muestra: number) {
    const muestras = generarMuestras(app.vars.muestras, tamano_muestra)
    const cache = getCacheAllMuestra()
    _.forEach(muestras, (muestra, k) => {
      if (typeof cache[muestra.cod] != 'undefined') {
        muestras[k].r = cache[muestra.cod]
      }
    })

    return muestras
  }

  isValidToStep3() {
    return _.all(this.state.muestras, (muestra) => muestra.r != null)
  }

  sendToServer(params: any) {
    if (this.isReadOnly()) {
      return
    }

    params.t = 'mas'
    if (typeof params.fields !== 'undefined') {
      params.fields = _.map(params.fields, (value, key) => {
        return { field: key, value }
      })
    }
    return $.post(url_for(`proyecto_muestreo/${this.props.id}/config`), params)
  }

  onChangeSelect = (field: string) => {
    return this.attachHandler(field, (ev: SyntheticEvent) => {
      const value = (ev.target as any).value
      this.setState((prevState) => {
        const newValues: AppMuestreoMasStateValueType = Object.assign({}, prevState.values, {
          [field]: parseFloat(value)
        })

        newValues.cf_1 = calculateTamanoMuestra(
          this.props.data.N,
          newValues.P,
          newValues.Z,
          this.getErrorTolerable(newValues.E)
        )

        newValues.Ev = this.getErrorTolerable(newValues.E) * this.props.data.M / 100

        const muestras = this.generarMuestras(newValues.cf_1)

        this.sendToServer({ muestras, fields: _.omit(newValues, [ 'conclusion_custom_mas' ]) })

        return { values: newValues, muestras }
      })
    })
  }

  onChangeMuestra = (muestra: MuestraItem, persist: boolean) => {
    if (this.isReadOnly()) {
      return
    }

    const num = (num: any) => (isNaN(parseFloat(num)) ? 0 : parseFloat(num))

    this.setState((prevState) => {
      if (!this.hasModified) {
        const prevValue = _.find(prevState.muestras, { cod: muestra.cod })
        if (!_.isEqual(prevValue, muestra)) {
          this.hasModified = true
        }
      }

      const muestras = _.map(prevState.muestras, (_muestra) => {
        return muestra.cod == _muestra.cod ? muestra : _muestra
      })

      if (!persist) {
        return { muestras, values: prevState.values }
      }

      const values = { ...prevState.values }

      let total_diff: number = 0
      _.forEach(muestras, (muestra) => {
        if (!isEmpty(muestra.v) && !isEmpty(muestra.r)) {
          total_diff += muestra.v - muestra.r
        }
      })

      const total_e = _.reduce(muestras, (acc: number, curr) => acc + num(curr.v), 0)

      values.pry_1 = this.props.data.M * total_diff / total_e
      values.pry_2 = 100 * values.pry_1 / this.props.data.M

      const error_tolerable = this.getErrorTolerable(values.E)
      const error_muestral: number = this.props.data.M * error_tolerable / 100

      values.pry_3 = Math.abs(values.pry_1) > Math.abs(error_muestral) ? 'SI' : 'NO'

      if (this.hasModified) {
        this.sendToServer({ muestras, fields: _.omit(values, [ 'conclusion_custom_mas' ]) })
        this.hasModified = false
      }

      return { muestras, values }
    })
    cacheMuestra(muestra)
  }

  onSaveConclusion = (editor: CKEDITOR.editor) => {
    if (this.isReadOnly()) {
      return
    }

    this.setState((prevState) => {
      const values = { ...prevState.values }
      values.conclusion_custom_mas = editor.getData()

      this.sendToServer({ fields: { conclusion_custom: values.conclusion_custom_mas } })

      return { values }
    })
  }

  onClickNext = () => {
    this.goToStep(this.state.step + 1)
  }

  onClickPrev = () => {
    this.goToStep(this.state.step - 1)
  }

  goToStep = (step: number) => {
    if (step == 3 && !this.isValidToStep3()) {
      bootbox.alert(
        'Debe ingresar el Valor según Auditoría de <u>TODAS</u> las operaciones de la muestra para continuar.'
      )
      return
    }
    this.setState({ step })
  }

  renderNavigation() {
    const { step } = this.state
    return (
      <Fragment>
        <nav className='nav-actions'>
          {step > 1 && (
            <button className='ui button primary left floated' onClick={this.onClickPrev}>
              Anterior
            </button>
          )}
          {step < 3 && (
            <button className='ui button primary right floated' onClick={this.onClickNext}>
              Siguiente
            </button>
          )}
          <div className='clearfix' />
        </nav>
        {this.isClosed() &&
        !this.isClosed() && (
          <FormFichaTecnica isReadOnly id_muestreo={this.props.id} id_visita={this.props.id_visita} />
        )}
        {!this.props.editable && (
          <div className='_a-center'>
            <a
              href={url_for2(
                `proyecto/:id_proyecto/paso/${app.vars.idpaso}/visita/${this.props.id_visita}/muestreo/${this.props.id}`
              )}
              target='_blank'
              className='btn btn-lg btn-edit'
            >
              Editar
            </a>
          </div>
        )}
      </Fragment>
    )
  }

  renderProgressBar() {
    const progress = _.size(_.filter(this.state.muestras, (muestra) => !isEmpty(muestra.r)))
    const total = _.size(this.state.muestras)

    return (
      <div className='ui grid'>
        <div className='column fifteen wide'>
          <div className='ui tiny green progress' data-percent={num(Math.floor(100 * progress / total))}>
            <div className='bar' style={{ width: `${Math.floor(100 * progress / total)}%` }}>
              <div className='progress' />
            </div>
          </div>
        </div>
        <div className='column one wide' style={{ fontSize: 12, padding: 8 }}>
          {progress} / {total}
        </div>
      </div>
    )
  }

  renderStepContent() {
    switch (this.state.step) {
      case 1:
        return this.renderStep1Content()
      case 2:
        return this.renderStep2Content()
      case 3:
        return this.renderStep3Content()
    }
  }

  renderStep1Content() {
    return (
      <Fragment>
        <div className='ui two column grid'>
          <div className='column'>
            <table className='ui table'>
              <thead>
                <tr>
                  <th>Parámetros</th>
                  <th>%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Error Tolerable
                    <GenericTooltip text='@tooltip.muestreo.error_tolerable' title='Error Tolerable' wide />
                  </td>
                  <td>
                    {this.isReadOnly() ? this.state.values.E == -1 ? (
                      'Mat. Planeación'
                    ) : (
                      `${this.state.values.E}%`
                    ) : (
                      <select
                        className='raw-select input-mini'
                        value={this.state.values.E}
                        onChange={this.onChangeSelect('E')}
                      >
                        <option value='-1'>Mat. Planeación</option>
                        <option disabled>-</option>
                        {_.map(_.range(3, 21), (v) => {
                          return (
                            <option key={v} value={v}>
                              {v}%
                            </option>
                          )
                        })}
                      </select>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    Nivel de Confianza (z)
                    <GenericTooltip text='@tooltip.muestreo.nivel_confianza' title='Nivel de Confianza' />
                  </td>
                  <td>
                    {this.isReadOnly() ? (
                      `${this.state.values.Z}%`
                    ) : (
                      <select
                        className='raw-select input-mini'
                        value={this.state.values.Z}
                        onChange={this.onChangeSelect('Z')}
                      >
                        {_.map(_.range(50, 96), (v) => {
                          return (
                            <option key={v} value={`${v / 100}`}>
                              {v}%
                            </option>
                          )
                        })}
                      </select>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    Error esperado (P)
                    <GenericTooltip text='@tooltip.muestreo.error_esperado' title='Error esperado' />
                  </td>
                  <td>
                    {this.isReadOnly() ? (
                      `${this.state.values.P * 10}%`
                    ) : (
                      <select
                        className='raw-select input-mini'
                        value={this.state.values.P}
                        onChange={this.onChangeSelect('P')}
                      >
                        {_.map(_.range(1, 10), (v) => {
                          return (
                            <option key={v} value={`0.${v}`}>
                              {v}%
                            </option>
                          )
                        })}
                      </select>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='column'>
            <table className='ui table'>
              <thead>
                <tr>
                  <th>Resultados</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Valor Contable de la Población</td>
                  <td className='right aligned'>{accounting.formatNumber(this.props.data.M)}</td>
                </tr>
                <tr>
                  <td>Tamaño de la Población</td>
                  <td className='right aligned'>{accounting.formatNumber(this.props.data.N)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='b3'>
          <span>
            Tamaño de la Muestra (<em style={{ fontFamily: 'serif' }}>n</em>)<sup className='footnote'>[1]</sup>
          </span>
          <div className='math-equation'>
            <table>
              <tbody>
                <tr>
                  <td rowSpan={2}>&nbsp;</td>
                  <td className='math-eq-var' style={{ fontSize: 11, borderBottom: '1px solid #333' }}>
                    P * Q * z<sup>2</sup> * N{' '}
                  </td>
                  <td rowSpan={2}>&nbsp;</td>
                </tr>
                <tr>
                  <td className='math-eq-var' style={{ fontSize: 11 }}>
                    N * E<sup>2</sup> * z<sup>2</sup> * P * Q
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <strong>{accounting.formatNumber(this.state.values.cf_1)} elementos</strong>
        </div>
        <div className='footnotes'>[1] {getvalue(app.vars.texts, 'tooltip.muestreo.footnote_tamanomuestra_mas')}</div>
        {this.renderNavigation()}
      </Fragment>
    )
  }

  renderStep2Content() {
    return (
      <Fragment>
        {this.renderProgressBar()}
        <div>
          <TableMuestras muestras={this.state.muestras} readonly={this.isReadOnly()} onChange={this.onChangeMuestra} />
        </div>
        {this.renderNavigation()}
      </Fragment>
    )
  }

  renderStep3Content() {
    const num = (num: any) => (isNaN(parseFloat(num)) ? 0 : parseFloat(num))
    const sumV = _.reduce(this.state.muestras, (acc: number, curr) => acc + num(curr.v), 0)
    const sumR = _.reduce(this.state.muestras, (acc: number, curr) => acc + num(curr.r), 0)

    return (
      <Fragment>
        <div>
          <table className='ui table'>
            <thead>
              <tr>
                <th>Resultados</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div
                    style={{
                      display: 'inline-block',
                      verticalAlign: 'top',
                      marginTop: 10
                    }}
                  >
                    Tamaño de la muestra
                  </div>
                  <div className='math-equation'>
                    <table>
                      <tbody>
                        <tr>
                          <td rowSpan={2}>&nbsp;</td>
                          <td className='math-eq-var' style={{ fontSize: 11, borderBottom: '1px solid #333' }}>
                            P * Q * z<sup>2</sup> * N{' '}
                          </td>
                          <td rowSpan={2}>&nbsp;</td>
                        </tr>
                        <tr>
                          <td className='math-eq-var' style={{ fontSize: 11 }}>
                            N * E<sup>2</sup> * z<sup>2</sup> * P * Q
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
                <td className='right aligned'>{accounting.formatNumber(this.state.values.cf_1)}</td>
              </tr>

              <tr>
                <td>Valor error tolerable</td>
                <td className='right aligned'>
                  {accounting.formatNumber(this.props.data.M * this.getErrorTolerable(this.state.values.E) / 100)}
                </td>
              </tr>

              <tr>
                <td>Valor contable de la muestra</td>
                <td className='right aligned'>{accounting.formatNumber(sumV)}</td>
              </tr>

              <tr>
                <td>Valor errores encontrados por el auditor</td>
                <td className='right aligned'>{accounting.formatNumber(sumV - sumR)}</td>
              </tr>
            </tbody>
          </table>

          <table className='ui table'>
            <thead>
              <tr>
                <th colSpan={2}>
                  Proyección de error <em>No aplica para pruebas de controles</em>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Proyección de los errores en la población</td>
                <td className='right aligned'>{accounting.formatNumber(this.state.values.pry_1)}</td>
              </tr>

              <tr>
                <td>Índice de error proyectado</td>
                <td className='right aligned'>{accounting.formatNumber(this.state.values.pry_2)}%</td>
              </tr>

              <tr>
                <td>
                  Error proyectado es <u>superior</u> al Error tolerable
                </td>
                <td className={cx('right aligned', 'rs-' + this.state.values.pry_3)}>{this.state.values.pry_3}</td>
              </tr>
            </tbody>
          </table>

          <div className='ui segment'>
            <EditorPreview
              editable={!this.isReadOnly()}
              label='Conclusión:'
              prefixPreview='Conclusión:'
              data={this.state.values.conclusion_custom_mas}
              ckeditorOptions='basic'
              onSave={this.onSaveConclusion}
            />
          </div>
        </div>
        {this.renderNavigation()}

        {!this.isClosed() && (
          <FormFichaTecnica isReadOnly={false} id_muestreo={this.props.id} id_visita={this.props.id_visita} />
        )}
        {!this.props.editable &&
        !this.isClosed() && (
          <div className='_a-center'>
            <a
              href={url_for2(
                `proyecto/:id_proyecto/paso/${app.vars.idpaso}/visita/${this.props.id_visita}/muestreo/${this.props.id}`
              )}
              target='_blank'
              className='btn btn-lg btn-edit'
            >
              Editar
            </a>
          </div>
        )}
      </Fragment>
    )
  }

  render() {
    const { step } = this.state

    return (
      <div id='mainpane-mas'>
        {this.isClosed() && (
          <div className='alert alert-block alert-info'>
            <span className='icon-info-sign' /> <strong>NOTA:</strong> La ficha técnica perteneciente a este muestreo ya
            fue generada, por lo tanto los parámetros y registros de esta muestra utilizando esta metodología
            <strong> NO</strong> pueden ser modificados.
          </div>
        )}
        <div className='ui top attached steps ordered'>
          <div
            className={cx({ active: step == 1, completed: step > 1 }, 'step link first')}
            onClick={() => this.goToStep(1)}
          >
            <div className='content'>
              <div className='title'>Cálculo del Tamaño de la Muestra</div>
            </div>
          </div>
          <div
            className={cx({ active: step == 2, completed: step > 2 }, 'step link ')}
            onClick={() => this.goToStep(2)}
          >
            <div className='content'>
              <div className='title'>Muestra y Evaluación de Resultados</div>
            </div>
          </div>
          <div
            className={cx({ active: step == 3, completed: step > 3 }, 'step link last')}
            onClick={() => this.goToStep(3)}
          >
            <div className='content'>
              <div className='title'>Conclusión</div>
            </div>
          </div>
        </div>
        <div className='ui segment attached'>
          <div>{this.renderStepContent()}</div>
        </div>
      </div>
    )
  }
}
