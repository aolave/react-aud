declare var app :any;
declare interface JQuery { modal(options?:any):any, block(options?:any):JQuery, unblock(options?:any):JQuery, fastselect(options?:any):JQuery }

const $table = $('#table-riesgoslist')
const riesgo_item_template = _.template($('#riesgo-item-template').html())
const riesgo_modal_template = _.template($('#riesgo-modal-template').html())


const calcular_riesgo_inherente = function(item:any) : number{
    const pr = item.probabilidad
    const im = item.impacto

    var impr = parseInt(pr) + parseInt(im)
    if(pr == "" || im == ""){
      return 0
    }else if( impr == 10 || impr == 8){
      return 5
    }else if( impr == 6 ){
      return 3
    }else{
      return 1
    }
}

const label_from_choices = (value:any, choices:any) => choices[value]

const processRiesgoItem = (item : any) => {

  item.riesgo_inherente = calcular_riesgo_inherente(item)

  item.label_inherente = label_from_choices(item.riesgo_inherente, {1: 'Bajo', 3: 'Medio', 5: 'Alto'})
  item.label_control = label_from_choices(item.control_valoracion, {1: 'Debil', 3: 'Moderado', 5: 'Fuerte'} )
  item.label_efectividad = label_from_choices(item.control_efectividad, {1: 'Inefectivo', 3: 'Con deficiencias', 5: 'Efectivo'} )
  item.label_residual = label_from_choices(item.riesgo_residual, {1: 'Bajo', 3: 'Medio', 5: 'Alto'})

  return item
}

const showItemModal = (riesgo_id:string) :void => {
  $("#modal-riesgoitem").modal('show')
  $("#modal-riesgoitem .modal-body").html('')

  let riesgo :any = _.findWhere(app.vars.riesgoslist, {'id': riesgo_id })
  let template = riesgo_modal_template({riesgo})

  let $modalbody = $("#modal-riesgoitem .modal-body");
  $modalbody.block().html(template)
  $modalbody.find(':input').each(function(){
    const field = $(this).attr('data-model')
    if(field){
      $(this).val( riesgo[field] )
    }
  })
  $('#modal-riesgoitem').find('.calculated_model').each(function(){
    let model = $(this).attr('data-model')
    $(this).html(riesgo[model])
  })
  $modalbody.find('.fastselect').each(function(){
    let options :any = {}
    options.choiceItemClass = $(this).attr('data-fastselect-choiceItemClass')
    $(this).fastselect(options)
  })
  $modalbody.unblock()
}


$table.children('tbody').on('click', '.btn-editriesgo', function(ev){
  ev.preventDefault()
  showItemModal($(this).closest('tr').attr('data-riesgo-id'))
})

$table.children('tbody').on('dblclick', 'tr', function(ev){
  showItemModal($(this).attr('data-riesgo-id'))
})

$('#modal-riesgoitem').on('change', ':input[data-model]', function(){

  let riesgo_id = $('#modal-riesgoitem').find('.riesgo_id').val()
  let riesgo :any = _.findWhere(app.vars.riesgoslist, {'id': riesgo_id })
  let model = $(this).attr('data-model')
  riesgo[model] = $(this).val()

  riesgo = processRiesgoItem(riesgo)
  $('#modal-riesgoitem').find('.calculated_model').each(function(){
    let model = $(this).attr('data-model')
    $(this).html(riesgo[model])
  })

  let tr = riesgo_item_template({riesgo})
  $(`#riesgo-row-${ riesgo_id }`).html(tr)
})

const drawTable = ()=>{

  let $tbody = $table.children('tbody')
  $tbody.html('')
  _.forEach(app.vars.riesgoslist, function(item){

    item = processRiesgoItem(item)

    let $tr = riesgo_item_template({'riesgo' : item})
    $tbody.append(`<tr id="riesgo-row-${ item.id }" data-riesgo-id="${ item.id }">${$tr}</tr>`)
  })
}


$(function(){
  drawTable()
})
