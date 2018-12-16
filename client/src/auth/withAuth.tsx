import React, { ComponentType } from 'react'
import { Subtract } from 'utility-types'
import context, { Value } from './context'

export default function withAuth<P extends WithAuth>(
  Component: ComponentType<P>,
) {
  return class AuthedComponent extends React.Component<Subtract<P, WithAuth>> {
    public render() {
      return <context.Consumer>{this.renderComponent}</context.Consumer>
    }

    public renderComponent = (authProps: Value) => {
      return <Component auth={authProps} {...this.props} />
    }
  }
}

export interface WithAuth {
  auth: Value
}
