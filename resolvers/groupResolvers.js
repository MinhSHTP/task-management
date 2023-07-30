const Group = require("../schemas/Group");
const groupService = require("../services/base-service")(Group);
const {
  get: getGroups,
  upsert: onUpsertGroup,
  remove: onRemoveGroup,
} = groupService;

const groupResolvers = {
  Query: {
    groups: async () => {
      const result = await getGroups();
      return result || [];
    },
  },
  Mutation: {
    upsertGroup: async (_, args) => {
      const { groupInput } = args;
      return await onUpsertGroup(groupInput);
    },
    removeGroup: async (_, args) => {
      const { id } = args;
      return await onRemoveGroup(id);
    },
  },
};

module.exports = {
  groupQueries: groupResolvers.Query,
  groupMutations: groupResolvers.Mutation,
};
