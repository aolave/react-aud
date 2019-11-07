import { Component } from 'react'

type DefaultErrorHandlerProps = {
  errorMessage?: string | JSX.Element
}

export class DefaultErrorHandler extends Component<DefaultErrorHandlerProps> {
  state = {
    hasError: false
  }

  static defaultProps: Partial<DefaultErrorHandlerProps> = {
    errorMessage: null
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (this.isLocalhost()) {
      alert('ERROR: ' + error.message)
    }
  }

  isLocalhost() {
    return window.location.host === 'auditbrain.local'
  }

  render() {
    if (this.state.hasError) {
      return this.props.errorMessage
    }

    return this.props.children
  }
}
