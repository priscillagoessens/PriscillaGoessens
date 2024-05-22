"use client"
import React, { useState } from 'react';
import './_Form.scss';
import Button from '../Button/Button';

export default function Form() {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
          setStatus('pending');
          setError(null);
          const myForm = event.target;
          const formData = new FormData(myForm);

          const res = await fetch('/__forms.html', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: new URLSearchParams(formData).toString()
          });
          if (res.status === 200) {
              setStatus('ok');
          } else {
              setStatus('error');
              setError(`${res.status} ${res.statusText}`);
          }
      } catch (e) {
          setStatus('error');
          setError(`${e}`);
      }
  };

  return (
    <div className="section-contact" id="contact">
      <div className='section-contact-container-title'>
        <h2>Contactez-moi</h2>
      </div>
      <div className="section-contact-container">
      <form 
        className="section-contact-container-form" 
        name="contact" 
        onSubmit={handleFormSubmit}
      >
        <input type="hidden" name="contact" value="contact" />
        <div className="section-contact-container-form-group">
          <label htmlFor="name">Nom:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="section-contact-container-form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="section-contact-container-form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            required
          />
        </div>
        <Button type="submit" text="Envoyer"></Button>
        {status === 'ok' && (
                        <div className="alert alert-success">
                            <SuccessIcon />
                            Submitted!
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="alert alert-error">
                            <ErrorIcon />
                            {error}
                        </div>
                    )}
      </form>
    </div>
  </div>
);
}

function SuccessIcon() {
  return (
      <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
      >
          <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
      </svg>
  );
}
function ErrorIcon(success) {
  return (
      <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
      >
          <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
      </svg>
  );
}
