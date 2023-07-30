const mutateTypeDefs = `
    type Mutation {
        upsertTask(taskInput: TaskInput): Task
        removeTask(id: String): Task
        login(loginInput: LoginInput): LoginResponse!
        upsertUser(userInput: UserInput): User
        removeUser(id: String): User
        upsertGroup(groupInput: GroupInput): Group
        removeGroup(id: String): Group
    }
`;

module.exports = mutateTypeDefs;
