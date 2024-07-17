import './_Button.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'

export default function Button({link, text}) {
  return (
    <>
        <button className='custom-btn'>
          {link ? (
            <Link href="Priscilla_Goessens_CV.pdf" target="_blank" download>
            {link}
            <span><FontAwesomeIcon icon={faArrowCircleRight} /></span>
            
            
            </Link>
          ) : (
            <span >{text}</span>
          )}
      </button>
    </>
  )
}
