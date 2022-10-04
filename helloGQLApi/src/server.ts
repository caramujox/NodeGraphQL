import 'reflect-metadata'
import { ApolloServer, gql } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import { AppointmentResolver } from './resolvers/appointment-resolver'
import path from 'node:path'

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [AppointmentResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql')
  })

  const server = new ApolloServer({
    schema
  })

  const { url } = await server.listen()
  console.log(`🚀 HTTP Server runing on ${url}`)
}

bootstrap()
