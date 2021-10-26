import { ApolloServer, gql } from 'apollo-server';
import { Resolvers } from './generated/graphql';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// MEMO: リゾルバの型を指定。
// 以下のように記述することで、スキーマとリゾルバの型が一致しない時はTSのコンパイルが通らなくなる
const resolvers: Resolvers = {
  Query: {
    hello: () => 'world',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`server start ${url}`);
});
