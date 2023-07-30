const Task = require("../schemas/Task");
const taskService = require("../services/base-service")(Task);
const {
  get: getTasks,
  upsert: onUpsertTask,
  remove: onRemoveTask,
} = taskService;

const taskResolvers = {
  Query: {
    tasks: async () => {
      const result = await getTasks();
      return result || [];
    },
  },
  Mutation: {
    upsertTask: async (_, args) => {
      const { taskInput } = args;
      return await onUpsertTask(taskInput);
    },
    removeTask: async (_, args) => {
      const { id } = args;
      return await onRemoveTask(id);
    },
  },
};

module.exports = {
  taskQueries: taskResolvers.Query,
  taskMutations: taskResolvers.Mutation,
};
