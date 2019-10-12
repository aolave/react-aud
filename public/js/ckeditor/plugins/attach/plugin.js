/*
  Author - Sahil Batla
  Contact - sahilbathla1@gmail.com
  Description - This plugins provides a basic iframe to upload attachments
  Configs while using in editor -
  1) AutoClose -  To auto close dialog on upload (autoClose: true)
  2) Callback on attachment upload - onAttachmentUpload: function() {}
  3) validateSize - Validate size of file before upload (validateSize: 30) i.e 30mb limit
*/
attachmentUploader = {
  uploadButton: null,
  editor: null,
  uploadingContainer: null,
  statusMessageContainer: null,
  uploadingSource: CKEDITOR.plugins.getPath('attach') + 'uploading.gif',
  autoClose: false,
  validateSize: 20,
  setStatusMessageContainer: function(_this) {
    this.statusMessageContainer = _this.getElement()
  },
  setUploadingContainer: function(_this) {
    this.uploadingContainer = _this.getElement()
  },
  setuploadButton: function(_this) {
    this.uploadButton = $(_this.getInputElement().$.children[0])
  },
  getFileField: function() {
    var field = $('body').find('iframe.cke_dialog_ui_input_file:visible').contents().find('input[type="file"]')
    return $(field)
  },
  getResultantHTML: function() {
    var body = $('body').find('iframe.cke_dialog_ui_input_file:visible').contents().find('body')
    return $(body).html()
  },
  bindUploadEvent: function() {
    //Handle iframe redirect
    var uploadHandler = function() {
      if (attachmentUploader.uploadButton.text() == 'Subiendo..') {
        attachmentUploader.uploadButton.text('Subido')
        attachmentUploader.statusMessageContainer.setText('Archivo subido exitosamente!!')
        attachmentUploader.statusMessageContainer.show()
        attachmentUploader.uploadingContainer.hide()
        if (attachmentUploader.autoClose) {
          CKEDITOR.dialog.getCurrent().hide()
        }

        //Provide onAttachmentUpload Callback after upload
        //Define this function in CKEDITOR config
        if (attachmentUploader.editor.config.onAttachmentUpload) {
          attachmentUploader.editor.config.onAttachmentUpload(
            attachmentUploader.getResultantHTML(),
            attachmentUploader.editor
          )
        }
      } else {
        console.log(attachmentUploader)
      }
    }
    $('body').find('iframe.cke_dialog_ui_input_file').off('load')
    $('body').find('iframe.cke_dialog_ui_input_file').on('load', uploadHandler)
  }
}

CKEDITOR.dialog.add('abbrDialog', function(editor) {
  return {
    title: 'Adjuntar archivo',
    minWidth: 400,
    minHeight: 70,

    buttons: [],

    contents: [
      {
        id: 'Upload',
        filebrowser: 'uploadButton',
        hidden: true,
        elements: [
          {
            type: 'html',
            html: 'Seleccione el archivo a adjuntar'
          },
          {
            type: 'file',
            id: 'attachment',
            name: 'upload',
            inputStyle: 'outline: 0',
            style: 'height:40px',
            multiple: 'multiple',
            size: 38
          },
          {
            type: 'fileButton',
            id: 'uploadButton',
            filebrowser: 'info:txtUrl',
            className: 'cke_dialog_ui_button_ok',
            label: 'Aceptar',
            style: 'float: right',
            for: [ 'Upload', 'attachment' ],
            onClick: function() {
              var attachment = attachmentUploader.getFileField()
              if (attachment.val()) {
                if (
                  attachmentUploader.validateSize > 0 &&
                  attachment[0].files[0].size > attachmentUploader.validateSize * 1000000
                ) {
                  alert(
                    'El tamaño maximo permitido de un archivo a cargar es ' + attachmentUploader.validateSize + 'MB.'
                  )
                  attachment.val('')
                } else {
                  attachmentUploader.uploadButton.text('Subiendo..').parent('a').hide()
                  attachmentUploader.uploadingContainer.show()
                }
              } else {
                alert('Seleccione el archivo primero')
                event.preventDefault()
              }
            },
            onLoad: function() {
              attachmentUploader.setuploadButton(this)
            }
          },
          {
            type: 'html',
            html: '<img class="uploading-img" src="' + attachmentUploader.uploadingSource + '" />',
            style: 'margin-left:35%',
            hidden: true,
            onLoad: function() {
              attachmentUploader.setUploadingContainer(this)
            }
          },
          {
            type: 'html',
            html: '<div class="status-message"></div>',
            style: 'margin-left:32%;  color: green',
            hidden: true,
            onLoad: function() {
              attachmentUploader.setStatusMessageContainer(this)
            }
          }
        ]
      }
    ],
    onShow: function() {
      $.blockUI()
      //Remove Focus & fix height
      setTimeout(function() {
        var fileField = $('body').find('iframe.cke_dialog_ui_input_file:visible').contents().find('input[type="file"]')
        fileField.css('outline', 0)
        $('body').find('iframe.cke_dialog_ui_input_file').css('height', '36px')

        fileField.attr('multiple', 'multiple')
        fileField.attr('name', 'attachment[]')

        if (attachmentUploader.uploadButton) {
          attachmentUploader.uploadButton.text('Subir archivo').parent('a').show()
        }
        attachmentUploader.bindUploadEvent()

        attachmentUploader.statusMessageContainer.setText('')
        attachmentUploader.statusMessageContainer.hide()

        //setCustomConfiguration
        attachmentUploader.autoClose = attachmentUploader.editor.config.autoCloseUpload || false
        attachmentUploader.validateSize = attachmentUploader.editor.config.validateSize || 20
        $.unblockUI()
      }, 500)
    }
  }
})

CKEDITOR.plugins.add('attach', {
  init: function(editor) {
    attachmentUploader.editor = editor
    editor.ui.addButton('Attachments', {
      label: 'Adjuntar archivo',
      command: 'OpenWindow',
      icon: CKEDITOR.plugins.getPath('attach') + 'attach.png',
      className: !editor.config.uploadUrl ? 'ui-state-disabled' : ''
    })

    if (!editor.config.uploadUrl) {
      var cmd = editor.addCommand('OpenWindow', {
        exec: function(editor) {
          alert(
            'Opción deshabilitada' + (editor.config.attach_disableText ? ': ' + editor.config.attach_disableText : '')
          )
        }
      })
    } else {
      var cmd = editor.addCommand('OpenWindow', new CKEDITOR.dialogCommand('abbrDialog'))
      cmd.enable()
    }
  }
})
