import * as base from './_proyecto_muestreo_base'

declare var app: any
declare var jStat: any
declare function url_for(url: string): string

class MuestreoMas extends base.BaseMuestreo {
  constructor() {
    super(base.MuestreoType.Mas)
  }

  calcular_tamano_muestra(): number {
    $('#mainpane-mas .cf-1').html('<span class="ajax-loader-snake"></span> ')

    const cf_n: number = +$('#cf-n').data('valor')
    const cf_p: number = +$('#cf-p select').val()
    const cf_q: number = Math.round((1 - cf_p) * 10) / 10
    const cf_z: number = +$('#cf-z select').val()
    const cf_e: number = +$('#cf-e select').val()

    const n1: number = cf_p * cf_q
    const n2: number = Math.abs(jStat.studentt.inv((1 - cf_z) / 2, 100000))
    const n3: number = Math.pow(cf_e / 100 / n2, 2)
    const n4: number = n1 / cf_n
    const n5: number = Math.round(n1 / (n3 + n4))

    $('#mainpane-mas .cf-1').html('' + n5)
    $('#mas-config_cf_1').val(n5)

    $('#cf-q').html('' + cf_q + '%')

    return n5
  }

  generar_tabla_muestra(tamano_muestra: number | base.MuestraItem[]): void {
    const $table = $('#table-muestreo-mas-evaluacion')
    const trTemplate: string = $('#muestreo-evaluacion-row-template').html()

    // Reset table body
    $table.find('tbody').html('')

    let muestras: base.MuestraItem[] = []
    if (tamano_muestra instanceof Array) {
      muestras = _.clone(tamano_muestra, true)
      tamano_muestra = tamano_muestra.length
    } else {
      // Copia de las muestras originales.
      muestras = _.clone(app.vars.muestras, true)
      muestras = _.shuffle(muestras) // desordena
      muestras = _.take(muestras, tamano_muestra) // toma las N primeras
      muestras = _.sortBy(muestras, 'cod') // Las vuelve a ordenar
    }

    let total: number = 0
    for (let k = 0; k < tamano_muestra; k++) {
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
    $(`#table-muestreo-${this.type}-evaluacion`).find('.muestra-v-diff').each(function() {
      const v: number = +$(this).data('valor')
      if (!isNaN(v)) {
        total_diff += v
      }
    })

    $pane.find('.total-v-diff').html(base.BaseMuestreo.formatNumber(total_diff))

    const total_e: number = +$(`#${this.type}-total-v`).data('valor')
    const total_diff_p: number = total_e != 0 ? 100 * total_diff / total_e : 0
    const total_poblacion: number = +$('#cf-m').data('valor')

    $pane.find('.error_tolerable').html(base.BaseMuestreo.formatNumber(total_poblacion * $('#cf-e select').val() / 100))

    $(`#${this.type}-total-v-real-diff-p`).html('' + Math.floor(total_diff_p) + '%')

    const proyeccion_error: number = total_poblacion * total_diff / total_e
    $('#pry-1').html(base.BaseMuestreo.formatNumber(proyeccion_error))
    $('#mas-config_pry_1').val(proyeccion_error)

    const indice_error: number = 100 * proyeccion_error / total_poblacion
    $('#pry-2').html(base.BaseMuestreo.formatNumber(indice_error) + '%')
    $('#mas-config_pry_2').val(indice_error)

    const error_muestral: number = total_poblacion * $('#cf-e select').val() / 100

    if (proyeccion_error > error_muestral) {
      $('#pry-3').html('SI').addClass('error_muestral')
      $('#mas-config_pry_3').val('SI')
    } else {
      $('#pry-3').html('NO').removeClass('error_muestral')
      $('#mas-config_pry_3').val('NO')
    }

    self.guardar_cambios_muestreo($('#mas-hidden_config_values input'), false)
  }
}

$(function() {
  let mas = new MuestreoMas()
  $('#table-muestreo-mas').on('change', '.col-numeric input, .col-numeric select', function() {
    let tamano_muestra = mas.calcular_tamano_muestra()
    mas.generar_tabla_muestra(tamano_muestra)
    mas.guardar_cambios_muestreo($(this))
  })

  if (_.has(app.vars.muestreo_config, 'muestras.mas')) {
    let muestras_actuales: base.MuestraItem[] = app.vars.muestreo_config.muestras.mas
    mas.calcular_tamano_muestra()
    if (_.has(app.vars.muestreo_config, 'muestras.mum')) {
      mas.completar_cache_muestras(app.vars.muestreo_config.muestras.mum)
    }
    mas.generar_tabla_muestra(muestras_actuales)
  } else {
    let tamano_muestra = mas.calcular_tamano_muestra()
    if (_.has(app.vars.muestreo_config, 'muestras.mum')) {
      mas.completar_cache_muestras(app.vars.muestreo_config.muestras.mum)
    }
    mas.generar_tabla_muestra(tamano_muestra)
  }

  $('#table-muestreo-mas-evaluacion').on('change', 'input', function() {
    mas.calcular_valor_error_en_evaluacion($(this).closest('tr'))
    mas.calcular_totales_en_evaluacion()
    mas.guardar_cambios_muestras()
  })

  $('#table-muestreo-mas').on('change', '#cf-e select', function() {
    mas.calcular_totales_en_evaluacion()
  })

  $('#mas-conclusion-custom').on('change', function() {
    mas.guardar_cambios_muestreo($(this), false)
  })

  $('#tab-mas-conclusion').on('click', function(ev) {
    var hasEmpty =
      $('#table-muestreo-mas-evaluacion .muestra-v-real input').filter(function() {
        return $(this).val() == ''
      }).length > 0
    if (hasEmpty) {
      ev.preventDefault()
      ev.stopPropagation()
      bootbox.alert(
        'Debe ingresar primero el Valor según Auditoría de <u>TODAS</u> las operaciones de la muestra para continuar.'
      )
      ;(<any>$('#tab-mas-evaluacion')).tab('show')
      return false
    }
  })
})
