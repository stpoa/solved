import { Status, User } from '@notowork/models/interfaces'
import { Context, createContext } from 'react'

export const defaultValue: AuthContextValue = {
  signIn: () => new Promise<void>(resolve => resolve()),
  signOut: () => undefined,
  signedIn: false,
  status: undefined,
  user: null,
}

const context: Context<AuthContextValue> = createContext(defaultValue)

export default context

export type SignIn = (email: string, password: string) => Promise<void>
export type SignOut = () => void

export interface AuthContextValue {
  signedIn: boolean
  status: Status | undefined
  user: User | null
  signIn: SignIn
  signOut: SignOut
  error?: string
}
