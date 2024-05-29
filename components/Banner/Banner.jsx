import Image from "next/image"

export default function Banner({source, className}) {
  return (
    <div className='header-container-wrapper_banner'>
      <Image src={source} alt="banniere" className={className} />
      <div className='header-container-wrapper_banner-container-title'>
        <h1 className='header-container-wrapper_banner-title'>Salut ! Je suis Priscilla, developpeuse front end React<br/> Bienvenue sur mon portefolio </h1>
      </div>
      <div className="header-container-wrapper_banner-scroll-downs">
        <div className="header-container-wrapper_banner-scroll-downs-mousey">
          <div className="header-container-wrapper_banner-scroll-downs-mousey-scroller"></div>
        </div>
      </div>
    </div>
  )
}
