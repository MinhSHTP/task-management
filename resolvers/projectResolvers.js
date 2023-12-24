const Project = require("../schemas/Project");
const projectService = require("../services/base-service")(Project);
const {
  get: getProjects,
  upsert: onUpsertProject,
  remove: onRemoveProject,
} = projectService;

const projectResolvers = {
  Query: {
    projects: async () => {
      const result = await getProjects();
      return result || [];
    },
  },
  Mutation: {
    upsertProject: async (_, args) => {
      const { projectInput } = args;
      return await onUpsertProject(projectInput);
    },
    removeProject: async (_, args) => {
      const { id } = args;
      return await onRemoveProject(id);
    },
  },
};

module.exports = {
  queries: projectResolvers.Query,
  mutations: projectResolvers.Mutation,
};
