// Import the gql tag from graphql-tag
const gql = require("graphql-tag");

// typeDefs for the contact form

const typeDefs = gql`
  input ContactForm {
    _id: ID!
    name: String!
    email: String!
    phone: String!
    message: String!
  }
`;

// export the typeDefs
module.exports = typeDefs;
