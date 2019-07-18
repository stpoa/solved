import { ApolloServer, gql } from 'apollo-server-lambda'
import { tasks } from '@notowork/models'

const typeDefs = gql`
  type Task {
    id: String
    author: String
    dateExpired: Number
    tags: [String]
    description: [String]
  }
  type Query {
    tasks: [Task]
  }
`

const resolvers = {
  Query: {
    tasks: () => tasks,
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

export const handler = server.createHandler()
