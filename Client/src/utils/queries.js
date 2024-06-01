import { gql } from '@apollo/client';

// Define a query to store a contact form in the database

export const ADD_CONTACT_FORM = gql`
  query addContactForm(
    $name: String!
    $email: String!
    $phone: String!
    $message: String!
  ) {
    addContactForm(
      name: $name
      email: $email
      phone: $phone
      message: $message
    ) {
      name
      email
      phone
      message
    }
  }
`;
