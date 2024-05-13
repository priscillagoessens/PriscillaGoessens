import Details from '../Details/Details'
import Picture from '../Picture/Picture'
import avatar from  '@/public/assets/img/avatar.png'
import './_About.scss'

export default function About() {
  return (
    <div className='about-section'>
      <div className='about-section-container'>
        <Details className="about-section-container-description"/>
        <Picture source={avatar} className="about-section-container-image" classNameImg="about-section-container-image_size"/>
      </div>
    </div>
  )
}
