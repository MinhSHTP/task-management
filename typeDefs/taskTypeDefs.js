const taskTypeDefs = `
    type Task {
        id: String
        name: String
        status: String
        isDeleted: Boolean
    }

    input TaskInput {
        id: String
        name: String
        status: String
        isDeleted: Boolean
    }
`;

module.exports = taskTypeDefs;
