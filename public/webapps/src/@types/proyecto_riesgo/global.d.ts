declare type ProyectoRiesgoProceso = {
  id: string
  name: string
  position: number
  image_path: string
  image_data: string
  descripcion1: string
  descripcion2: string
  Attachments: {
    descripcion1: ProyectoAttachment[]
    descripcion2: ProyectoAttachment[]
  }
}
