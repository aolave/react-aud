declare module 'ckeditor4-react'

declare type EditorPreviewProps = {
  inline?: boolean
  data: string
  preview?: string
  prefixPreview?: string
  label?: string
  labelTitle?: string
  editable: boolean
  className?: string
  wrapperClassName?: string
  footer?: React.ReactNode | 'AttachmentList'
  open?: boolean
  autosave?: boolean
  onSave?: (ckeditor: CKEDITOR.editor, closeModal?: boolean, autosave?: boolean, cb?: () => void) => void
  onUpload?: () => void
  onClose?: () => void
  onClickPreview?: (ev?: React.SyntheticEvent) => void
  openOnClickPreview: boolean
  ckeditorOptions?: any
  ckeditorUploadOptions?: { model: string; modelId: string; url?: string }
  required?: boolean
  leftActions?: React.ReactNode
  previewStyle?: React.CSSProperties
}

declare type EditorPreviewState = {
  isModalEditOpen: boolean
  isAutosaving: boolean
  isLoading: boolean
  attachments: []
  isLoadingAttachments: boolean
}

declare type CKeditorComp = {
  editor: CKEDITOR.editor
}
