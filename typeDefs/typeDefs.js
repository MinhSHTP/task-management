const queryTypeDefs = require("./queryTypeDefs");
const mutateTypeDefs = require("./mutateTypeDefs");
const taskTypeDefs = require("./taskTypeDefs");
const authTypeDefs = require("./authTypeDefs");
const userTypeDefs = require("./userTypeDefs");
const groupTypeDefs = require("./groupTypeDefs");
const projectTypeDefs = require("./projectTypeDefs");
const scalars = require("./scalars");

const typeDefs = `#graphql
  ${scalars}
  ${queryTypeDefs}
  ${mutateTypeDefs}
  ${taskTypeDefs}
  ${authTypeDefs}
  ${userTypeDefs}
  ${groupTypeDefs}
  ${projectTypeDefs}
`;

module.exports = typeDefs;
