import { ApolloServer, gql } from 'apollo-server'
import { randomUUID } from 'node:crypto'

const typeDefs = gql`
  type User {
    id: String!
    name: String!
  }
  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(name: String!): User!
  }
`

interface Users {
  id: string
  name: string
}

const users: Users[] = []

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      users: () => {
        return users
      }
    },

    Mutation: {
      createUser: (_, args) => {
        const user = {
          id: randomUUID(),
          name: args.name
        }
        users.push(user)
        return user
      }
    }
  }
})

server.listen().then(({ url }) => {
  console.log(`🚀 HTTP Server runing on ${url}`)
})
