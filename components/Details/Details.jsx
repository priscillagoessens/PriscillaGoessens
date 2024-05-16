
import Image from 'next/image'
import Button from '../Button/Button'

export default function Details({sectionStyle, titleStyle, contentStyle,iconContainerStyle, iconGit}) {
  const link= "Mon Cv"
    return (
      <div className={sectionStyle} id="description">
        <div className={titleStyle}>
          <h2>A propos de moi</h2>
        </div>
        <p className={contentStyle}>
          Développeuse Front End passionnée par la création web. <br/>
          Je maîtrise l'HTML, CSS, Sass et javascript pour concevoir des interfaces esthétiques et fonctionnelles. J'aime également développer des applications web dynamiques et réactives en React Js.
          Actuellement engagée dans une formation diplômante en Développement Web chez OpenClassrooms, je consolide mes connaissances pour continuer à grandir.
        </p>
        <div className={iconContainerStyle}>
          <Button link={link}/>
          <a href="https://github.com/priscillagoessens" target="_blank">
            <Image src={iconGit} alt="GitHub" />
          </a>
        </div>
      </div>
    )
  }