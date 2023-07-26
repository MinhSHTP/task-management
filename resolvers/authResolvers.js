const { doLogin } = require("../services/auth-service");

const authResolvers = {
  Query: {},
  Mutation: {
    login: async (_, args) => {
      const { loginInput } = args;
      return doLogin(loginInput);
    },
  },
};

module.exports = authResolvers;
