const queryTypeDefs = require("./queryTypeDefs");
const mutateTypeDefs = require("./mutateTypeDefs");
const taskTypeDefs = require("./taskTypeDefs");

const typeDefs = `#graphql
    ${taskTypeDefs}
    ${queryTypeDefs}
    ${mutateTypeDefs}
  `;

module.exports = typeDefs;
