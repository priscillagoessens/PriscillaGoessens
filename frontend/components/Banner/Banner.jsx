import './_Banner.scss'
export default function Banner() {
  return (
    <div className=' banner-container'>
      <div className=' banner-container-title'>
        <h1 className=' banner-container-title-texte'>Bienvenue,<br/> je suis Priscilla, développeuse front end React </h1>
      </div>
      <div className=" banner-container-scroll-downs">
        <div className=" banner-container-scroll-downs-mousey">
          <div className=" banner-container-scroll-downs-mousey-scroller"></div>
        </div>
      </div>
    </div>
  )
}
