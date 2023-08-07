const express = require("express");
const http = require("http");
require("dotenv").config();
const cors = require("cors");
const typeDefs = require("./typeDefs/typeDefs");
const resolvers = require("./resolvers/resolvers");
const { expressMiddleware } = require("@apollo/server/express4");
const { ApolloServer } = require("@apollo/server");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { getSecretKey } = require("./utils/utils");
const jwt = require("jsonwebtoken");

const port = process.env.PORT;

const authMiddleware = async (request) => {
  const header = request.headers.authorization;
  if (!header) return { isAuth: false };
  const token = header.split(" ");
  if (!token) return { isAuth: false };
  let decodeToken;
  const secretKey = await getSecretKey();

  try {
    decodeToken = jwt.verify(token[1], secretKey);
  } catch (err) {
    return { isAuth: false };
  }
  if (!decodeToken) return { isAuth: false };
  const { _id } = decodeToken;
  if (_id)
    return {
      isAuth: true,
      user: {
        ...decodeToken,
      },
    };
};

const authPlugin = () => {
  return {
    requestDidStart(requestContext) {
      const {
        contextValue: apolloContext,
        // request: { variables: requestVariables },
      } = requestContext;
      return {
        didResolveOperation(resolutionContext) {
          const { isAuth } = apolloContext;
          resolutionContext.operation.selectionSet.selections.forEach(
            (selection) => {
              const { value: operationName } = selection.name;
              endpointAuth(operationName, isAuth);
            }
          );
        },
      };
    },
  };
};

const startServer = async () => {
  const app = new express();

  const graphqlServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [authPlugin()],
  });

  await graphqlServer.start();
  app.use(
    cors(),
    bodyParser.json(),
    expressMiddleware(graphqlServer, {
      context: async ({ req }) => {
        return authMiddleware(req);
      },
    })
  );
  const server = http.createServer(app);
  server.listen(port);
};

const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_CONNECTION, { useNewUrlParser: true })
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.error(`Connect to DB failed ${err.message}`));
};

const endpointAuth = (endpoint, isAuth) => {
  const ignoreEndpoints = ["login", "__schema"];

  if (ignoreEndpoints.indexOf(endpoint.toLowerCase()) === -1 && !isAuth) {
    throw new AuthenticationError("Unauthorized");
  }
};

connectDB();
startServer();
