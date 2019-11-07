/// <reference path="../@types/global/AuthorIconLog.d.ts" />

import { Component } from 'react'
import classnames from 'classnames'

import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon/Icon'
import Button from 'semantic-ui-react/dist/commonjs/elements/Button/Button'
import Loader from 'semantic-ui-react/dist/commonjs/elements/Loader/Loader'
import Popup from 'semantic-ui-react/dist/commonjs/modules/Popup/Popup'
import Dimmer from 'semantic-ui-react/dist/commonjs/modules/Dimmer/Dimmer'

export class AuthorIconLog extends Component<AuthorIconLogProps, {}> {
  render() {
    let classes: string | string[] = [ 'author-icon-log' ]

    if (this.props.className) {
      classes.push(this.props.className)
    }
    if (this.props.inline) {
      classes.push('inline')
    }

    classes = classnames(classes, this.props.size)

    let icon = (
      <Icon
        name='user circle'
        size={this.props.size}
        color={_.size(this.props.log) == 0 ? null : this.props.iconColor}
        disabled={_.size(this.props.log) == 0}
      />
    )
    if (this.props.alertText) {
      icon = (
        <Icon.Group>
          {icon}
          <Icon corner='top right' color='red' name='warning circle' />
        </Icon.Group>
      )
    }

    let iconComp
    if (!this.props.inline) {
      iconComp = (
        <div>
          {this.props.label && <span className='lb'>{this.props.label}</span>}
          {icon}
        </div>
      )
    } else {
      const item = this.props.log == null ? null : this.props.log[0]
      iconComp = (
        <div>
          {this.props.label && <span className='lb'>{this.props.label}</span>}
          {icon}
          {this.props.alertText && (
            <span className='alert-text'>
              <Icon color='red' name='warning circle' /> {this.props.alertText}
            </span>
          )}
          {item && (
            <div className='content user-info'>
              <div className='user-sigla'>{item.User.sigla}</div>
              <time dateTime={Date.create(item.ts).format('{year}-{MM}-{dd}')}>
                {Date.create(item.ts).format('{year}-{MM}-{dd}')}
              </time>
            </div>
          )}
        </div>
      )
    }

    return (
      <div className={classes}>
        <Popup
          trigger={iconComp}
          position='bottom center'
          className='author-icon-log-popup'
          pinned
          size={this.props.size}
        >
          <Popup.Header>
            {this.props.name}
            {this.props.alertText && (
              <div className='alert-text'>
                <Icon color='red' name='warning circle' /> {this.props.alertText}
              </div>
            )}
          </Popup.Header>
          <Popup.Content>
            {this.props.log == null ? (
              <div className='label'>Sin Especificar</div>
            ) : (
              <table className='table nowrap'>
                <tbody>
                  {this.props.log.map((item, k) => {
                    return (
                      <tr key={k}>
                        <td>
                          {icon} {item.User.name} ({item.User.sigla})
                        </td>
                        <td>
                          <em>{Date.create(item.ts).format('{year}-{MM}-{dd}')}</em>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            )}
          </Popup.Content>
        </Popup>
      </div>
    )
  }
}

export class AuthorIconLogEditable extends Component<AuthorIconLogEditableProps, AuthorIconLogEditableState> {
  state = {
    isLoading: false
  }

  static defaultProps = {
    disableEdit: false
  }

  onClickEdit = (ev: React.SyntheticEvent) => {
    ev.preventDefault()
    this.setState({ isLoading: true })
    this.props.onClickEdit()
  }

  render() {
    let classes: string | string[] = [ 'author-icon-log' ]

    if (this.props.className) {
      classes.push(this.props.className)
    }

    classes = classnames(classes, this.props.size)

    const icon = (
      <Icon
        name='user circle'
        size={this.props.size}
        color={this.props.log == null ? null : this.props.iconColor}
        disabled={this.props.log == null}
      />
    )

    const iconComp = (
      <div style={{ position: 'relative' }}>
        <Dimmer inverted active={this.state.isLoading}>
          <Loader inverted />
        </Dimmer>
        {this.props.label && <span className='lb'>{this.props.label}</span>}
        {icon}
        <Button
          className='action edit'
          disabled={this.props.disableEdit}
          compact
          size='mini'
          color={this.props.iconColor}
          onClick={this.onClickEdit}
        >
          {this.props.editText}
        </Button>
      </div>
    )

    return (
      <div className={classes}>
        <Popup trigger={iconComp} position='bottom center' pinned size={this.props.size}>
          <Popup.Header content={this.props.name} />
          <Popup.Content>
            {this.props.log == null ? (
              <div className='label'>Sin Especificar</div>
            ) : (
              <table className='table nowrap'>
                <tbody>
                  {this.props.log.map((item, k) => {
                    return (
                      <tr key={k}>
                        <td>
                          {icon} {item.User.name} ({item.User.sigla})
                        </td>
                        <td>
                          <em>{Date.create(item.ts).format('{year}-{MM}-{dd}')}</em>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            )}
          </Popup.Content>
        </Popup>
      </div>
    )
  }
}

type AuthorIconLogDefaultWrapperProps = {
  model: Partial<IAuthorLog>
  size?: 'huge' | 'large' | 'small' | 'mini' | 'tiny'
  className?: string
}

export class AuthorIconLogDefaultWrapper extends Component<AuthorIconLogDefaultWrapperProps> {
  render() {
    const { model } = this.props

    const alertTextRevisado =
      model.fecha_completado &&
      model.fecha_revision &&
      Date.create(model.fecha_completado) > Date.create(model.fecha_revision)
        ? 'Modificado despues de Revisado'
        : null

    return (
      <div className={classnames('author-icon-log-wrapper', this.props.size, this.props.className)}>
        <AuthorIconLog log={model.UpdateLog} name='Preparado por' label='P' iconColor='green' size={this.props.size} />
        <AuthorIconLog
          log={model.RevisionLog}
          name='Revisado por'
          label='R'
          iconColor='olive'
          size={this.props.size}
          alertText={alertTextRevisado}
        />
      </div>
    )
  }
}
