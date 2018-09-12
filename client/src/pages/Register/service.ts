import { accounts, users } from '~data'
import { User } from '~interfaces'

export const register: Register = (email, password) => {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      const doesEmailExist = accounts.find((account) => account.email === email)

      if (doesEmailExist) return reject(new Error('Email already taken'))

      const newUser: User = { email }

      accounts.push({ email, password })
      users.push(newUser)

      resolve(newUser)
    }, 2000)
  })
}

type Register = (email: string, password: string) => Promise<User>
