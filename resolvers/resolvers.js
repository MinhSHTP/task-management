const { taskQueries, taskMutations } = require("./taskResolvers");
const { userQueries, userMutations } = require("./userResolvers");
const { authMutations } = require("./authResolvers");

const resolvers = {
  Query: {
    ...taskQueries,
    ...userQueries,
  },
  Mutation: {
    ...authMutations,
    ...taskMutations,
    ...userMutations,
  },
};
module.exports = resolvers;
