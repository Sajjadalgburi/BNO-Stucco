const { ContactForm } = require('../models');
const sendMail = require('../mail/mailer.js');

// Define the resolvers for the mutations
const resolvers = {
  Mutation: {
    // Mutation to create a contact form entry
    addContactForm: async (parent, { contactForm }) => {
      try {
        const createdContactForm = await ContactForm.create(contactForm);
        await sendMail(contactForm.email);

        // Return the created contact form data
        return createdContactForm;
      } catch (err) {
        console.error('Failed to create a contact form:', err);
        throw new Error('Failed to create a contact form');
      }
    },
  },
};

module.exports = resolvers;
