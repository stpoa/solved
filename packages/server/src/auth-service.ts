import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const APP_SECRET = process.env.APP_SECRET || 'my-super-secure-secret'

export const AuthService = {
  getUser: (req: Request) => {
    const tokenHeader = req.event.headers.authorization || ''

    if (!tokenHeader) {
      return {}
    }

    const token = tokenHeader.replace('Bearer ', '')
    const data = jwt.verify(token, APP_SECRET)

    return Object.assign({}, data)
  },

  getHashPassword: async (password: string) => {
    const hashPassword = await bcrypt.hash(password, 10)
    return hashPassword
  },

  checkPassword: async (inputPassword: string, userPassword: string) => {
    const isValid = await bcrypt.compare(inputPassword, userPassword)
    return isValid
  },

  getToken: (data: string | object | Buffer) => jwt.sign(data, APP_SECRET),
}

type Request = {
  headers: { authorization: string }
  event: any
}
