import React, { Context, createContext } from 'react'
import { accounts } from '~data'
import { User } from '~interfaces'

export const AuthContext: Context<{}> = createContext({})

export enum Status {
  Success = 'success',
  Failure = 'failure',
  Pending = 'pending'
}

interface AuthState {
  signedIn: boolean,
  status?: Status,
  user: User | null
}

export default class AuthProvider extends React.Component<{}, AuthState> {
  public readonly state: AuthState = {
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

    const matchedAccount = accounts.find((account) => (
      account.email === email && account.password === password
    ))

    this.setState({ signedIn: true })
  }

  private signOut: () => void = () => {
    this.setState({ signedIn: false })
  }
}

export function withAuth (Component: any) {
  return function AuthedComponent (props: any) {
    return (
      <AuthContext.Consumer>
        {(authProps) => <Component {...props} {...authProps} />}
      </AuthContext.Consumer>
    )
  }
}
