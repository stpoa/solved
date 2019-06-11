import { users } from '~data'
import { User } from '~interfaces'
import { isTest } from '~lib/env'
import { wait } from '~lib/time'

const delay = isTest() ? 0 : 1

export const signIn: SignIn = async (email, password) => {
  await wait(delay)
  const user = users.find(
    account => account.email === email && account.password === password,
  )

  return user || null
}

type SignIn = (email: string, password: string) => Promise<User | null>
