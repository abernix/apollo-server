import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import { unlinkSync, closeSync, openSync, readFileSync } from 'fs';
import { join as pathJoin } from 'path';

const app = express();
(new ApolloServer({
  subscriptions: false,
  uploads: false,
  playground: false,
  typeDefs: gql`
    type Query {
      field: String!
    }
  `,
  resolvers: {
    Query: {
      field(_parent, _args, _context, _info) {
        sleep(10) // mimic sync I/O by sleeping 10ms sync

        const result = readFileSync(__filename);
        return result.toString();
      }
    }
  }
})).applyMiddleware({ app })

const socket = app.listen(4000);

const tmp = pathJoin(__dirname, 'tmp');

process.on('SIGINT', function () {
  console.error('Caught SIGINT, shutting down.')
  try { unlinkSync(tmp) } catch (e) {}
  socket.close()
})

function sleep (ms: number){
  var now = Date.now()
  while(Date.now() < now + ms) {
    closeSync(openSync(tmp, 'a'))
  }
}
