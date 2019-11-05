import { ApolloServer } from 'apollo-server-lambda'
import { AuthenticationError } from 'apollo-server-express'

import { tasks } from '@notowork/models'

import { AuthService } from '../auth-service'
import { users } from '../../db'
import { typeDefs } from './schema'

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      tasks: () => tasks,
      task: (_p, { id }: any) => tasks[+id - 1],
      users: (_p, _a, ctx) => ctx.db.users,
      me: (_p, _a, ctx) => {
        if (!ctx.user.id) {
          throw new AuthenticationError('No user logged in')
        }

        return ctx.db.users.find((user: { id: any }) => user.id === ctx.user.id)
      },
    },
    Mutation: {
      async signup(_, { name, email, password }, ctx) {
        const hashedPassword = await AuthService.getHashedPassword(password)

        const user = {
          id: ctx.db.users.length + 1,
          name,
          email: email.toLowerCase(),
          password: hashedPassword,
          roles: ['USER'],
        }

        ctx.db.users.push(user)

        return {
          token: AuthService.getToken({ id: user.id, roles: user.roles }),
          user,
        }
      },
      async login(_, { email, password }, ctx) {
        const user = ctx.db.users.find(
          (u: any) => u.email === email.toLowerCase(),
        )
        if (!user) {
          throw new AuthenticationError(
            `No such user found for email: ${email}`,
          )
        }

        const valid = await AuthService.checkPassword(password, user.password)

        if (!valid) {
          throw new AuthenticationError('Invalid password')
        }

        return {
          token: AuthService.getToken({ id: user.id, roles: user.roles }),
          user,
        }
      },
    },
    User: {},
  },
  context: req => ({ user: AuthService.getUser(req), db: { users } }),
})

export const handler = server.createHandler()
