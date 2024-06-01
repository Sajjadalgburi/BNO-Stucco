import { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { ADD_CONTACT_FORM } from '../../utils/queries';

import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';

const Contact = () => {
  if (process.env.NODE_ENV) {
    // Adds messages only in a dev environment
    loadDevMessages();
    loadErrorMessages();
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const [addContactForm, { loading, data, error }] =
    useLazyQuery(ADD_CONTACT_FORM);

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    return phoneRegex.test(phone);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validatePhoneNumber(formData.phone)) {
      setErrorMessage(
        'Please enter a valid phone number (e.g., 123-456-7890).',
      );
      return;
    }
    setErrorMessage('');
    addContactForm({ variables: { contactForm: formData } });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="py-24 welcomeSection text-center">
        <h1 className="text-5xl font-bold">Contact Us</h1>
        <p className="mt-8">
          Please fill in the form so we can reach back to you!
        </p>
        <p className="mt-2"> Too lazy? call us at 416-836-6130</p>
      </div>

      <div className="userForm w-3/4 xl:w-2/4">
        <label className="input input-bordered flex items-center gap-2 mb-4">
          Name
          <input
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
            type="text"
            className="grow"
            placeholder="JaneDoe"
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 mb-4">
          Email
          <input
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
            type="text"
            className="grow"
            placeholder="janeDoe@site.com"
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 mb-4">
          Phone
          <input
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
            }}
            type="text"
            className="grow"
            placeholder="123-456-7890"
          />
        </label>

        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

        <textarea
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
          }}
          className="h-48 w-full rounded p-2 mb-4"
          placeholder="Your Message"
        ></textarea>

        <button onClick={handleFormSubmit} className="btn w-full">
          Submit!
        </button>
      </div>
    </div>
  );
};

export default Contact;
