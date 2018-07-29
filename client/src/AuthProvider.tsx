import React, { Component, Context, createContext } from 'react'
import { users } from '~data'
import { IUser } from '~interfaces'

export const AuthContext: Context<{}> = createContext({})

enum Status {
  Success = 'success',
  Failure = 'failure',
  Pending = 'pending'
}

interface IAuthState {
  signedIn: boolean,
  status?: Status
  user: IUser | null
}

export default class AuthProvider extends Component<{}, IAuthState> {
  public readonly state = {
    signedIn: false,
    user: null
  }

  public render () {
    return (
      <AuthContext.Provider
        value={{
          signIn: this.signIn,
          signOut: this.signOut,
          signedIn: this.state.signedIn,
          user: this.state.user
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }

  private signIn = (email: string, password: string): void => {
    this.setState({
      status: Status.Pending
    })

    const user = users.find((user) => (
      user.email === email && user.password === password
    ))

    if (user) {
    }

    this.setState({ signedIn: true })
  }

  private signOut: () => void = () => {
    this.setState({ signedIn: false })
  }
}
