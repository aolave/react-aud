declare var app: any
declare var $3C: any

interface JQuery {
  floatThead(options?: any, callback?: Function): any
  modal(options?: any, callback?: Function): any
  showLoading(): any
}

$('.cifranivelselector').on('change', function() {
  let nivel: number = $(this).val()
  $('#cifraitem-table>tbody>tr').each(function() {
    let currentNivel: number = parseInt($(this).data('nivel'))
    if (currentNivel <= nivel) {
      $(this).removeClass('ui-helper-hidden')
    } else {
      $(this).addClass('ui-helper-hidden')
    }

    if (currentNivel < nivel) {
      $(this).removeClass('collapsed')
    } else {
      $(this).addClass('collapsed')
    }
  })
  localStorage.setItem('auditbrain_proysubsumarias_nivelselector', '' + nivel)
})

if (localStorage.getItem('auditbrain_proysubsumarias_nivelselector')) {
  $('.cifranivelselector').val(localStorage.getItem('auditbrain_proysubsumarias_nivelselector'))
}

$('.cifranivelselector').trigger('change')

$('#cifrastoolbar').appendTo('#cifrastoolbar_container')

$('body').on('click', '.methodology-item-head>a', function(ev) {
  ev.preventDefault()
  let ul: JQuery = $(this).parent().next('ul')
  ul.toggleClass('hide')
  ul.find('.methodology.collapse').addClass('hide')
})

$('#cifraitem-table>tbody>tr').each(function() {
  let v: number = parseFloat($(this).find('.sf_admin_list_td_saldo_nuevo').text().replace(/\./g, ''))
  if (
    !isNaN(app.vars.materialidad_tope) &&
    app.vars.materialidad_tope > 0 &&
    !isNaN(v) &&
    Math.abs(v) >= app.vars.materialidad_tope
  ) {
    $(this).addClass('saldo_material')
    let h: string = $(this).find('td.sf_admin_list_td_saldo_nuevo').html()
    $(this).find('td.sf_admin_list_td_saldo_nuevo').html(
      `<table style="width: 100%; background-color: transparent;">
					<tr style="border: none; padding: 0;">
						<td style="border: none; padding: 0;"><div class="icon-warning-sign" title="Saldo Material"></div></td>
						<td style="border: none; padding: 0;"><div class="saldo_nuevo" style="text-align: right;" >${h}</div></td>
					</tr>
				</table>`
    )
  }
})

$('body').on('click', '.link-cifraajuste', function(ev) {
  ev.preventDefault()
  var cuenta: string = $(this).attr('data-cuenta')

  var $modal = $('#modal-cifraajuste')
  $modal.modal('show')
  $modal.find('.modal-header h4 .ajustes-title-cuenta').html(cuenta)
  $modal.find('.modal-body').html('').showLoading()

  $3C.ajaxGet(
    `proyecto/${app.vars.id_proyecto}/cifras/ajustes`,
    { id_visita: app.vars.id_visita, cuenta: cuenta },
    function(r: string) {
      $modal.find('.modal-body').html(r)
    }
  )
})

$(function() {
  $('#cifraitem-table').floatThead()
})
