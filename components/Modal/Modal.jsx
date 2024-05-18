import React from 'react';
import './_Modal.scss';

export default function Modal({title, detail,technos, closeModal }) {
  return (
    <div className="section-modal">
        <div className='section-modal-container' onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal}> X</button>
            <div className='section-modal-container-title'>{title}</div>
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
