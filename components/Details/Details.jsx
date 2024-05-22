
import Image from 'next/image'
import Button from '../Button/Button'
import Link from 'next/link';

export default function Details({sectionStyle, titleStyle, contentStyle,iconContainerStyle, iconGit}) {
  const link= "Mon Cv"
    return (
      <div className={sectionStyle} id="description">
        <div className={titleStyle}>
          <h2>A propos de moi</h2>
        </div>
        <p className={contentStyle}>
        Je suis une développeuse front-end basée dans la métropole Lilloise, passionnée par la création web. 
        J'utilise <strong>HTML</strong>, <strong>CSS</strong>, <strong>Sass</strong> et <strong>JavaScript</strong> pour concevoir des interfaces esthétiques et fonctionnelles, je développe des applications web dynamiques en <strong>React JS</strong>. 
        Actuellement en formation diplômante de Développeur Web chez OpenClassrooms, je continue à approfondir mes compétences pour offrir des solutions web innovantes et performantes.
        </p>
        <div className={iconContainerStyle}>
          <Button link={link}/>
          <Link href="https://github.com/priscillagoessens" target="_blank">
            <Image src={iconGit} alt="GitHub" />
          </Link>
        </div>
      </div>
    )
  }