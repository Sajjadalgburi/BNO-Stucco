import { gql } from '@apollo/client';

// Define a mutation to store a contact form in the database

export const ADD_CONTACT_FORM = gql`
  mutation addContactForm($contactForm: ContactFormInput!) {
    addContactForm(contactForm: $contactForm) {
      name
      email
      phone
      message
    }
  }
`;
