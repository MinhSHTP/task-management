const groupTypeDefs = `
    type Group {
        id: String
        name: String
        members: [String]
        manager: String
    }

    input GroupInput {
        name: String
        members: [String]
        manager: String
    }

`;

module.exports = groupTypeDefs;
