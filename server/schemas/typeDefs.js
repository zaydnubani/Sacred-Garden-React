const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Example {
    _id: ID
    name: String
  }

  type Query {
    examples: [Example]!
    example(exampleId: ID!): Example
  }

  type Mutation {
    addExample(name: String!): Example
    removeExample(exampleId: ID!): Example
  }
`;

module.exports = typeDefs;
