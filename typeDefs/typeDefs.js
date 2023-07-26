const queryTypeDefs = require("./queryTypeDefs");
const mutateTypeDefs = require("./mutateTypeDefs");
const taskTypeDefs = require("./taskTypeDefs");
const authTypeDefs = require("./authTypeDefs");

const typeDefs = `#graphql
  ${queryTypeDefs}
  ${mutateTypeDefs}
  ${taskTypeDefs}
  ${authTypeDefs}
`;

module.exports = typeDefs;
