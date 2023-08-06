const {
  queries: taskQueries,
  mutations: taskMutations,
} = require("./taskResolvers");
const {
  queries: userQueries,
  mutations: userMutations,
} = require("./userResolvers");
const { mutations: authMutations } = require("./authResolvers");
const {
  queries: groupQueries,
  mutations: groupMutations,
} = require("./groupResolvers");

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
