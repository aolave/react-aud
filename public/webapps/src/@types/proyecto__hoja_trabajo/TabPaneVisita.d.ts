interface TabPaneVisitaProps {
  active: boolean
  visita: ProyectoPasoVisita
  idx: number
  type?: 'DEFAULT' | 'PERIODO'
  isEditable: boolean
  onChange: (visita: ProyectoPasoVisita) => void
  onChangeApp: (data: any) => void
}

interface TabPaneVisitaState {
  progress: number
  id_status: string
  openAsignarUsuarioModal: boolean
}
