import { PureComponent } from 'react'

import Popup from 'semantic-ui-react/dist/commonjs/modules/Popup/Popup'
import Button from 'semantic-ui-react/dist/commonjs/elements/Button/Button'

import cx from 'classnames'

type ButtonActionProps = {
  onClick: () => void
  disableText?: string
  showAlert?: boolean
  record?: {
    fecha_completado?: string
    fecha_revision?: string
  }
}

export class CompletadoButtonAction extends PureComponent<ButtonActionProps> {
  render() {
    const completado_disabled_text = this.props.disableText

    return (
      <Popup
        trigger={
          <div className='button-wrapper'>
            <Button primary icon compact onClick={this.props.onClick} disabled={completado_disabled_text != null}>
              {' '}
              <i className='icon check' /> Completado
            </Button>
          </div>
        }
        content={completado_disabled_text}
        header='Marcar como Completado | Opción deshabilitada'
        disabled={completado_disabled_text == null}
        className='disable-text'
        on='hover'
      />
    )
  }
}

export class RevisadoButtonAction extends PureComponent<ButtonActionProps> {
  render() {
    let revisado_disabled_text = this.props.disableText
    if (
      (revisado_disabled_text === null || typeof revisado_disabled_text === 'undefined') &&
      this.props.record &&
      !this.props.record.fecha_completado
    ) {
      revisado_disabled_text = 'Debe estar primero en estado COMPLETADO, para poder marcarse como REVISADO.'
    }

    let showAlert: boolean
    if ((this.props.showAlert === null || typeof this.props.showAlert === 'undefined') && this.props.record) {
      const record = this.props.record
      showAlert =
        record.fecha_completado &&
        record.fecha_revision &&
        Date.create(record.fecha_completado) > Date.create(record.fecha_revision)
    } else {
      showAlert = this.props.showAlert
    }

    const icon_revisado_alert = showAlert ? (
      <Popup
        trigger={<i className='icon warning circle red' />}
        content={'Ha recibido modificaciones después de su última revisión.'}
      />
    ) : null

    return (
      <Popup
        trigger={
          <div className='button-wrapper'>
            <Button color='olive' icon compact onClick={this.props.onClick} disabled={revisado_disabled_text != null}>
              {' '}
              <i className='icon check fitted' />
              <i className='icon check' /> Revisado {icon_revisado_alert}
            </Button>
          </div>
        }
        content={revisado_disabled_text}
        header='Marcar como Revisado | Opción deshabilitada'
        disabled={revisado_disabled_text == null}
        className='disable-text'
        on='hover'
      />
    )
  }
}

type ButtonActionsProps = {
  prepend?: JSX.Element
  append?: JSX.Element
  completado: { permission: string } & ButtonActionProps
  revisado: { permission: string } & ButtonActionProps
}

export class StatusButtonGroupActions extends PureComponent<ButtonActionsProps> {
  render() {
    return (
      <div className='actions ab-status-actions'>
        {this.props.prepend}
        {user_has_role_permission(this.props.completado.permission) && (
          <CompletadoButtonAction {...this.props.completado} />
        )}
        {user_has_role_permission(this.props.revisado.permission) && <RevisadoButtonAction {...this.props.revisado} />}
        {this.props.append}
      </div>
    )
  }
}

type StatusDivBlockProps = {
  status: string
  className?: string
  wrapperClassName?: string
  hideLabel?: boolean
}

export const StatusDivBlock = (props: StatusDivBlockProps) => {
  return (
    <div className={cx('lb-status-wrapper', props.wrapperClassName)}>
      {!props.hideLabel && 'Estado:'}
      <div className={cx(props.className, 'lb-status', `lb-status-${_.str.dasherize(props.status.toLowerCase())}`)}>
        {props.status || ''}
      </div>
    </div>
  )
}
