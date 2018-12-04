import { ApolloServer } from "apollo-server-express";
import * as express from "express";

import resolvers from "./data/resolvers";
import typeDefs from "./data/schema";

const SERVER_PORT: number = 4000;

const server = new ApolloServer({ typeDefs, resolvers }) as any;

const app = express();
server.applyMiddleware({ app });

/* tslint:disable */
app.listen({ port: SERVER_PORT }, () => {
    console.log(`🚀 Server ready at http://localhost:${SERVER_PORT}${server.graphqlPath}`);
});
/* tslint: enable */
