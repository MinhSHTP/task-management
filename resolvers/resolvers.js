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
const {
  queries: projectQueries,
  mutations: projectMutations,
} = require("./projectResolvers");

const resolvers = {
  Query: {
    ...taskQueries,
    ...userQueries,
    ...groupQueries,
    ...projectQueries,
  },
  Mutation: {
    ...authMutations,
    ...taskMutations,
    ...userMutations,
    ...groupMutations,
    ...projectMutations,
  },
};
module.exports = resolvers;
