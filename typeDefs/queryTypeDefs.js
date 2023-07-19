const queryTypeDefs = `
    type Query {
        tasks: [Task]!
        assignees: Boolean!
    }
`;

module.exports = queryTypeDefs;
