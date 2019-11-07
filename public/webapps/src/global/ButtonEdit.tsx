import Button from 'semantic-ui-react/dist/commonjs/elements/Button'
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon/Icon'
import cx from 'classnames'

const ButtonEdit = (props: any) => {
  let { children, ...buttonProps } = props
  buttonProps.className = cx(buttonProps.className, 'action')
  buttonProps = { icon: true, basic: true, compact: true, size: 'mini', title: 'Editar', ...buttonProps }

  if (typeof children == 'undefined') {
    children = <Icon name='pencil square' color='green' size='large' />
  }

  return (
    <Button {...buttonProps} type='button'>
      {children}
    </Button>
  )
}

export default ButtonEdit
