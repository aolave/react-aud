import * as base from './_proyecto_muestreo_base'

declare var app: any
declare var jStat: any

class MuestreoMum extends base.BaseMuestreo {
  constructor() {
    super(base.MuestreoType.Mum)
  }

  /**
   * Returns the value of probability in the inverse of the cdf for the Gamma distribution with the parameter alpha and scale = 1.
   *
   * @param {number} probability The probability associated with the gamma distribution.
   * @param {number} alpha A parameter to the distribution.
   *
   * @return {number} The inverse of the gamma cumulative distribution.
   *
   * @see http://jstat.github.io/all.html#jStat.gamma.inv
   * @see https://support.office.com/en-us/article/gamma-inv-function-74991443-c2b0-4be5-aaab-1aa4d71fbb18
   */
  gamma_inv(probability: number, alpha: number): number {
    return jStat.gamma.inv(probability, alpha, 1)
  }

  /**
   * Redondea con 2 decimales
   *
   * @param {number} number Numero a redondear
   *
   * @returns number
   */
  roundup2(number: number): number {
    let rounded_number = Math.round(number * 100) / 100

    if (rounded_number < number) {
      rounded_number += 0.01
    }

    return rounded_number
  }

  calcular_factor_confianza(riesgo_esperado: number, cociente: number): number {
    let f: number = this.gamma_inv(1 - riesgo_esperado, 1)

    if (cociente == 0) {
      return this.roundup2(f)
    }

    let f1: number = 0
    let i: number = 0
    while (Math.abs(f1 - f) > 0.000001 && i <= 1000) {
      f1 = f
      f = this.gamma_inv(1 - riesgo_esperado, 1 + cociente * f1)
      i++
    }

    return this.roundup2(f)
  }

  calcular_tamano_muestra(): number {
    //$('#mainpane-mum .cf-1').html('<span class="ajax-loader-snake"></span> ');

    const volumen_poblacion: number = Math.abs($('#cg2-m').data('valor'))
    const nivel_confianza: number = +$('#cg-z2 select').val()
    const riesgo_aceptacion: number = Math.floor(100 - nivel_confianza)

    $('#cg-z2--inverted').html(riesgo_aceptacion + '%')

    const error_tolerable: number = +$('#cg-e2 select').val()
    const error_tolerable_valor: number = volumen_poblacion * error_tolerable / 100
    $('#cg-e2--v').html(base.BaseMuestreo.formatNumber(error_tolerable_valor))
    $('#cg-e2--v2').html(base.BaseMuestreo.formatNumber(error_tolerable_valor)).data('valor', error_tolerable_valor)

    const factor_confianza: number = this.roundup2(this.gamma_inv(nivel_confianza / 100, 1))

    $('#cg2-1').html('' + base.BaseMuestreo.formatNumber(factor_confianza, 2)).data('valor', factor_confianza)
    $('#mum-config_cg2_1').val(factor_confianza)

    const tamano_muestra: number = Math.round(volumen_poblacion * factor_confianza / error_tolerable_valor)
    $('#cg2-3').html('' + base.BaseMuestreo.formatNumber(tamano_muestra))
    $('#mum-config_cg2_3').val(tamano_muestra)

    const intervalo: number = Math.floor(volumen_poblacion / tamano_muestra)
    $('#cg2-4').html('' + base.BaseMuestreo.formatNumber(intervalo)).data('valor', intervalo)
    $('#mum-config_cg2_4').val(intervalo)

    return tamano_muestra
  }

  public generar_tabla_muestra(muestras_actuales: base.MuestraItem[] = []): void {
    const $table = $(`#table-muestreo-${this.type}-evaluacion`)
    const trTemplate: string = $('#muestreo-evaluacion-row-template').html()

    // Reset table body
    $table.find('tbody').html('')

    const tamano_muestra: number = this.calcular_tamano_muestra()

    let muestras: base.MuestraItem[] = []

    if (
      typeof app.vars.muestreo_config.ficha_tecnica_mum_date === 'undefined' &&
      muestras_actuales.length != tamano_muestra
    ) {
      // Copia de las muestras originales.
      muestras = _.clone(app.vars.muestras, true)
      muestras = _.filter(muestras, (item) => item.v > 0) // Elimina muestras con valores negativos o cero

      const intervalo: number = Math.floor($('#cg2-4').data('valor'))
      const muestras_e: base.MuestraItem[] = _.filter(muestras, (item) => item.v >= intervalo)

      if (muestras_e.length > tamano_muestra) {
        muestras = _.take(_.sortBy(muestras_e, 'v'), tamano_muestra)
      } else {
        let muestras_s: base.MuestraItem[] = _.filter(muestras, (item) => item.v < intervalo)
        let volumen_s = 0
        muestras_s.forEach((item) => {
          volumen_s += item.v
        })

        const tamano_muestra_s = tamano_muestra - muestras_e.length
        const intervalo_s = volumen_s / tamano_muestra_s
        const seed_s = Math.floor(Math.random() * intervalo_s) + 1
        let muestras_s_tmp = _.shuffle(muestras_s)
        muestras_s = []

        let interval_k = 0
        let interval_acumulado = 0
        for (let k in muestras_s_tmp) {
          if (interval_k >= tamano_muestra_s) {
            break
          }

          const item = muestras_s_tmp[k]
          interval_acumulado += item.v

          const acumulado_item = seed_s + interval_k * intervalo_s
          if (interval_acumulado >= acumulado_item) {
            muestras_s.push(item)
            interval_k++
          }
        }

        muestras = _.union(muestras_e, muestras_s)
      }

      muestras = _.sortBy(muestras, 'cod') // Las ordeno por codigo

      // Adicionar valor real ingresado, si existe.
      for (let k = 0; k < muestras.length; k++) {
        let _m = _.find(muestras_actuales, { cod: muestras[k].cod })
        if (_m) {
          muestras[k].r = _m.r
        }
      }
    } else {
      muestras = _.clone(muestras_actuales)
    }

    let total: number = 0
    for (let k = 0; k < muestras.length; k++) {
      const item: base.MuestraItem = muestras[k]

      if ((!item.r || '' + item.r === '') && this.cache_muestras[item.cod]) {
        item.r = this.cache_muestras[item.cod]
      }

      const tr: string = _.template(trTemplate)({ item: item, k: k, type: this.type })

      // Append tr to tbody
      const $tr = $(tr).appendTo($table.find('tbody'))

      const $vrealInput: any = $tr.find('.muestra-v-real input')
      $vrealInput.autoNumeric('init', {
        decimalCharacter: ',',
        minimumValue: -9999999999999,
        maximumValue: 9999999999999,
        digitGroupSeparator: '.',
        unformatOnSubmit: true
      })

      total += Math.floor(item.v)

      if (item.r) {
        this.calcular_valor_error_en_evaluacion($tr)
      }
    }

    $('.total-v').html(base.BaseMuestreo.formatNumber(total)).data('valor', total)

    this.calcular_totales_en_evaluacion()
  }

  calcular_totales_en_evaluacion(): void {
    const self = this
    const $pane = $(`#mainpane-${this.type}`)
    let total_real: number = 0

    $(`#${this.type}-total-v-real`).html(function() {
      $(`#table-muestreo-${self.type}-evaluacion`).find('.muestra-v-real input').each(function() {
        const v: number = +(<any>$(this)).autoNumeric('get')
        if (!isNaN(v)) {
          total_real += v
        }
      })

      return base.BaseMuestreo.formatNumber(total_real)
    })

    let total_diff: number = 0

    const trTemplate: string = $('#muestreo-evaluacionerror-row-template').html()
    const intervalo: number = Math.floor($('#cg2-4').data('valor'))

    const nivel_confianza: number = +$('#cg-z2 select').val()
    const riesgo_aceptacion: number = Math.floor(100 - nivel_confianza)
    const factor_confianza = this.roundup2(this.gamma_inv(nivel_confianza / 100, 1))

    // ----------- Calcular error proyectado ------------------------
    let tolerancia_incremental: number = 0
    let total_error_proyectado: number = 0
    let items_inferiores: { v: number; r: number; contaminacion: number; error_proyectado: number }[] = []
    $('#table-mum-muestraserradas').removeClass('hidden')
    $('#table-mum-muestraserradas tbody').html('')
    $(`#table-muestreo-${this.type}-evaluacion`).find('.muestra-v-diff').each(function() {
      const diff: number = +$(this).data('valor')
      if (!isNaN(diff)) {
        total_diff += diff

        if (diff == 0) {
          return true
        }

        const $parent_row: JQuery = $(this).closest('tr')
        const cod: string = $parent_row.find('.muestra-cod input').val()
        const v: number = $parent_row.find('.muestra-v input').val()
        const r: number = (<any>$parent_row.find('.muestra-v-real input')).autoNumeric('get')

        const contaminacion = (v - r) / v
        const error_proyectado = v > intervalo ? v - r : contaminacion * intervalo

        total_error_proyectado += error_proyectado

        const item = { cod, v, r, error: v - r, contaminacion, intervalo, error_proyectado }

        let tr: string = _.template(trTemplate)(item)

        let $tr = $(tr).appendTo($('#table-mum-muestraserradas tbody'))
        if (v > intervalo) {
          $tr.addClass('g2')
        } else {
          items_inferiores.push({ v, r, contaminacion, error_proyectado })
        }
      }
    })

    items_inferiores = _.sortBy(items_inferiores, 'error_proyectado').reverse()
    let total_error_proyectado_inferiores: number = 0
    for (let k in items_inferiores) {
      let factor_incremental = self.roundup2(self.gamma_inv(1 - riesgo_aceptacion / 100, 1 + parseInt(k) + 1))
      factor_incremental -= self.roundup2(self.gamma_inv(1 - riesgo_aceptacion / 100, 1 + parseInt(k)))
      factor_incremental = Math.round(factor_incremental * 100) / 100

      tolerancia_incremental += items_inferiores[k]['error_proyectado'] * factor_incremental
      total_error_proyectado_inferiores += items_inferiores[k]['error_proyectado']
    }

    const total_e: number = +$(`#${this.type}-total-v`).data('valor')
    const total_diff_p: number = total_e != 0 ? 100 * total_diff / total_e : 0

    $(`#${this.type}-total-v-real-diff-p`).html('' + Math.floor(total_diff_p) + '%')

    $('.mum-total-error-proyectado').html(base.BaseMuestreo.formatNumber(total_error_proyectado))
    if (total_error_proyectado == 0) {
      $('#table-mum-muestraserradas').addClass('hidden')
    }

    const precision_basica: number = intervalo * factor_confianza
    $('#mum-precision-basica').html(base.BaseMuestreo.formatNumber(precision_basica))

    tolerancia_incremental -= total_error_proyectado_inferiores
    $('#mum-tolerancia-incremental').html(base.BaseMuestreo.formatNumber(tolerancia_incremental))

    $('#mum-tolerancia').html(base.BaseMuestreo.formatNumber(precision_basica + tolerancia_incremental))

    const cota_superior = precision_basica + total_error_proyectado + tolerancia_incremental
    $('#mum-cota-superior').html(base.BaseMuestreo.formatNumber(cota_superior))

    const error_tolerable: number = Math.floor($('#cg-e2--v2').data('valor'))

    $('#mum-conclusion-diff').html(base.BaseMuestreo.formatNumber(error_tolerable - cota_superior))

    $pane.find('.total-v-diff').html(base.BaseMuestreo.formatNumber(total_diff))

    $('#mum-config_total_error_proyectado').val(total_error_proyectado)
    $('#mum-config_tolerancia').val(precision_basica + tolerancia_incremental)
    $('#mum-config_cota_superior').val(cota_superior)
    $('#mum-config_e2__v2').val($('#cg-e2--v2').data('valor'))

    self.guardar_cambios_muestreo($('#mum-hidden_config_values input'), false)
  }
}

$(function() {
  let mum = new MuestreoMum()

  $(document).ajaxSend(function() {
    $('#fichatecnicaform').addClass('loadingblocked').block({ message: 'Guardando...', css: { color: 'white' } })
  })

  $(document).ajaxStop(function() {
    $('#fichatecnicaform').removeClass('loadingblocked').unblock()
  })

  $('#table-muestreo-mum').on('change', '.col-numeric input, .col-numeric select', function() {
    mum.generar_tabla_muestra()
    mum.guardar_cambios_muestreo($(this))
  })

  let muestras_actuales: base.MuestraItem[] = []
  if (_.has(app.vars.muestreo_config, 'muestras.mum')) {
    muestras_actuales = app.vars.muestreo_config.muestras.mum
  }

  if (_.has(app.vars.muestreo_config, 'muestras.mas')) {
    mum.completar_cache_muestras(app.vars.muestreo_config.muestras.mas)
  }
  mum.generar_tabla_muestra(muestras_actuales)

  $('#table-muestreo-mum-evaluacion').on('change', 'input', function() {
    mum.calcular_valor_error_en_evaluacion($(this).closest('tr'))
    mum.calcular_totales_en_evaluacion()
    mum.guardar_cambios_muestras()
  })

  $('#mum-conclusion-custom').on('change', function() {
    mum.guardar_cambios_muestreo($(this), false)
  })

  $('#tab-mum-conclusion').on('click', function(ev) {
    var hasEmpty =
      $('#table-muestreo-mum-evaluacion .muestra-v-real input').filter(function() {
        return $(this).val() == ''
      }).length > 0
    if (hasEmpty) {
      ev.preventDefault()
      ev.stopPropagation()
      bootbox.alert(
        'Debe ingresar el Valor según Auditoría de <u>TODAS</u> las operaciones de la muestra para continuar.'
      )
      ;(<any>$('#tab-mum-evaluacion')).tab('show')
      return false
    }
  })
})
