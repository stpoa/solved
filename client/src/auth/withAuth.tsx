import React from 'react'
import context from './context'

export default function withAuth (Component: any) {
  return class AuthedComponent extends React.Component {
    public render () {
      return (
        <context.Consumer>
          {this.renderComponent}
        </context.Consumer>
      )
    }

    public renderComponent = (authProps: {}) => {
      return (
        <Component auth={authProps} {...this.props} />
      )
    }
  }
}
