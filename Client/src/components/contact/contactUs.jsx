import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_CONTACT_FORM } from '../../utils/mutations';

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

  const [addContactForm, { error }] = useMutation(ADD_CONTACT_FORM);

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    return phoneRegex.test(phone);
  };

  const formatPhoneNumber = (value) => {
    // Remove all non-digit characters
    const cleaned = ('' + value).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
      return (
        (!match[2] ? match[1] : match[1] + '-' + match[2]) +
        (match[3] ? '-' + match[3] : '')
      );
    }
    return value;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validatePhoneNumber(formData.phone)) {
      setErrorMessage('Please enter a valid phone number');
      return;
    }
    setErrorMessage('');

    const { data } = await addContactForm({
      variables: {
        contactForm: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
      },
    });

    console.log(data);
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
              const formattedPhone = formatPhoneNumber(e.target.value);
              setFormData({ ...formData, phone: formattedPhone });
            }}
            minLength={5}
            maxLength={12}
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
