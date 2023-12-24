const projectTypeDefs = `
    type Project {
        id: String
        name: String!
        members: [String]
        manager: String
    }

    input ProjectInput {
        id: String
        name: String!
        members: [String]
        manager: String
    }
`;

module.exports = projectTypeDefs;
