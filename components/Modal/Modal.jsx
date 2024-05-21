import React from 'react';
import './_Modal.scss';

export default function Modal({cover,title, detail,technos, closeModal }) {
  return (
    <div className="section-modal">
        <div className='section-modal-container' onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal}> X</button>
            <div className='section-modal-container-cover-container'>
              <img src={cover} alt={title} className='section-modal-container-cover-container-img' loading="lazy"/>
            </div>
            <h3 className='section-modal-container-title'>{title}</h3>
            <div className='section-modal-container-body'>{detail}</div>
            <ul>
                {technos.map((techno, index) => (
                    <li key={index}>{techno.value}</li>
                ))}
            </ul>
        </div>
      
    </div>
  )
}
