const mutateTypeDefs = `
    type Mutation {
        upsertTask(taskInput: TaskInput): Task!
        removeTask(id: String): Task!
        login(loginInput: LoginInput): LoginResponse!
    }
`;

module.exports = mutateTypeDefs;
