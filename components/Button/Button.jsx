import './_Button.scss'

export default function Button({link, text}) {
  return (
    <>
        <button className='custom-btn btn-4'>
        {link ? (
        <a href="Priscilla-Goessens.pdf" target="_blank" download>
          {link}
        </a>
      ) : (
        <span >{text}</span>
      )}
      </button>
    </>
  )
}
