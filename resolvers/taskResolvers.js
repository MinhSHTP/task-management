const taskService = require("../services/task-service");
const { get, upsert, remove } = taskService;

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
