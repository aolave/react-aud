CKEDITOR.plugins.add('pasolink', {
  init: function(editor) {
    var pluginName = 'pasolink'

    if (editor.config.link_to_muestreo_enabled) {
      editor.addCommand(pluginName, new CKEDITOR.dialogCommand('pasolinkDialog'))
      editor.addCommand('muestreolink', new CKEDITOR.dialogCommand('muestreolinkDialog'))

      editor.ui.addButton('pasolink', {
        label: 'Paso',
        command: pluginName,
        toolbar: 'links',
        icon: 'Link',
        className: 'cke_button_save cke_button_labelled'
      })

      editor.ui.addButton('muestreolink', {
        label: 'Muestreo',
        command: 'muestreolink',
        toolbar: 'links',
        icon: 'Link',
        className: 'cke_button_save cke_button_labelled'
      })
    } else {
      editor.addCommand(pluginName, new CKEDITOR.dialogCommand('pasolinkDialog'))
      editor.ui.addButton('pasolink', {
        label: 'Paso',
        command: pluginName,
        toolbar: 'links',
        icon: 'Link',
        className: 'cke_button_save cke_button_labelled'
      })
    }

    const renderTree = function() {
      var html = ''
      html += "<ul class='methodology checkbox-list methodology-all nav nav-stacked' style='margin-left: 0'>"
      _.forEach(app.vars.masterdatatree, function(fase) {
        html +=
          "<li class='methodology-item phase '><div class='methodology-item-head'><a href='#' style='cursor: pointer'>" +
          fase.descripcion +
          "</a></div><ul class='methodology collapse hide'  >"
        _.forEach(fase.Subfases, function(subfase) {
          html +=
            "<li class='methodology-item subphase '><div class='methodology-item-head'><a href='#' style='cursor: pointer'>" +
            subfase.descripcion +
            "</a></div><ul class='methodology collapse hide'  >"
          _.forEach(subfase.Pasos, function(paso) {
            html +=
              "<li class='methodology-item paso '><div class='methodology-item-head'> <label><input type='checkbox' class='chk-paso' name='linktopaso[]' value='" +
              paso.code +
              "' > <span class='paso-descripcion-text'>" +
              paso.descripcion +
              '</span></label> </div></li>'
          })
          html += '</ul></li>'
        })
        html += '</ul></li>'
      })
      html += '</ul>'

      return html
    }

    CKEDITOR.dialog.add('pasolinkDialog', function(editor) {
      var html = '<div class="pasolinkdialog" style="max-height:200px;overflow-y:auto"></div>'

      return {
        title: 'Link a Paso',
        width: 580,
        height: 230,
        resizable: CKEDITOR.DIALOG_RESIZE_NONE,
        contents: [
          {
            elements: [
              {
                label: 'Pasos',
                type: 'html',
                html: html,
                commit: function(a) {
                  a.selected = []
                  $('#' + this.domId).find(':checked').each(function() {
                    a.selected.push({ value: this.value, label: $(this).next().text() })
                  })
                }
              }
            ]
          }
        ],
        onOk: function() {
          var a = {}
          this.commitContent(a)
          var html = []
          _.forEach(a.selected, function(item) {
            html.push(
              "<a href='" + url_for('master_data/paso/' + item.value) + "' target='_blank'>" + item.label + '</a> '
            )
          })
          editor.insertHtml(html.join(', '))
        },
        onLoad: function() {
          if (app.vars.masterdatatree) {
            $(this.parts.contents.$).find('.pasolinkdialog').html(renderTree())
          } else {
            $(this.parts.contents.$)
              .find('.pasolinkdialog')
              .html(
                '<div class="ajax-loader-snake" style="width: 16px; height: 16px"></div> Cargando Plan de Auditoría... Por favor Espere'
              )
            $.getJSON(url_for('proyecto/' + app.vars.idproyecto + '/master_data_tree'), {
              export_options: { type: 'pasolink' }
            }).done((res) => {
              app.vars.masterdatatree = res.response
              $(this.parts.contents.$).find('.pasolinkdialog').html(renderTree())
            })
          }

          $(this.parts.contents.$).on('click', '.methodology-item-head>a', function(ev) {
            ev.preventDefault()
            var ul = $(this).parent().next('ul')
            ul.toggleClass('hide')
            ul.find('.methodology.collapse').addClass('hide')
          })
        },

        onShow: function() {
          $(this.parts.contents.$).find('.methodology-item.phase  .methodology.collapse').addClass('hide')
          $(this.parts.contents.$).find(':checked').removeAttr('checked')
        }
      }
    })

    CKEDITOR.dialog.add('muestreolinkDialog', function(editor) {
      var html = '<div class="muestreolinkdialog" >'
      html +=
        "<p>Seleccione el muestreo de auditoría cuyo enlace (hipervínculo) desea agregar.</p><table class='table table-bordered table-condensed table-striped'><thead><tr><th></th><th>Nombre</th><th>Valor contable de la población</th><th>Tamaño de la población (N)</th><th>Error esperado</th><th>Nivel de Confianza </th></tr></thead><tbody>"
      if (
        !app.vars.muestreostree[app.vars.current_idvisita] ||
        app.vars.muestreostree[app.vars.current_idvisita].length == 0
      ) {
        html +=
          "<tr><td colspan='6'><div style='padding: 20px; text-align: center'>0 Muestreos encontrados</div></td></tr>"
      } else {
        _.forEach(app.vars.muestreostree[app.vars.current_idvisita], function(muestreo) {
          var muestreo_config = JSON.parse(muestreo.config)
          html +=
            "<tr><td><input type='checkbox' class='chk-paso' name='linktomuestreo[]' data-paso_id='" +
            muestreo.MasterDataPasoHasProyectoVisita.id_master_data_paso +
            "' data-visita_id='" +
            (muestreo.MasterDataPasoHasProyectoVisita.id_proyecto_visita
              ? muestreo.MasterDataPasoHasProyectoVisita.id_proyecto_visita
              : muestreo.MasterDataPasoHasProyectoVisita.id_master_data_paso_has_proyecto_visita) +
            "' value='" +
            muestreo.id +
            "' ></td><td>" +
            muestreo.name +
            '</td>' +
            "<td class='col-numeric'>" +
            accounting.formatMoney(muestreo_config.M) +
            '</td>' +
            "<td class='col-numeric'>" +
            accounting.formatNumber(muestreo_config.N) +
            '</td>' +
            "<td class='col-numeric'>" +
            accounting.formatNumber(muestreo_config.E) +
            '%</td>' +
            "<td class='col-numeric'>" +
            accounting.formatNumber(muestreo_config.Z) +
            '%</td>' +
            '</tr>'
        })
      }

      html += '</tbody>'
      html += '</table>'

      return {
        title: 'Link a Muestreo de Auditoría',
        width: 620,
        height: 160,
        resizable: CKEDITOR.DIALOG_RESIZE_NONE,
        contents: [
          {
            elements: [
              {
                label: 'Muestreos de Auditoría',
                type: 'html',
                html: html,
                commit: function(a) {
                  a.selected = []
                  $('#' + this.domId).find(':checked').each(function() {
                    a.selected.push({
                      value: this.value,
                      label: $(this).parent().next().text(),
                      paso_id: $(this).attr('data-paso_id'),
                      visita_id: $(this).attr('data-visita_id')
                    })
                  })
                }
              }
            ]
          }
        ],
        onOk: function() {
          var a = {}
          this.commitContent(a)
          var html = []
          _.forEach(a.selected, function(item) {
            html.push(
              "<a href='" +
                url_for(
                  'proyecto/' +
                    app.vars.idproyecto +
                    '/paso/' +
                    item.paso_id +
                    '/visita/' +
                    item.visita_id +
                    '/muestreo/' +
                    item.value
                ) +
                "' target='_blank'>" +
                item.label +
                '</a> '
            )
          })
          editor.insertHtml(html.join(', '))
        },
        onLoad: function() {
          $(this.parts.contents.$).on('click', '.methodology-item-head>a', function(ev) {
            ev.preventDefault()
            var ul = $(this).parent().next('ul')
            ul.toggleClass('hide')
            ul.find('.methodology.collapse').addClass('hide')
          })
        },

        onShow: function() {
          $(this.parts.contents.$).find('.methodology-item.phase  .methodology.collapse').addClass('hide')
          $(this.parts.contents.$).find('.methodology-item.phase:first .methodology.collapse:first').removeClass('hide')
          $(this.parts.contents.$)
            .find(
              '.methodology-item.phase:first .methodology.collapse:first .methodology-item.subphase:first .methodology.collapse:first'
            )
            .removeClass('hide')
          $(this.parts.contents.$).find(':checked').removeAttr('checked')
        }
      }
    })
  }
})
