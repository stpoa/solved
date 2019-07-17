import { isTest } from '@stpoa/lib/env'
import { wait } from '@stpoa/lib/time'
import { users } from '@stpoa/models/data'
import { User } from '@stpoa/models/interfaces'

const delay = isTest() ? 0 : 1

export const signIn: SignIn = async (email, password) => {
  await wait(delay)
  const user = users.find(
    account => account.email === email && account.password === password,
  )

  return user || null
}

type SignIn = (email: string, password: string) => Promise<User | null>
