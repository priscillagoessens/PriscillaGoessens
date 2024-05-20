"use client"
import './_Form.scss';
import Button from '../Button/Button';

export default function Form() {
  return (
    <div className="section-contact" id="contact">
      <div className='section-contact-container-title'>
        <h2>Contactez-moi</h2>
      </div>
      <div className="section-contact-container">
      <form 
      className="section-contact-container-form" 
      onSubmit={handleSubmit} 
      name="contact" 
      method="POST" 
      data-netlify="true"
      action="/success">
        <input type="hidden" name="form-name" value="contact" />
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
      </form>
    </div>
  </div>
);
}
