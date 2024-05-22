// Import the gql tag from graphql-tag
const gql = require("graphql-tag");

// typeDefs for the contact form
const typeDefs = gql`
  input ContactFormInput {
    name: String!
    email: String!
    phone: String!
    message: String!
  }

  type ContactForm {
    _id: ID!
    name: String!
    email: String!
    phone: String!
    message: String!
  }

  ## this is a placeholder type to satisfy the GQL server
  type Query {
    _empty: String
  }

  type Mutation {
    addContactForm(contactForm: ContactFormInput): ContactForm
  }
`;

// export the typeDefs
module.exports = typeDefs;
