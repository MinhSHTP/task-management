const taskTypeDefs = `
    type Task {
        id: String
        name: String
        status: String
        isDeleted: Boolean
        updatedBy: String
        assignees: Array
        assignedGroups: Array
    }

    input TaskInput {
        id: String
        name: String
        status: String
        isDeleted: Boolean
        updatedBy: String
        assignees: Array
        assignedGroups: Array
    }
`;

module.exports = taskTypeDefs;
