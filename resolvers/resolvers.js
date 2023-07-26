const taskResolvers = require("./taskResolvers");
const assigneeResolvers = require("./assigneeResolvers");
const authResolvers = require("./authResolvers");

const resolvers = {
  ...taskResolvers,
  ...assigneeResolvers,
  ...authResolvers,
};
module.exports = resolvers;
