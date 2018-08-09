import { Promise } from 'es6-promise'
import { accounts, users } from '~data'
import { User } from '~interfaces'

type SignIn = (email: string, password: string) => Promise<User | null>

const signIn: SignIn = (email, password) => {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      const matchedAccount = accounts.find((account) => (
        account.email === email && account.password === password
      ))

      const matchedUser = (matchedAccount && users.find((user) => user.email === email)) || null

      if (matchedUser) return resolve(matchedUser)

      reject(null)
    }, 2000)
  })
}
