import { ApolloServer, gql } from 'apollo-server-lambda'
import { tasks } from '@notowork/models'

const typeDefs = gql`
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
  type Query {
    tasks: [Task]
    task(id: String): Task
  }
`

const resolvers: any = {
  Query: {
    tasks: () => tasks,
    task: (_: any, { id }: any) => tasks[+id - 1],
  },
  Task: {},
}

const server = new ApolloServer({ typeDefs, resolvers })

export const handler = server.createHandler()
