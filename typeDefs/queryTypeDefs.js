const queryTypeDefs = `
    type Query {
        tasks: [Task]!
        users: [User]!
        groups: [Group]!
        projects: [Project]!
    }
`;

module.exports = queryTypeDefs;
