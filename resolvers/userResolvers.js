const User = require("../schemas/User");
const userService = require("../services/base-service")(User);
const {
  get: getUsers,
  upsert: onUpsertUser,
  remove: onRemoveUser,
} = userService;

const userResolvers = {
  Query: {
    users: async () => {
      const result = await getUsers();
      return result || [];
    },
  },
  Mutation: {
    upsertUser: async (_, args) => {
      const { userInput } = args;
      return await onUpsertUser(userInput);
    },
    removeUser: async (_, args) => {
      const { id } = args;
      return await onRemoveUser(id);
    },
  },
};
module.exports = userResolvers;
