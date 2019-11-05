import { gql } from 'apollo-server-lambda'

export const typeDefs = gql`
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
    email: String!
    roles: [Role!]!
  }
  type Query {
    tasks: [Task]
    task(id: String): Task
    users: [User!]!
    me: User
  }
  type AuthPayload {
    token: String!
    user: User!
  }
  type Mutation {
    signup(name: String!, email: String!, password: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
  }
`
