const { Schema, model } = require('mongoose');

const contactFormSchema = new Schema({
  // column field for user's name
  name: {
    type: String,
    required: true
  },

  // user's email
  email: {
    type: String,
    required: true,
    match: [/.+\@.+\..+/, 'Please enter a valid email address']
  },

  // user's phone number
  phone: {
    type: String,
    required: true,
    match: [/^\d{3}-\d{3}-\d{4}$/, 'Please enter a valid phone number']
  },

  // user's message
  message: {
    type: String,
    required: true
  }
});

const ContactForm = model('ContactForm', contactFormSchema);

// create and export the model
module.exports = ContactForm;
