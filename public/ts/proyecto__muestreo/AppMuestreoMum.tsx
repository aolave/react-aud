import { PureComponent, SyntheticEvent, Fragment } from 'react'

import cx from 'classnames'
import getvalue from 'get-value'
import { GenericTooltip } from '../global/Tooltip'
import { calculateFactorConfianza, calculateTamanoMuestra, generarMuestras, calculatePrecision } from './utils_mum'
import { isEmpty, cacheMuestra, getCacheAllMuestra } from './utis'
import EditorPreview from '../global/EditorPreview'
import { TableMuestras, TableErrores, ConclusionTooltip, FormFichaTecnica } from './TableMuestra'

declare var app: any

type AppMuestreoMumProps = {
  id: string
  id_visita: string
  data: any
  editable: boolean
}

type AppMuestreoMumStateValueType = {
  /** Nivel confianza */
  Z2: number
  /** Porcentaje Error Máximo Tolerable */
  E2: number
  /**Error maximo tolerable */
  e2__v2: number
  total_error_proyectado: number
  tolerancia: number
  /** Factor confianza */
  cg2_1: number
  /** Tamaño de la muestra */
  cg2_3: number
  /** Intervalo */
  cg2_4: number
  conclusion_custom: string
}

type AppMuestreoMumState = {
  step: number
  values: AppMuestreoMumStateValueType
  muestras: MuestraItem[]
}

function num(string: string | number) {
  const value = parseFloat('' + string)

  return isNaN(value) ? 0 : value
}

export default class AppMuestreoMum extends PureComponent<AppMuestreoMumProps, AppMuestreoMumState> {
  private handlers: { [s: string]: any } = {}

  private hasModified: boolean = false

  constructor(props: AppMuestreoMumProps) {
    super(props)

    const muestras = getvalue(props.data, 'muestras.mum', null)

    const Z2 = isEmpty(props.data.Z2) ? 90 : num(props.data.Z2)
    const E2 = isEmpty(props.data.E2) ? (muestras === null ? -1 : 5) : num(props.data.E2)

    const error_maximo =
      isEmpty(props.data.e2__v2) && this.props.editable ? props.data.M * E2 / 100 : num(props.data.e2__v2)
    const factor_confianza =
      isEmpty(props.data.cg2_1) && this.props.editable ? calculateFactorConfianza(Z2) : num(props.data.cg2_1)
    const tamano_muestra =
      isEmpty(props.data.cg2_3) && this.props.editable
        ? calculateTamanoMuestra(this.props.data.M, factor_confianza, error_maximo)
        : num(props.data.cg2_3)
    const intervalo =
      isEmpty(props.data.cg2_4) && this.props.editable
        ? Math.floor(this.props.data.M / tamano_muestra)
        : num(props.data.cg2_4)

    this.state = {
      step: 1,
      values: {
        Z2,
        E2,
        e2__v2: error_maximo,
        total_error_proyectado: props.data.total_error_proyectado,
        tolerancia: props.data.tolerancia,
        cg2_1: factor_confianza,
        cg2_3: tamano_muestra,
        cg2_4: intervalo,
        conclusion_custom: props.data.conclusion_custom || ''
      },
      muestras:
        muestras == null && this.props.editable
          ? this.generarMuestras(tamano_muestra, intervalo)
          : _.map(muestras, (muestra: MuestraItem) => {
              if (!isEmpty(muestra.r)) {
                muestra.r = num(muestra.r + '')
              }
              return muestra
            })
    }

    if (muestras != null) {
      _.forEach(muestras, (muestra) => cacheMuestra(muestra))
    } else if (this.props.editable) {
      $.blockUI(create_blockUI_loading_message('Guardando cambios'))

      this.sendToServer({
        type: 'mum',
        muestras: this.state.muestras,
        fields: _.omit(this.state.values, [ 'conclusion_custom' ])
      }).done(() => {
        $.unblockUI()
      })
    }
  }

  isClosed() {
    return !!this.props.data.ficha_tecnica_mum_date
  }

  isReadOnly() {
    return !this.props.editable || !!this.props.data.ficha_tecnica_mum_date
  }

  attachHandler(field: string, handler: any) {
    if (!this.handlers[field]) {
      this.handlers[field] = handler
    }

    return this.handlers[field]
  }

  generarMuestras(tamano_muestra: number, intervalo: number) {
    const muestras = generarMuestras(app.vars.muestras, tamano_muestra, intervalo)
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

    params.t = 'mum'
    if (typeof params.fields !== 'undefined') {
      params.fields = _.map(params.fields, (value, key) => {
        return { field: key, value }
      })
    }
    return $.post(url_for(`proyecto_muestreo/${app.vars.ID_MUESTREO}/config`), params)
  }

  onChangeSelect = (field: string) => {
    return this.attachHandler(field, (ev: SyntheticEvent) => {
      const value = (ev.target as any).value
      this.setState((prevState) => {
        const newValues: AppMuestreoMumStateValueType = Object.assign({}, prevState.values, {
          [field]: parseInt(value)
        })

        const materialidad = parseFloat(getvalue(app, 'vars.muestreo.materialidad.total_planeacion', 0))
        newValues.e2__v2 =
          newValues.E2 == -1
            ? this.props.data.M * (100 * materialidad / this.props.data.M) / 100
            : this.props.data.M * newValues.E2 / 100
        newValues.cg2_1 = calculateFactorConfianza(newValues.Z2)
        newValues.cg2_3 = calculateTamanoMuestra(this.props.data.M, newValues.cg2_1, newValues.e2__v2)
        newValues.cg2_4 = Math.floor(this.props.data.M / newValues.cg2_3)

        const muestras = this.generarMuestras(newValues.cg2_3, newValues.cg2_4)

        this.sendToServer({ muestras, fields: _.omit(newValues, [ 'conclusion_custom' ]) })

        return { values: newValues, muestras }
      })
    })
  }

  onChangeMuestra = (muestra: MuestraItem, persist: boolean) => {
    if (this.isReadOnly()) {
      return
    }

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

      const muestrasErradas = _.filter(muestras, (muestra) => !isEmpty(muestra.r) && muestra.v - muestra.r != 0)

      values.total_error_proyectado = _.reduce(
        muestrasErradas,
        (acc: number, muestra) => {
          const error_proyectado =
            muestra.v > values.cg2_4 ? muestra.v - muestra.r : values.cg2_4 * ((muestra.v - muestra.r) / muestra.v)

          return error_proyectado + acc
        },
        0
      )

      values.tolerancia = calculatePrecision(muestras, values.cg2_4, values.cg2_1, values.Z2)

      if (this.hasModified) {
        this.sendToServer({ muestras, fields: _.omit(values, [ 'conclusion_custom' ]) })
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
      values.conclusion_custom = editor.getData()

      this.sendToServer({ fields: { conclusion_custom: values.conclusion_custom } })

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
        {this.isClosed() && (
          <FormFichaTecnica isReadOnly id_muestreo={this.props.id} id_visita={this.props.id_visita} />
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
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Nivel de Confianza
                    <GenericTooltip text='@tooltip.muestreo.nivel_confianza' title='Nivel de Confianza' />
                  </td>
                  <td>
                    {this.isReadOnly() ? (
                      `${this.state.values.Z2}%`
                    ) : (
                      <select
                        className='raw-select input-mini'
                        value={this.state.values.Z2}
                        onChange={this.onChangeSelect('Z2')}
                      >
                        {_.map(_.range(50, 96), (v) => {
                          return (
                            <option key={v} value={v}>
                              {v}%
                            </option>
                          )
                        })}
                      </select>
                    )}
                  </td>
                  <td className='right aligned'>{100 - this.state.values.Z2}</td>
                </tr>
                <tr>
                  <td>
                    Error Máximo Tolerable
                    <GenericTooltip
                      text='@tooltip.muestreo.error_maximo_tolerable'
                      title='Error Máximo Tolerable'
                      wide
                    />
                  </td>
                  <td>
                    {this.isReadOnly() ? this.state.values.E2 == -1 ? (
                      'Mat. Planeación'
                    ) : (
                      `${this.state.values.E2}%`
                    ) : (
                      <select
                        className={cx('raw-select input-mini', 'e2-' + this.state.values.E2)}
                        value={this.state.values.E2}
                        onChange={this.onChangeSelect('E2')}
                      >
                        <option value='-1'>Mat. Planeación</option>
                        <option disabled>-</option>
                        {_.map(_.range(1, 11), (v) => {
                          return (
                            <option key={v} value={v}>
                              {v}%
                            </option>
                          )
                        })}
                      </select>
                    )}
                  </td>
                  <td className='right aligned'>{accounting.formatNumber(this.state.values.e2__v2)}</td>
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
                  <td>Tamaño de la Población</td>
                  <td className='right aligned'>{accounting.formatNumber(this.props.data.N)}</td>
                </tr>
                <tr>
                  <td>Valor Contable de la Población</td>
                  <td className='right aligned'>{accounting.formatNumber(this.props.data.M)}</td>
                </tr>
                <tr>
                  <td>Factor de Confianza</td>
                  <td className='right aligned'>{accounting.formatNumber(this.state.values.cg2_1, 2)}</td>
                </tr>
                <tr>
                  <td>
                    <span style={{ display: 'inline-block', verticalAlign: 'top' }}>
                      Intervalo de Muestreo
                      <GenericTooltip text='@tooltip.muestreo.intervalo' title='Intervalo de Muestreo' />
                    </span>
                    <div className='math-equation'>
                      <table>
                        <tbody>
                          <tr>
                            <td className='math-eq-var' style={{ fontSize: 9, borderBottom: '1px solid #333' }}>
                              Valor contable de la poblacion
                            </td>
                          </tr>
                          <tr>
                            <td className='math-eq-var' style={{ fontSize: 9 }}>
                              Tamaño de la muestra
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                  <td className='right aligned'>{accounting.formatNumber(this.state.values.cg2_4)}</td>
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
                  <td className='math-eq-var' rowSpan={2} style={{ fontSize: 9 }}>
                    n =
                  </td>
                  <td className='math-eq-var' style={{ fontSize: 11, borderBottom: '1px solid #333' }}>
                    Factor de confianza
                  </td>
                </tr>
                <tr>
                  <td className='math-eq-var' style={{ fontSize: 11 }}>
                    Error tolerable (en porcentaje)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <strong>{accounting.formatNumber(this.state.values.cg2_3)} elementos</strong>
        </div>
        <div className='footnotes'>[1] {getvalue(app.vars.texts, 'tooltip.muestreo.footnote_tamanomuestra_mum')}</div>
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
    const muestrasErradas = _.filter(
      this.state.muestras,
      (muestra) => !isEmpty(muestra.r) && muestra.v - muestra.r != 0
    )

    const total_error_proyectado = this.state.values.total_error_proyectado
    const precision = this.state.values.tolerancia

    return (
      <Fragment>
        <div>
          <TableErrores muestras={muestrasErradas} intervalo={this.state.values.cg2_4} />
          <table className='ui table'>
            <thead>
              <tr>
                <th>Resultados</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>a) Error proyectado</td>
                <td className='right aligned'>{accounting.formatNumber(Math.abs(total_error_proyectado))}</td>
              </tr>
              <tr>
                <td>
                  b) Precisión
                  <GenericTooltip text='@tooltip.muestreo.precision' title='Precision' />
                </td>
                <td className='right aligned'>{accounting.formatNumber(Math.abs(precision))}</td>
              </tr>
              <tr className='strong'>
                <td>c) Límite superior del error (a+b)</td>
                <td className='right aligned'>
                  {accounting.formatNumber(
                    Math.abs(parseFloat(total_error_proyectado + '')) + Math.abs(parseFloat(precision + ''))
                  )}
                </td>
              </tr>
              <tr className='strong'>
                <td>d) Error máximo tolerable</td>
                <td className='right aligned'>{accounting.formatNumber(this.state.values.e2__v2)}</td>
              </tr>
            </tbody>
          </table>
          <div className='ui segment'>
            <EditorPreview
              editable={!this.isReadOnly()}
              label='Conclusión:'
              prefixPreview='Conclusión:'
              data={this.state.values.conclusion_custom}
              ckeditorOptions='basic'
              onSave={this.onSaveConclusion}
            />
            <ConclusionTooltip />
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
      <div id='mainpane-mum'>
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
