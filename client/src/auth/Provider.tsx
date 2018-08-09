import React, { Component } from 'react'
import context, { defaultValue, SignIn, SignOut, Status, Value } from './context'
import { signIn } from './service'

export default class Provider extends Component<{}, ProviderState> {
  public constructor (props: {}) {
    super(props)

    this.state = {
      ...defaultValue,
      signIn: this.signIn,
      signOut: this.signOut
    }
  }

  public render () {
    return (
      <context.Provider value={this.state}>
        {this.props.children}
      </context.Provider>
    )
  }

  private signIn: SignIn = async (email, password) => {
    this.setState({
      status: Status.Pending
    })

    const maybeUser = await signIn(email, password)

    this.setState({
      signedIn: Boolean(maybeUser),
      status: maybeUser ? Status.Success : Status.Failure,
      user: maybeUser
    })
  }

  private signOut: SignOut = () => {
    this.setState({
      signedIn: false,
      status: undefined,
      user: null
    })
  }
}

export type ProviderState = Value
