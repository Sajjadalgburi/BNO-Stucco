const { ContactForm } = require("../models");

// Define the resolvers for the mutations
const resolvers = {
  Mutation: {
    // Mutation to create a contact form entry
    addContactForm: async (parent, { contactForm }) => {
      try {
        return await ContactForm.create(contactForm);
      } catch (err) {
        console.error("Failed to create a contact form:", err);
        throw new Error("Failed to create a contact form");
      }
    },
  },
};

module.exports = resolvers;
