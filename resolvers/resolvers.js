const { taskQueries, taskMutations } = require("./taskResolvers");
const { userQueries, userMutations } = require("./userResolvers");
const { authMutations } = require("./authResolvers");
const { groupQueries, groupMutations } = require("./groupResolvers");

const resolvers = {
  Query: {
    ...taskQueries,
    ...userQueries,
    ...groupQueries,
  },
  Mutation: {
    ...authMutations,
    ...taskMutations,
    ...userMutations,
    ...groupMutations,
  },
};
module.exports = resolvers;
