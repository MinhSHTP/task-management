const taskResolvers = require("./taskResolvers");
const assigneeResolvers = require("./assigneeResolvers");

const resolvers = {
  ...taskResolvers,
  ...assigneeResolvers,
};
module.exports = resolvers;
