"use client"
import React, { useState } from 'react';
import './_Form.scss';
import Button from '../Button/Button';

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
    <div className="section-contact" id="contact">
      <div className='section-contact-container-title'>
        <h2>Contactez-moi</h2>
      </div>
      <div className="section-contact-container">
      {submitted ? (
        <div className="success-message">
          Merci pour votre message.
        </div>
      ) : (
      <> 
      <form className="section-contact-container-form" onSubmit={handleSubmit}>
        <div className="section-contact-container-form-group">
          <label htmlFor="name">Nom:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            required
            readOnly
          />
        </div>
        <div className="section-contact-container-form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            required
            readOnly
          />
        </div>
        <div className="section-contact-container-form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            required
            readOnly
          />
        </div>
        <Button type="submit" text="Envoyer"></Button>
      </form>
    </>
    )}
    </div>
  </div>
);
}
