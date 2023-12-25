const userTypeDefs = `
    type User {
        id: String
        username: String
        password: String
        email: String
        display_name: String
        role: String
        joined_group: Array
        joining_group: Array
        created_at: Date
    }

    input UserInput {
        username: String
        email: String
        display_name: String
        role: String
    }

`;

module.exports = userTypeDefs;
