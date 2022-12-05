"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.default = (0, graphql_1.buildSchema)(`
    type User {
        id: ID!
        names: String!
        email: String!
    }

    input newUserInput {
        names: String!
        email: String!
        password: String!
    }

    type RootMutation {
        signup(inputs: newUserInputs): User!
    }
`);
