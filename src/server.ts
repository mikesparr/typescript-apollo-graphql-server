import { ApolloServer } from "apollo-server";

import resolvers from "./data/resolvers";
import typeDefs from "./data/schema";

const server = new ApolloServer({ typeDefs, resolvers }) as any;

/* tslint:disable */
server.listen().then(({ url }: any) => {
    console.log(`🚀  Server ready at ${url}`);
  });
/* tslint: enable */
