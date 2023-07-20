const Task = require("../schemas/Task");
const baseService = require("../services/base-service")(Task);
const { get, upsert, remove } = baseService;

const taskResolvers = {
  Query: {
    tasks: async () => {
      return await get();
    },
  },
  Mutation: {
    upsertTask: async (_, args) => {
      const { taskInput } = args;
      return await upsert(taskInput);
    },
    removeTask: async (_, args) => {
      const { id } = args;
      return await remove(id);
    },
  },
};
module.exports = taskResolvers;
