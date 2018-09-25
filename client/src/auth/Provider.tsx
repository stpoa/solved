import React, { Component } from 'react'
import { Status } from '~interfaces'
import context, { defaultValue, SignIn, SignOut, Value } from './context'
import { signIn } from './service'

export default class Provider extends Component<{}, ProviderState> {
  public constructor (props: {}) {
    super(props)

    this.state = {
      ...defaultValue,
      signIn: this.signIn,
      signOut: this.signOut,
    }
  }

  public render () {
    return (
      <context.Provider value={this.state}>
        {this.props.children}
      </context.Provider>
    )
  }

  private signIn: SignIn = (email, password) => {
    return new Promise(resolve => {
      this.setState({
        status: Status.Pending,
      }, async () => {
        const maybeUser = await signIn(email, password)

        this.setState({
          signedIn: Boolean(maybeUser),
          status: maybeUser ? Status.Success : Status.Failure,
          user: maybeUser,
        }, () => resolve())
      })
    })
  }

  private signOut: SignOut = () => {
    this.setState({
      signedIn: false,
      status: undefined,
      user: null,
    })
  }
}

export type ProviderState = Value
