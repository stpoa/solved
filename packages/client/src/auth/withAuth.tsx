import React, { ComponentType } from 'react'
import { Subtract } from 'utility-types'
import context, { Value } from './context'

const withAuth = <P extends WithAuth>(Component: ComponentType<P>) => {
  return class AuthedComponent extends React.Component<Subtract<P, WithAuth>> {
    public render() {
      return <context.Consumer>{this.renderComponent}</context.Consumer>
    }

    public renderComponent = (authProps: Value) => {
      const props = { auth: authProps, ...this.props }
      return <Component {...props as any} />
    }
  }
}

export default withAuth

export interface WithAuth {
  auth: Value
}
