const userTypeDefs = `
    type User {
        id: String
        username: String
        password: String
        email: String
        displayname: String
        role: String
        joined_group: Array
        joining_group: Array
        created_at: Date
    }

    input UserInput {
        username: String
        email: String
        displayname: String
        role: String
    }

`;

module.exports = userTypeDefs;
