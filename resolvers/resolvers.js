const taskResolvers = require("./taskResolvers");
const userResolvers = require("./userResolvers");
const authResolvers = require("./authResolvers");

const resolvers = {
  ...taskResolvers,
  ...userResolvers,
  ...authResolvers,
};
module.exports = resolvers;
