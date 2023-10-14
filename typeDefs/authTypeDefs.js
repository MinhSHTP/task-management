const authTypeDefs = `
    type LoginResponse {
        success: Boolean!
        message: String
        token: String
        userId: String
    }

    input LoginInput {
        username: String
        password: String
    }
`;

module.exports = authTypeDefs;
