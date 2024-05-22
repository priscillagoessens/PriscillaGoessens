import React from 'react';
import './_Modal.scss';

export default function Modal({cover, title, detail, technos, gitPage, closeModal }) {
  return (
    <div className="section-modal" onClick={closeModal}>
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
            <a className='section-modal-container-link' href={gitPage} target='_blank'>Lien vers Github</a>
        </div>
      
    </div>
  )
}
