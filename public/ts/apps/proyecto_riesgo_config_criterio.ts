declare var app: any;
declare interface JQuery {
  sortable(options? : any):JQuery
}

interface RiesgoControl {
  choices: object[],
  choices_style? : string
}

const $table = $('#table-riesgos-config-criterios')
const template = _.template($("#criterio_row_template").html())

const defaultChoiceSiNo = [{ 'label': 'SI', 'value' : '1' }, { 'label': 'NO', 'value' : '0' } ]

const drawTableRow = (control : RiesgoControl, k : string)=>{
  control.choices_style = getChoicesStyle(control)
  let tr = template({ 'control' : control, 'key' : k  })

  if($table.find(`#riesgocriteria_row_${k}`).length){
    $(`#riesgocriteria_row_${k}`).html(tr)
  }else{
    $table.children('tbody').append(`<tr id="riesgocriteria_row_${k}">${tr}</tr>`)
  }
  $(`#riesgocriteria_row_${k}`).find('.riesgocriterio-enabled').trigger('change')

}
const drawTable = ()=>{

  $table.find('tbody').html("")
  _.forEach(app.vars.widget_values, function(widget_value : RiesgoControl, k : string){
    drawTableRow(widget_value, k)
  })
}

const generateRandomId = () :string =>  (new Date().valueOf()) + Math.random().toString(16).substr(2, 9)

const getChoicesStyle = function(control : RiesgoControl) : string {
  let isSiNo = _.isEqual(control.choices, defaultChoiceSiNo)
  if(isSiNo){
    return 'SI/NO';
  }

  return 'Personalizado';
}

$table.on('change', '.riesgocriterio-enabled', function(ev){
  ev.preventDefault()
  if(this.checked){
    $(this).closest('tr').removeClass('disabled')
  }else{
    $(this).closest('tr').addClass('disabled')
  }
})

$table.on('change', 'input[data-model]', function(ev){
  const model = $(this).attr("data-model")
  const row_id = $(this).closest('tr').prop('id').substr(19)

  let value :any
  if($(this).is(':checkbox')){
    value = <boolean> this.checked
  }else{
    value = $(this).val()
  }

  app.vars.widget_values[row_id][model] = value
})

$table.on('click', '.btn-deletecriterio', function(ev){
  let self = this
  ev.preventDefault()
  bootbox.confirm("¿Desea eliminar este criterio ? <br>Tenga en cuenta que esta acción no puede ser revertida.", (r)=>{
    if(r){
      let criterio_id = self.hash.substr(1)
      delete app.vars.widget_values[criterio_id]
      $(self).closest("tr").remove()
    }
  })
})

$table.on('click', '.btn-addcriterio', function(ev){
  ev.preventDefault()
  const randomid = generateRandomId()

  app.vars.widget_values[randomid] = {
    'is_enabled': true,
    'choices' : _.clone(defaultChoiceSiNo, true)
  }

  drawTableRow(app.vars.widget_values[randomid], randomid)
})

$("body").on('click', '.btn-addchoice', function(ev){
  ev.preventDefault()
  const criterio_id = $(this).closest('table').attr('data-criterio-id')

  app.vars.widget_values[criterio_id]['choices'].push({ 'label' : '', 'value': '' })
  drawTableRow(app.vars.widget_values[criterio_id], criterio_id)
  $(`#riesgocriteria_row_${criterio_id}`).find(".choice_style").html(getChoicesStyle(app.vars.widget_values[criterio_id]))
  app.vars.widget_values[criterio_id]['choices_style'] = getChoicesStyle(app.vars.widget_values[criterio_id])
  $(this).closest('.modal-body').html($(`#riesgocriteria_row_${criterio_id} .modal-body`).html())
})

$("body").on('click', '.btn-deletechoice', function(ev){
  ev.preventDefault()
  const self = this
  const criterio_id = $(this).closest('table').attr('data-criterio-id')
  const choice_id = $(this).closest('tr').attr('data-choice-id')

  bootbox.confirm("¿Desea eliminar esta opción de respuesta?", function(r){
    if(r){
      delete app.vars.widget_values[criterio_id]['choices'][choice_id]
      app.vars.widget_values[criterio_id]['choices'] = _.filter(app.vars.widget_values[criterio_id]['choices'])

      $(self).closest("tr").remove()
      $(`#riesgocriteria_row_${criterio_id}`).find(".choice_style").html(getChoicesStyle(app.vars.widget_values[criterio_id]))
      app.vars.widget_values[criterio_id]['choices_style'] = getChoicesStyle(app.vars.widget_values[criterio_id])
    }
  })
})

$('body').on('change', '.riesgo-criterio-choices input', function(){
  const model = $(this).attr("data-choice-model")
  const criterio_id = $(this).closest('table').attr('data-criterio-id')
  const choice_id = $(this).closest('tr').attr('data-choice-id')

  app.vars.widget_values[criterio_id]['choices'][choice_id][model] = $(this).val()
  drawTableRow(app.vars.widget_values[criterio_id], criterio_id)
})


$(function(){
  drawTable()
  $table.children('tbody').sortable({
    'axis': 'y',
    'cursor': 'move',
    'handle': '.sorthandler',
    'items': '> tr'
  })
})
