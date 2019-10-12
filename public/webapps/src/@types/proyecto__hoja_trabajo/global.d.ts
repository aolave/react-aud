declare type ProyectoStatusEnum = 'ABIERTO' | 'CERRADO' | 'ANULADO'

declare type ProyectoModuleStatusEnum = 'NUEVO' | 'EN PROCESO' | 'COMPLETADO' | 'REVISADO'

declare type HojaTrabajo = {
  proyecto: Proyecto
  paso: ProyectoPaso
  equipo: ProyectoEquipo[]
  visitas: ProyectoPasoVisita[]
}

declare type Proyecto = {
  id: string
  name: string
  isOpen: boolean
  status: ProyectoStatusEnum
  id_parent: number
}

declare type MasterDataSubfase = {
  id: string
  descripcion: string
  position: number
}

declare type ProyectoPaso = {
  id: string
  name: string
  code: string
  objetivo: string
  tipo: 'PERIODO' | null
  rubro: {
    id: string
    name: string
  }
  objetivos: { id: string; name: string; code: string }[]
  riesgos: { id: string; description: string; code: string }[]
}

declare type ProyectoPasoTipo = 'DEFAULT' | 'PERIODO'

declare type ProyectoObjetivo = {
  id: string
  code: string
  name: string
  description: string
}

declare type ProyectoPasoEstado = {
  id: string
  id_proyecto_paso_estado: string
  code: string
  name: string
  color: string
}

declare type ProyectoVisita = {
  id: string
  name: string
  position: number
}

declare type ProyectoPasoVisita = {
  HojaTrabajo: HojaTrabajo
  id: string
  id_status: string
  id_visita: string
  index: number
  instructions: Instruccion[]
  is_current: boolean
  label: string
  position: number
  progress: number
  status: string
  status_color: string
  id_usuario_asignado: string

  additionals: { ajustes: number; revisiones: number; hallazgos: number; muestreos: number }

  materialidad?: ProyectoMaterialidad

  fecha_completado: string
  fecha_revision: string
  updated_at: string
  RevisionLog: any
  UpdateLog: any
}

declare type Instruccion = {
  id?: number
  local_id: string
  index?: number
  description: string
  answer?: string
  observations?: string
  category?: string
  is_done?: boolean
  updated_at: string | null
  Attachments: ProyectoAttachment[]
  Visita: ProyectoPasoVisita
}

declare type ProyectoEquipo = {
  id: string
  name: string
  sigla: string
  user_id: string
  rol: {
    name: string
    tipo: 'JR' | 'SR' | 'PM' | 'GUEST'
    is_assignable: boolean
  }
}

declare type ProyectoAttachment = {
  id: string
  filename: string
  filepath: string
  filesize: number
  filesize_human: string
  nb_notes: number
  created_at: Date
  fecha_completado: string
  fecha_revisado: string
  id_proyecto: number
  UpdateLog: AuthorLogItemType[]
  RevisionLog: AuthorLogItemType[]
}

declare type ProyectoHallazgo = {
  id: string
  name?: string
  hallazgo: string
  status: ProyectoModuleStatusEnum
  responsable?: string
  fecha_implementado?: string
  implementado?: '0' | '1'
  plan_accion?: string
  fecha_completado?: string
  fecha_revision?: string
  UpdateLog?: AuthorLogItemType[]
  RevisionLog?: AuthorLogItemType[]
}

declare type ProyectoAjusteGroup = {
  idx: string
  id_visita: string
  status: ProyectoModuleStatusEnum
  items: ProyectoAjuste[]
  descripcion: string
  aplicado?: number
  fecha_completado?: string
  fecha_revision?: string
  UpdateLog?: AuthorLogItemType[]
  RevisionLog?: AuthorLogItemType[]
}

declare type ProyectoAjuste = {
  id?: string
  cuenta: string
  debe: number
  haber: number
  nombre_cuenta: string
}

declare type ProyectoAjusteCuenta = {
  cuenta: string
  cuenta_real: string
  nombre_cuenta: string
}

declare type ProyectoRevisionTree = {
  id: string
  name: string
  description: string
  status: ProyectoModuleStatusEnum
  fecha_completado?: string
  fecha_revisado?: string
  UpdateLog?: AuthorLogItemType[]
  RevisionLog?: AuthorLogItemType[]
  Creator?: AuthorLogItemType
  Comments?: ModeloComentario[]
}

declare type ProyectoMuestreo = {
  id: string
  name: string
  configValues: any
}

declare type ProyectoMaterialidadFactor = 1 | 2 | 3 | 4 | 5 | 6
declare type ProyectoMaterialidadMonto = { [k: number]: { valor: number; min?: number; med?: number; max?: number } }

declare type ProyectoMaterialidad = {
  fase: string
  factor: ProyectoMaterialidadFactor
  nivel: 1 | 2 | 3
  montos: ProyectoMaterialidadMonto
  porc: number
  porc_error: number
  total: number
  total_planeacion: number
  total_error: number
  factor_justificacion: string
  Visita?: ProyectoPasoVisita
  Attachments: ProyectoAttachment[]
}

declare type AuthorLogItemType = {
  User: {
    name: string
    sigla: string
  }
  ts: string
}

declare type ModeloComentario = {
  id?: string
  comentario: string
  status?: 'COMPLETADO' | 'REVISADO'
  Creator?: AuthorLogItemType
}

declare type HojaTrabajoContextType = {
  hoja_trabajo: HojaTrabajo
  update: (data: any) => void
}
