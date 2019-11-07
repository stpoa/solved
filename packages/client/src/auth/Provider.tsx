import { Status } from '@notowork/models/interfaces'
import gql from 'graphql-tag'
import React, { FC, useState } from 'react'
import { useMutation } from 'react-apollo-hooks'
import context, { AuthContextValue, SignIn, SignOut } from './context'

const SIGN_IN = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
        roles
      }
    }
  }
`

const Provider: FC = ({ children }) => {
  const [signedIn, setSignedIn] = useState(false)
  const [status, setStatus] = useState()
  const [user, setUser] = useState(null)
  const [error, setError] = useState<string | undefined>()

  const [execSignIn] = useMutation(SIGN_IN)

  const signIn: SignIn = async (email, password) => {
    setStatus(Status.Pending)

    try {
      const { data } = await execSignIn({ variables: { email, password } })
      const login = (data as any).login

      setUser(login.user)
      setStatus(login.user ? Status.Success : Status.Failure)
      setSignedIn(true)
    } catch (e) {
      setError(e.message)
      setStatus(undefined)
      setUser(null)
      setSignedIn(false)
    }
  }

  const signOut: SignOut = () => {
    setSignedIn(false)
    setStatus(undefined)
    setUser(null)
  }

  return (
    <context.Provider
      value={{
        signedIn,
        status,
        user,
        signIn,
        signOut,
        error,
      }}
    >
      {children}
    </context.Provider>
  )
}

export type ProviderState = AuthContextValue
export default Provider
