import { users } from '@notowork/models/data'
import { User } from '@notowork/models/interfaces'

export const generateUserNick = (email: string) =>
  email
    .split('@')[0]
    .replace('+', '')
    .replace('-', '')

export const register: Register = (email, password) => {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      const doesEmailExist = users.find(user => user.email === email)

      if (doesEmailExist) return reject(new Error('Email already taken'))

      const nick = generateUserNick(email)
      const id = users.length + ''
      const newUser: User = { email, nick, id, password }

      users.push(newUser)

      resolve(newUser)
    }, 2000)
  })
}

type Register = (email: string, password: string) => Promise<User>
