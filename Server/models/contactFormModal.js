const { Schema, model } = require("mongoose");

const contactFormSchema = new Schema({
  // column field for user's name
  name: {
    type: String,
    required: true,
  },

  // user's email
  email: {
    type: String,
    required: true,
    match: [/.+\@.+\..+/, "Please enter a valid email address"],
  },

  // user's phone number
  phone: {
    type: String,
    required: true,
    match: [/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number"],
  },

  // user's message
  message: {
    type: String,
    required: true,
  },
});

const form = model("ContactForm", contactFormSchema);

// create and export the model
module.exports = form;
