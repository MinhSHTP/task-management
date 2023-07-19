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

const port = process.env.PORT;

const startServer = async () => {
  const app = new express();

  const graphqlServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await graphqlServer.start();
  app.use(cors(), bodyParser.json(), expressMiddleware(graphqlServer));
  const server = http.createServer(app);
  server.listen(port);
};

const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_CONNECTION, { useNewUrlParser: true })
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.error(`Connect to DB failed ${err.message}`));
};

connectDB();
startServer();
