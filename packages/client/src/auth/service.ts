import { isTest } from '@notowork/lib/env'
import { wait } from '@notowork/lib/time'
import { users } from '@notowork/models/data'
import { User } from '@notowork/models/interfaces'

const delay = isTest() ? 0 : 1

export const signIn: SignIn = async (email, password) => {
  await wait(delay)
  const user = users.find(
    account => account.email === email && account.password === password,
  )

  return user || null
}

type SignIn = (email: string, password: string) => Promise<User | null>
