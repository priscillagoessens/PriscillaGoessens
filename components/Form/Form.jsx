"use client"
import React, { useState } from 'react';
import './_Form.scss';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // ajouter une logique pour envoyer les données à un serveur ici
    console.log('Form submitted', formData);
    setSubmitted(true);
  };

  return (
    <div className="contact-form-container" id="contact">
    {submitted ? (
      <div className="success-message">
        Merci pour votre message.
      </div>
    ) : (
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contactez-moi</h2>
        <div className="form-group">
          <label htmlFor="name">Nom:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            required
          />
        </div>
        <button type="submit">Envoyer</button>
      </form>
    )}
  </div>
);

}
