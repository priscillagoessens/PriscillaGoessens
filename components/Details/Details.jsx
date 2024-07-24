
import Image from 'next/image'
import Button from '../Button/Button'
import Link from 'next/link';

export default function Details({sectionStyle, titleStyle, contentStyle, iconContainerStyle, iconGit, linkedin}) {
  const link = "Voir mon Cv"
    return (
      <div className={sectionStyle} id="description">
        <div className={titleStyle}>
          <h2>A propos de moi</h2>
        </div>
        <p className={contentStyle}>
        Développeuse front-end basée dans la métropole Lilloise, passionnée par la création web. 
        J'utilise <strong>HTML</strong>, <strong>CSS</strong>, <strong>Sass</strong> et <strong>JavaScript</strong> pour concevoir des interfaces esthétiques et fonctionnelles. J'utilise des technologies modernes comme <strong>React</strong>, <strong>Redux</strong>, <strong>Next.js</strong>, et <strong>Tailwind</strong>, garantissant des performances optimales et une bonne maintenabilité des applications.
        J'ai également des connaissances avec les CMS, notament <strong>Wordpress</strong> (<strong>WooCommerce</strong>) ou j'ai pu participer a la personnalisation de themes.
        <br/>Je recherche activement des missions entant que salarié indépendant pour collaborer avec des entreprises dynamiques et des entrepreneurs ambitieux. Si vous avez un projet en tête ou si vous souhaitez simplement discuter de vos idées, n'hésitez pas à me contacter. Ensemble, nous pouvons donner vie à vos projets web ! ✨
        </p>
        <div className={iconContainerStyle}>
        <Button link="Priscilla_Goessens_CV.pdf">
          Mon CV
        </Button>
          <Link href="https://github.com/priscillagoessens" target="_blank">
            <Image src={iconGit} alt="GitHub" />
          </Link>
          <Link href="https://www.linkedin.com/in/priscilla-goessens/" target="_blank">
            <Image src={linkedin} alt="linkedin" />
          </Link>
        </div>
      </div>
    )
  }