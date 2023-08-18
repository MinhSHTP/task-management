const taskTypeDefs = `
    type Task {
        id: String
        name: String
        status: String
        isDeleted: Boolean
        updatedBy: String
        assignees: Array
        assignedGroups: Array
        createdBy: String
        description: String
    }

    input TaskInput {
        id: String
        name: String
        status: String
        isDeleted: Boolean
        updatedBy: String
        assignees: Array
        assignedGroups: Array
        createdBy: String
        description: String
    }
`;

module.exports = taskTypeDefs;
