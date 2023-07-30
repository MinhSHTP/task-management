const queryTypeDefs = `
    type Query {
        tasks: [Task]!
        users: [User]!
        groups: [Group]!
    }
`;

module.exports = queryTypeDefs;
