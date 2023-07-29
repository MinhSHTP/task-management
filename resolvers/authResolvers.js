const { doLogin } = require("../services/auth-service");

const authResolvers = {
  Mutation: {
    login: async (_, args) => {
      const { loginInput } = args;
      return doLogin(loginInput);
    },
  },
};

module.exports = { authMutations: authResolvers.Mutation };
