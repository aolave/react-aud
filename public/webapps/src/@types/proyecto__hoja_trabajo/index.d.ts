declare module 'react-dual-listbox'
declare module 'react-tabtab'
declare module 'react-sortable-hoc'
declare module 'react-numeric'
declare module 'autonumeric'

interface JQuery {
  floatThead(options?: any): any
  tableDnD(options?: any): any
  tableDnDUpdate(): any
  modal(options?: any): any
}

interface JQueryStatic {
  pnotify(options?: any): any
}

interface BootboxStatic {
  [x: string]: any
  warningConfirm(
    text: string,
    cancelButtonText: string,
    okButtonText: string,
    callback: (answer: boolean) => void
  ): void

  alertError(text: string, title?: string): void
}

declare namespace _ {
  interface LoDashStatic {
    str: any
  }
}

declare type HojaTrabajoAppProps = {
  hoja_trabajo: HojaTrabajo
}

declare type HojaTrabajoAppState = {
  activeIndex: number
  assocModalOpen: boolean
  newVisitaOpen: boolean
  selectedVisitas: number[]
  hoja_trabajo: HojaTrabajo
}

declare type HojaTrabajoAppPane = {}
