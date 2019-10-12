declare var app: any
declare var accounting: any

declare function url_for(url: string): string

export interface MuestraItem {
  v: number
  r?: number
  cod: string
}

export enum MuestreoType {
  Mas = 'mas',
  Mum = 'mum'
}

export abstract class BaseMuestreo {
  
  protected cache_muestras: any = {}
  protected type: MuestreoType

  constructor(type: MuestreoType) {
    this.type = type
    this.configurar_wizard()
  }

  /**
   * Formatea un numero. Si es NaN, se muestra 0.
   *
   * @param number El numero a formatear.
   * @param decimals Cantidad de decimales a mostrar.
   *
   * @returns Numero formateado
   */
  public static formatNumber(number: number, decimals: number = 0): string {
    if (isNaN(number)) {
      return '0'
    }

    return accounting.formatNumber(number, decimals)
  }

  protected configurar_wizard() {
    let self = this
    $(`#pane-${this.type}-evaluacion .btn-next`).on('click', function(ev) {
      ev.preventDefault()

      let emptyFields = $(`#table-muestreo-${self.type}-evaluacion .muestra-v-real input`).filter(function() {
        return $(this).val() == ''
      })

      if (emptyFields.length > 0) {
        bootbox.alert(
          'Debe ingresar el Valor según Auditoría de <u>TODOS</u> los documentos de la muestra para continuar.'
        )
        return
      }

      ;(<any>$(this.hash)).tab('show')
    })

    $(`#mainpane-${this.type}`)
      .find('.btn-next, .btn-back')
      .not(`#pane-${this.type}-evaluacion .btn-next`)
      .on('click', function(ev) {
        ev.preventDefault()
        ;(<any>$(this.hash)).tab('show')
      })
  }

  public guardar_cambios_muestreo = function($input: JQuery, guardar_muestras: boolean = true): void {
    const self = this
    const url: string = url_for(`proyecto_muestreo/${app.vars.ID_MUESTREO}/config`)
    let params: any = {}

    if ($input.length > 1) {
      /* Si son varios inputs */
      params = { fields: [], t: this.type }
      $input.each(function() {
        params['fields'].push({ field: $(this).prop('name').substr(7), value: $(this).val() })
      })
    } else if ($input.length == 1) {
      params = { field: $input.prop('name').substr(7), value: $input.val(), t: this.type }
    } else {
      return
    }

    $.post(url, params, function() {
      if (guardar_muestras) {
        self.guardar_cambios_muestras()
      }
    })
  }

  completar_cache_muestras(muestras: MuestraItem[]): void {
    let self = this
    _.forEach(muestras, function(item: MuestraItem) {
      if (typeof self.cache_muestras[item.cod] === 'undefined' || self.cache_muestras[item.cod] === '') {
        self.cache_muestras[item.cod] = item.r
      }
    })
  }

  calcular_valor_error_en_evaluacion($tr: JQuery): void {
    $tr.find('.muestra-v-diff, .muestra-v-diff-p').html('')

    const cod: string = $tr.find('.muestra-cod input:hidden').val()

    if ($tr.find('.muestra-v-real input').val() === '') {
      this.cache_muestras[cod] = ''

      return
    }

    const valor_esperado: number = +$tr.find('.muestra-v input:hidden').val()
    const valor_real: number = +(<any>$tr.find('.muestra-v-real input')).autoNumeric('get')

    if (isNaN(valor_real)) {
      return
    }

    const valor_diff: number = valor_esperado - valor_real
    const valor_diff_p: number = valor_esperado != 0 ? 100 * valor_diff / valor_esperado : 0

    $tr.find('.muestra-v-diff').html(BaseMuestreo.formatNumber(valor_diff)).data('valor', valor_diff)
    $tr.find('.muestra-v-diff-p').html('' + Math.floor(valor_diff_p) + '%')

    this.cache_muestras[cod] = valor_real
  }

  guardar_cambios_muestras(): void {
    const url: string = url_for(`proyecto_muestreo/${app.vars.ID_MUESTREO}/config`)

    let muestras: object[] = []

    $(`#table-muestreo-${this.type}-evaluacion tbody tr`).each(function(k) {
      let cod: string = $(this).find('.muestra-cod input').val()
      let value: number = (<MuestraItem>_.find(app.vars.muestras, { cod: cod })).v
      let real: number = (<any>$(this).find('.muestra-v-real input')).autoNumeric('get')

      muestras.push({ cod: cod, v: value, r: real })
    })
    $.post(url, { muestras: muestras, t: this.type }, $.noop, 'json')
  }
}
