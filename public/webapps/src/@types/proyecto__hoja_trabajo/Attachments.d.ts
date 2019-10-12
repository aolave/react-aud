declare type AttachmentListPanelProps = {
  attachments: ProyectoAttachment[]
  isLoading?: boolean
  onUpdateItem: (data: any) => void
  onDeleteItem: (adjunto: ProyectoAttachment, cb?: () => void) => void
}

declare type AttachmentListItemProps = {
  attachment: ProyectoAttachment
  onUpdate: (data: any) => void
  onDelete: (adjunto: ProyectoAttachment, cb?: () => void) => void
}
