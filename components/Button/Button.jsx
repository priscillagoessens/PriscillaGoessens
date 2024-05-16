import './_Button.scss'

export default function Button({link, text}) {
  return (
    <>
        <button className='custom-btn btn-4'>
        {link ? (
        <a href="#" download="proposed_file_name">
          {link}
        </a>
      ) : (
        <span >{text}</span>
      )}
      </button>
    </>
  )
}
