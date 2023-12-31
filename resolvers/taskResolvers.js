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
    upsertTask: async (_, args, context) => {
      const { taskInput } = args;
      if (!taskInput.id) {
        taskInput.createdBy = context.user._id;
      }
      return await onUpsertTask(taskInput);
    },
    removeTask: async (_, args) => {
      const { id } = args;
      return await onRemoveTask(id);
    },
  },
};

module.exports = {
  queries: taskResolvers.Query,
  mutations: taskResolvers.Mutation,
};
