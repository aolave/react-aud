const accentsTidy = function(s: string) {
  let r = s.toLowerCase()
  r = r.replace(new RegExp('\\s', 'g'), '')
  r = r.replace(new RegExp('[àáâãäå]', 'g'), 'a')
  r = r.replace(new RegExp('æ', 'g'), 'ae')
  r = r.replace(new RegExp('ç', 'g'), 'c')
  r = r.replace(new RegExp('[èéêë]', 'g'), 'e')
  r = r.replace(new RegExp('[ìíîï]', 'g'), 'i')
  r = r.replace(new RegExp('ñ', 'g'), 'n')
  r = r.replace(new RegExp('[òóôõö]', 'g'), 'o')
  r = r.replace(new RegExp('œ', 'g'), 'oe')
  r = r.replace(new RegExp('[ùúûü]', 'g'), 'u')
  r = r.replace(new RegExp('[ýÿ]', 'g'), 'y')
  r = r.replace(new RegExp('\\W', 'g'), '')

  return r
}

$('#biblioteca-searchinput').on('keyup', function() {
  let searchtext = accentsTidy($(this).val().trim())
  if (searchtext == '') {
    $('#table-bibliotecariesgos tbody tr').removeClass('hidden')
    $('#biblioteca_search_counter').html('')
  } else {
    let counter = 0
    $('#table-bibliotecariesgos tbody tr').each(function() {
      let riesgo = accentsTidy($(this).find('.riesgo_descr').text().trim())
      if (riesgo.indexOf(searchtext) != -1) {
        $(this).removeClass('hidden')
        counter++
      } else {
        $(this).addClass('hidden')
      }
    })
    $('#biblioteca_search_counter').html(
      "<span style='color: red'>" + counter + ' filtrado' + (counter > 1 ? 's' : '') + '</span> de '
    )
  }
})

$('#table-bibliotecariesgos')
  .on('change', 'input:checkbox', function() {
    if (this.checked) {
      $(this).closest('tr').addClass('selected')
    } else {
      $(this).closest('tr').removeClass('selected')
    }
  })
  .find('input:checked')
  .trigger('change')
