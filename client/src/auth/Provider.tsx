import React from 'react'
import { accounts, users } from '~data'
import { User } from '~interfaces'
import context from './context'

export enum Status {
  Success = 'success',
  Failure = 'failure',
  Pending = 'pending'
}

export default class AuthProvider extends React.Component<{}, AuthState> {
  public constructor (props: {}) {
    super(props)

    this.state = {
      signIn: this.signIn,
      signOut: this.signOut,
      signedIn: false,
      user: null
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
    this.setState({
      status: Status.Pending
    })

    window.setTimeout(() => {
      const matchedAccount = accounts.find((account) => (
          account.email === email && account.password === password
        ))

      const matchedUser = (matchedAccount && users.find((user) => user.email === email)) || null

      this.setState({
        signedIn: Boolean(matchedUser),
        status: matchedUser ? Status.Success : Status.Failure,
        user: matchedUser
      })
    }, 2000)
  }

  private signOut: SignOut = () => {
    this.setState({ signedIn: false })
  }
}

type SignIn = (email: string, password: string) => void
type SignOut = () => void
type MaybeUser = User | null

interface AuthState {
  signedIn: boolean,
  status?: Status,
  user: MaybeUser,
  signIn: SignIn,
  signOut: SignOut
}
