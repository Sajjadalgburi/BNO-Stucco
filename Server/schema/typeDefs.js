// Import the gql tag from graphql-tag
const gql = require('graphql-tag');

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

  type AWS_S3Bucket_Imgs {
    ETag: ID!
    ImgURL: String!
  }

  ## this is a placeholder type to satisfy the GQL server
  type Query {
    _empty: String
    getHeroImages: [AWS_S3Bucket_Imgs]
    getHouseImages: [AWS_S3Bucket_Imgs]
    getMaterialImages: [AWS_S3Bucket_Imgs]
  }

  type Mutation {
    addContactForm(contactForm: ContactFormInput): ContactForm
  }
`;

// export the typeDefs
module.exports = typeDefs;
