const mutateTypeDefs = `
    type Mutation {
        upsertTask(taskInput: TaskInput): Task
        removeTask(id: String): Task
        login(loginInput: LoginInput): LoginResponse!
        upsertUser(userInput: UserInput): User
        removeUser(id: String): User
    }
`;

module.exports = mutateTypeDefs;
