import { SFC, ReactNode } from 'react'

import Popup from 'semantic-ui-react/dist/commonjs/modules/Popup/Popup'
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon/Icon'
import { SemanticCOLORS } from 'semantic-ui-react/dist/commonjs/generic'
import getvalue from 'get-value'

declare var app: any

type TooltipProps = {
  title?: string
  text: string | ReactNode
  wide?: boolean | 'very'
  iconColor?: SemanticCOLORS
  iconSize?: 'mini' | 'tiny' | 'small' | 'large' | 'big' | 'huge' | 'massive'
}

export const GenericTooltip: SFC<TooltipProps> = (props): JSX.Element => {
  let content
  if (typeof props.text == 'object') {
    content = <div className='content'>{props.text}</div>
  } else if (typeof props.text == 'string') {
    if (props.text.substr(0, 1) == '@') {
      content = getvalue(app.vars.texts, props.text.substr(1))
    } else {
      content = props.text
    }

    if (!content) {
      return null
    }

    content = <div dangerouslySetInnerHTML={{ __html: content }} />
  }

  return (
    <Popup
      size='tiny'
      wide={props.wide}
      trigger={<Icon color={props.iconColor} size={props.iconSize} name='question circle' className='tooltip-icon' />}
      header={props.title}
      content={content}
    />
  )
}

GenericTooltip.defaultProps = {
  iconColor: 'blue',
  iconSize: 'small',
  wide: false
}
