const mutateTypeDefs = `
    type Mutation {
        upsertTask(taskInput: TaskInput): Task!
        removeTask(id: String): Task!
    }
`;

module.exports = mutateTypeDefs;
