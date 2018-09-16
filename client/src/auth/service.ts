import { accounts, users } from '~data'
import { User } from '~interfaces'

const delay = process.env.NODE_ENV === 'test' ? 0 : 2000

export const signIn: SignIn = (email, password) => {
  return new Promise(resolve => {
    window.setTimeout(() => {
      const matchedAccount = accounts.find(account => (
        account.email === email && account.password === password
      ))

      const matchedUser = (matchedAccount && users.find(user => user.email === email)) || null

      resolve(matchedUser)
    }, delay)
  })
}

type SignIn = (email: string, password: string) => Promise<User | null>
