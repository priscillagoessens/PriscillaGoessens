import './_Modal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function Modal({cover, title, detail, technos, gitPage, closeModal, link }) {
  return (
    <div className="section-modal" onClick={closeModal}>
        <div className='section-modal-container' onClick={(e) => e.stopPropagation()}>
            <button className='section-modal-container-close' onClick={closeModal}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <div className='section-modal-container-cover-container'>
              <img src={cover} alt={title} className='section-modal-container-cover-container-img' loading="lazy"/>
            </div>
            <h3 className='section-modal-container-title'>{title}</h3>
            <div className='section-modal-container-body'>{detail}</div>
            <ul className='section-modal-container-list'>
                {technos.map((techno, index) => (
                    <li key={index} className='section-modal-container-list-items'>{techno.value}</li>
                ))}
            </ul>
            {gitPage && 
                <a className='section-modal-container-link' href={gitPage} target='_blank'>Lien vers Github 
                <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                </a>
              } 
              {link && 
                <a className='section-modal-container-link' href={link} target='_blank'>Site web 
                <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                </a>
              }          
        </div>
    </div>
  )
}
