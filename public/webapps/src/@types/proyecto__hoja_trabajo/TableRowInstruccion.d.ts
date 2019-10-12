interface TableRowInstruccionProps {
  index: number
  instruccion: Instruccion
  iteration: number
  isEditable: boolean
  isSortable: boolean
  onUpdate: (instruccion: Instruccion, index: number) => void
  onUpdateVisita: (visitas: ProyectoPasoVisita[], instrucciones?: InstruccionDataModifiedSchema[]) => void
  onRemove: (index: number) => void
}

interface TableRowInstruccionState {
  instruccion: Instruccion
  isEditorOpen: boolean
  isLoadingAttachments: boolean
}

declare type TableRowInstruccionUpdatableField = 'description' | 'answer' | 'observations' | 'is_done' | 'Attachments'

declare type TableRowInstruccionServerDataParams = {
  id: { local_id: string } | { id: string }
  id_visita?: string
  id_paso?: string
  data: TableRowInstruccionServerDataParamData[]
}

declare type TableRowInstruccionServerDataParamData = {
  field: string
  value: any
}

declare type InstruccionDataModifiedSchema = {
  id_visita: string
  cmd: 'CREATE' | 'UPDATE'
  data: Instruccion
}
