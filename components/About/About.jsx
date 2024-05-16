import Details from '../Details/Details'
import Picture from '../Picture/Picture'
import avatar from  '@/public/assets/img/avatar.png'
import iconGit from '@/public/assets/img/github-black.png'
import './_About.scss'

export default function About() {
  return (
    <div className='about-section'>
      <div className='about-section-container'>
        <Details sectionStyle="about-section-container-description" 
                  titleStyle="about-section-container-description-title"
                  contentStyle="about-section-container-description-content"
                  iconContainerStyle="about-section-container-description-iconContainer"
                  iconGit={iconGit}/>
        <Picture source={avatar} 
                  className="about-section-container-image" 
                  classNameImg="about-section-container-image_size"/>
      </div>
    </div>
  )
}
