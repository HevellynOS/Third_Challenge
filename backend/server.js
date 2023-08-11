import express from "express";
import { ApolloServer } from "apollo-server-express";

import { UserResolver } from './src/models/User';

const app = express();
const port = process.env.PORT || 4000;

(async () => {
    const server = new ApolloServer({
        typeDefs: UserResolver,
        resolvers: [UserResolver],
    });
    await server.start();
    server.applyMiddleware({app});

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}/graphql`)
    });
})();
