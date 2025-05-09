import './_Button.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'
//href="Priscilla_Goessens_CV.pdf"


    export default function Button({ link, children, onClick }) {
      return (
        <button className='custom-btn' onClick={onClick}>
      {link ? (
        <a href={link} download className="link-button">
          {children}
          <FontAwesomeIcon icon={faArrowCircleRight} />
        </a>
      ) : (
        <p>{children}</p>
      )}
    </button>
      );
    }