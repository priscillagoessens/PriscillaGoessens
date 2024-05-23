import './_Button.scss'
import Link from 'next/link'

export default function Button({link, text}) {
  return (
    <>
        <button className='custom-btn'>
          {link ? (
            <Link href="Priscilla-Goessens.pdf" target="_blank" download>
            {link}
            </Link>
          ) : (
            <span >{text}</span>
          )}
      </button>
    </>
  )
}
