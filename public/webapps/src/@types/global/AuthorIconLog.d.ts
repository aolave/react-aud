declare type AuthorIconLogProps = {
  log: any[]
  name: string
  label: string
  className?: string
  inline?: boolean
  size?: 'huge' | 'large' | 'small' | 'mini' | 'tiny'
  iconColor: 'green' | 'blue' | 'olive'
  alertText?: string | boolean
}

declare type AuthorIconLogEditableProps = {
  log: any[]
  name: string
  label: string
  className?: string
  inline?: boolean
  size?: 'huge' | 'large' | 'small' | 'mini' | 'tiny'
  iconColor: 'green' | 'blue' | 'olive'
  editText: string | React.ReactNode
  onClickEdit: () => void
  disableEdit?: boolean
}

declare type AuthorIconLogEditableState = {
  isLoading: boolean
}

declare type IAuthorLog = {
  fecha_completado?: string
  fecha_revision?: string
  UpdateLog?: AuthorLogItemType[]
  RevisionLog?: AuthorLogItemType[]
}
