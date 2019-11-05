import { ApolloServer, gql } from 'apollo-server-lambda'
import { tasks } from '@notowork/models'
import { AuthService } from '../auth-service'
import { AuthenticationError } from 'apollo-server-express'
import { users } from '../../db';

const server = new ApolloServer({
  typeDefs: gql`
    type SolutionEntry {
      dateCreated: String
      comment: String
      image: String
    }
    type Task {
      id: String!
      author: String!
      solver: String
      solution: [SolutionEntry]
      dateCreated: String!
      dateExpired: String!
      dateAssigned: String
      dateStarted: String
      category: String!
      tags: [String]!
      description: String!
      shortDescription: String!
      photos: [String]!
      price: Int!
    }
    enum Role {
      ADMIN
      OWNER
      USER
    }
    type User {
      id: ID!
      name: String!
      email: String! @lower
      roles: [Role!]!
      notes: [Note!]
    }
    type Query {
      tasks: [Task]
      task(id: String): Task
      users: [User!]!
      me: User
    }
    type Mutation {
      signup(name: String!, email: String!, password: String!): AuthPayload!
      login(email: String!, password: String!): AuthPayload!
    }
  `,
  resolvers: {
    Query: {
      tasks: () => tasks,
      task: (_: any, { id }: any) => tasks[+id - 1],
    },
    Mutation: {
      async signup(_, { name, email, password }, ctx) {
        const hashPassword = await AuthService.getHashPassword(password)

        const user = {
          id: ctx.db.users.length + 1,
          name,
          email: email.toLowerCase(),
          password: hashPassword,
          roles: ['USER'],
        }

        ctx.db.users.push(user)

        return {
          token: AuthService.getToken({ id: user.id, roles: user.roles }),
          user,
        }
      },
      async login(_, { email, password }, ctx) {
        const user = ctx.db.users.find((u: any) => u.email === email.toLowerCase())
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
  context: ({ req }) => {
    const user = AuthService.getUser(req)

    return { user, db: { users } }
  },
})

export const handler = server.createHandler()
