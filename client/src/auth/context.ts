import { Context, createContext } from 'react'
import { Status, User } from '~interfaces'

export const defaultValue: Value = {
  signIn: () => new Promise<void>((resolve) => resolve()),
  signOut: () => undefined,
  signedIn: false,
  status: undefined,
  user: null
}

const context: Context<Value> = createContext(defaultValue)

export default context

export type SignIn = (email: string, password: string) => Promise<void>
export type SignOut = () => void
export type MaybeUser = User | null

export interface Value {
  signedIn: boolean,
  status: Status | undefined,
  user: MaybeUser,
  signIn: SignIn,
  signOut: SignOut
}
