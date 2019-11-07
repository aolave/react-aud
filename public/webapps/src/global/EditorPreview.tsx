import { PureComponent, Fragment, createRef, SyntheticEvent } from 'react'

import Modal from 'semantic-ui-react/dist/commonjs/modules/Modal/Modal'

import { instance as eventStack } from '@semantic-ui-react/event-stack'
import keyboardKey from 'keyboard-key'
import CKeditor from 'ckeditor4-react'
import cx from 'classnames'

import ButtonEdit from './ButtonEdit'
import { AttachmentListPanel, cleanAttachmentFrom } from '../proyecto__hoja_trabajo/Attachments'

declare var app: any

const CKEDITOR_OPTIONS: any = {
  basic: {
    height: 150,
    toolbar: [
      { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic' ] },
      {
        name: 'paragraph',
        groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ],
        items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'TextColor' ]
      }
    ],
    autoParagraph: false,
    removePlugins: 'elementspath, uploadfile, uploadfileab, resize',
    extraPlugins: 'openlink'
  }
}

export default class EditorPreview extends PureComponent<EditorPreviewProps, EditorPreviewState> {
  private ckeditorComp: React.RefObject<CKeditorComp>
  private _cachedEditor: CKEDITOR.editor

  private previewRef = createRef<HTMLDivElement>()

  private autosaveId: NodeJS.Timeout

  static AUTOSAVE_DELAY: number = 60

  static defaultProps = {
    open: false,
    autosave: false,
    required: false,
    editable: true,
    openOnClickPreview: true,
    ckeditorOptions: {}
  }

  constructor(props: EditorPreviewProps) {
    super(props)

    this.state = {
      isModalEditOpen: this.props.open,
      isAutosaving: false,
      isLoading: true,
      attachments: null,
      isLoadingAttachments: false
    }
  }

  handleEscape = (e: Event) => {
    if (keyboardKey.getCode(e) !== keyboardKey.Escape) return

    if (typeof CKEDITOR !== 'undefined' && CKEDITOR.dialog.getCurrent() != null) {
      // si existe un CKEditor dialog abierto, no cerrar el modal.
      return
    }

    this.onClose()
  }

  getEditor(): CKEDITOR.editor {
    if (this.ckeditorComp != null) {
      return (this.ckeditorComp as any).editor
    }

    if (this._cachedEditor) {
      return this._cachedEditor
    }

    return null
  }

  onChange = (evt: any) => {
    if (this.props.inline) {
      this.props.onSave(evt.editor, false, false)
    }

    if (!this._cachedEditor) {
      this._cachedEditor = evt.editor
    }

    if (!this.props.autosave) {
      return
    }

    if (!this.autosaveId) {
      this.autosaveId = setTimeout(this.autosave, EditorPreview.AUTOSAVE_DELAY * 1000)
    }
  }

  onClickEdit = (ev: SyntheticEvent) => {
    ev.preventDefault()
    this.setState({ isModalEditOpen: true, isLoading: true })
  }

  onSave = () => {
    if (this.autosaveId) {
      clearTimeout(this.autosaveId)
      this.autosaveId = null
    }

    if ($.isFunction(this.props.onSave)) {
      this.props.onSave(this.getEditor(), true, false, () => {
        this.setState({ isAutosaving: false })
        this.fetchAttachments()
      })

      this.setState({ isModalEditOpen: false })
    } else {
      this.setState({ isModalEditOpen: false, isAutosaving: false })
      this.fetchAttachments()
    }
  }

  onCancel = () => {
    this.setState({ isModalEditOpen: false })
    if ($.isFunction(this.props.onClose)) {
      this.props.onClose()
    }
  }

  onClose = () => {
    if (this.autosaveId) {
      clearInterval(this.autosaveId)
      this.autosaveId = null
    }

    this.setState({ isModalEditOpen: false })
    if ($.isFunction(this.props.onClose)) {
      this.props.onClose()
    }
  }

  onModalMount = () => {
    eventStack.sub('keydown', this.handleEscape, { pool: 'default' })

    if (this.state.attachments == null) {
      this.fetchAttachments()
    }
  }

  autosave = () => {
    this.setState({ isAutosaving: true })
    let ckeditor = this.getEditor()
    if (ckeditor != null) {
      this.props.onSave(ckeditor, false, true, () => this.setState({ isAutosaving: false }))
      this.fetchAttachments()
    }

    if (this.autosaveId) {
      clearInterval(this.autosaveId)
      this.autosaveId = null
    }
  }

  assertRequired() {
    if (!this.props.editable) {
      return false
    }
    if (!this.props.required) {
      return false
    }

    const ckeditor = this.getEditor()

    if (_.trim(ckeditor.getData()) != '') {
      return false
    }

    bootbox.alert('Esta campo es requerido, por lo tanto no puede quedar vacío.')

    return true
  }

  componentWillReceiveProps(nextProps: EditorPreviewProps) {
    if (nextProps.open && !this.state.isModalEditOpen) {
      this.setState({ isModalEditOpen: true })
    }
  }

  componentDidMount() {
    $(this.previewRef.current).find('a[href]').each(function() {
      $(this).attr('target', '_blank')
    })
  }

  onClickPreview = (ev: SyntheticEvent) => {
    if (this.props.onClickPreview) {
      this.props.onClickPreview(ev)
    }

    if (this.props.openOnClickPreview && this.props.editable) {
      this.setState({ isModalEditOpen: true })
    }
  }

  parseCkeditorOptions() {
    let { ckeditorOptions } = this.props

    if (typeof ckeditorOptions == 'string') {
      ckeditorOptions = CKEDITOR_OPTIONS[ckeditorOptions]
    }

    if (typeof this.props.ckeditorUploadOptions !== 'undefined') {
      const defaultUrl = 'proyecto/' + app.vars.idproyecto + '/adjunto/upload'
      const { url = defaultUrl, model, modelId } = this.props.ckeditorUploadOptions

      if (modelId === null || modelId === undefined) {
        ckeditorOptions.removePlugins = 'elementspath,uploadimage,uploadfile,uploadfileab'
      } else {
        ckeditorOptions.uploadUrl = url_for(`${url}?model=${model}&model_id=${modelId}`)
        ckeditorOptions.imageUploadUrl = url_for(`${url}?model=${model}&model_id=${modelId}`)
        ckeditorOptions.filebrowserUploadUrl = url_for(`${url}?model=${model}&model_id=${modelId}&n=attachment`)
      }
    }

    return ckeditorOptions
  }

  fetchAttachments() {
    if (typeof this.props.ckeditorUploadOptions === 'undefined') {
      return
    }

    const { model, modelId } = this.props.ckeditorUploadOptions

    this.setState({ isLoadingAttachments: true })
    $.getJSON(url_for(`proyecto/${app.vars.idproyecto}/adjunto/json`), {
      model: model,
      model_id: modelId
    }).done((res) => {
      this.setState({ attachments: res.response, isLoadingAttachments: false })
    })
  }

  onUpdateAttachment = () => {
    this.fetchAttachments()
  }

  onDeleteAttachment = (adjunto: ProyectoAttachment, cb: () => void) => {
    this.setState({ isLoadingAttachments: true })

    const data = cleanAttachmentFrom(this.props.data, adjunto)

    if ($.isFunction(cb)) {
      cb()
    }

    let ckeditor = this.getEditor()
    if (ckeditor) {
      ckeditor.setData(data)
      this.autosave()
    }
  }

  getCkeditorOptions() {
    const self = this

    let ckeditorOptions = Object.assign(
      {
        height: 200,
        toolbar: [
          { name: 'clipboard', items: [ 'Cut', 'Copy', 'Paste', '-', 'Undo', 'Redo' ] },
          { name: 'links', items: [ 'Link', 'pasolink', 'muestreolink', 'Attachments' ] },
          { name: 'insert', items: [ 'Table', 'SpecialChar' ] },
          { name: 'tools', items: [ 'Maximize' ] },
          { name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline' ] },
          {
            name: 'paragraph',
            items: [
              'NumberedList',
              'BulletedList',
              '-',
              'Outdent',
              'Indent',
              '-',
              'JustifyLeft',
              'JustifyCenter',
              'JustifyRight',
              'JustifyBlock',
              '-',
              'TextColor'
            ]
          },
          { name: 'styles', items: [ 'Styles', 'Format' ] }
        ],
        autoParagraph: false,
        enterMode: CKEDITOR.ENTER_BR,
        removePlugins: 'elementspath',
        extraPlugins:
          'uploadimage,pastebase64,uploadfileab,openlink,attach,justify,colorbutton,pastefromexcel,colordialog,pasolink',
        openlink_modifier: 0,
        onAttachmentUpload: function(response: string, editor: CKEDITOR.editor) {
          response = response
            .replace('<pre>', '')
            .replace('<pre style="word-wrap: break-word; white-space: pre-wrap;">', '')
            .replace('</pre>', '')
          var rs = JSON.parse(response)
          console.log(rs)
          _.forEach(rs, function(r) {
            if (r.uploaded) {
              editor.insertHtml(
                "<a href='" + r.url + "' target='_blank' class='proyecto-attachment' >" + r.fileName + '</a><br> '
              )
            } else {
              alert(r.error)
            }
          })
          CKEDITOR.dialog.getCurrent().hide()
          if (self.props.onUpload) {
            self.props.onUpload()
          }
          self.fetchAttachments()
          const ckeditor_comp = self.getEditor()
          if (ckeditor_comp) {
            self.props.onSave(ckeditor_comp, false, false)
          }
        }
      },
      this.parseCkeditorOptions()
    )

    ckeditorOptions.on = Object.assign(
      {
        fileUploadRequest: function(ev: any) {
          const loader = ev.data.fileLoader
          loader.on('abort', function() {
            $.unblockUI()
          })
          loader.on('error', function() {
            console.log(loader)
            $.unblockUI()
          })
          $.blockUI({
            message:
              '<div class="ajax-loader-snake-32  _a-center"></div><h3 class="loading-block-text">Cargando archivo al servidor.<br> Por favor Espere ...</h3>'
          })
        },
        fileUploadResponse: function() {
          $.unblockUI()
          this.fire('change')
        },
        paste: (evt: any) => {
          evt.data.dataValue = evt.data.dataValue.replace(/(min-)?width:.+?;/g, '') // remove width
        }
      },
      ckeditorOptions.on || {}
    )

    return ckeditorOptions
  }

  renderFooter() {
    const { footer } = this.props

    if (footer === 'AttachmentList') {
      return (
        <AttachmentListPanel
          isLoading={this.state.isLoadingAttachments}
          attachments={this.state.attachments}
          onUpdateItem={this.onUpdateAttachment}
          onDeleteItem={this.onDeleteAttachment}
        />
      )
    }

    return footer
  }

  renderModal() {
    if (!this.state.isModalEditOpen) {
      return
    }

    let classNames = cx([ 'editor-preview-modal', this.props.className ? this.props.className + '-modal' : false ])

    return (
      <Modal
        className={classNames}
        open
        closeIcon
        closeOnDimmerClick={false}
        dimmer='inverted'
        onClose={this.onClose}
        closeOnEscape={false}
        onMount={this.onModalMount}
        size='large'
      >
        <Modal.Content>{this.renderEditor()}</Modal.Content>
        {this.props.editable ? (
          <Modal.Actions>
            {this.props.leftActions}
            <button className='ui button negative' onClick={this.onCancel}>
              Cancelar
            </button>
            <button className='ui button primary' onClick={this.onSave}>
              Guardar
            </button>
          </Modal.Actions>
        ) : (
          <Modal.Actions>
            {this.props.leftActions}
            <button className='ui button negative' onClick={this.onCancel}>
              Cerrar
            </button>
          </Modal.Actions>
        )}
      </Modal>
    )
  }

  renderEditor() {
    let label
    if (this.props.label || this.props.labelTitle) {
      label =
        '<div class="editor-label"> <strong class="editor-label-title">' +
        (this.props.labelTitle || '') +
        '</strong> ' +
        (this.props.label || '') +
        ' </div>'
    }

    return (
      <Fragment>
        {label && <div dangerouslySetInnerHTML={{ __html: label }} />}
        <div style={{ minHeight: '200px' }}>
          <div className='loading'>
            <div className={this.state.isAutosaving ? '' : 'ui-helper-hidden'}>
              <span className='ajax-loader-snake' /> Guardando...
            </div>
          </div>
          <div className={cx('ui dimmer inverted', { active: this.state.isLoading })}>
            <div className='ui loader'>Cargando...</div>
          </div>
          <CKeditor
            ref={(c: React.RefObject<CKeditorComp>) => (this.ckeditorComp = c)}
            data={this.props.data}
            config={this.getCkeditorOptions()}
            onChange={this.onChange}
            onInstanceReady={() => this.setState({ isLoading: false })}
            readOnly={!this.props.editable}
          />
        </div>
        {this.renderFooter()}
      </Fragment>
    )
  }

  render() {
    if (this.props.inline) {
      return <div className='editor-inline'> {this.renderEditor()}</div>
    }

    let preview = this.props.preview == null ? this.props.data || '' : this.props.preview

    let classNames = cx([ 'editor-preview', this.props.className, preview ? 'text-non-empty' : 'text-empty' ])

    if (this.props.prefixPreview) {
      preview = '<strong class="editor-preview-title" >' + this.props.prefixPreview + '</strong> ' + preview
    }

    preview = preview.replace(/(min-)?width:.+?;/g, '')

    return (
      <Fragment>
        <div className={cx('editor-preview-wrapper', this.props.wrapperClassName)} onClick={this.onClickPreview}>
          <div
            ref={this.previewRef}
            className={classNames}
            dangerouslySetInnerHTML={{ __html: preview }}
            style={this.props.previewStyle}
          />
          {this.props.editable && (
            <div className='action-list'>
              <ButtonEdit onClick={this.onClickEdit} />
            </div>
          )}
        </div>
        {this.renderModal()}
      </Fragment>
    )
  }
}
