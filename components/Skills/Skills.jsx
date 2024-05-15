import './_Skills.scss';
import Image from 'next/image';
import js from '@/public/assets/img/js.png'
import react from '@/public/assets/img/React.png'
import css from '@/public/assets/img/css.png'
import sass from '@/public/assets/img/sass.svg'
import figma from '@/public/assets/img/figma.png'
import html from '@/public/assets/img/html.png'
import git from '@/public/assets/img/github.png'

export default function Skills() {
  const elements = Array.from({ length: 3 });
  return (
    <>
    <div className='line'></div>
    <div className='skills-section' id="skills">
        <div className='skills-section-container'>
            <div className='skills-section-container-title'>
                <h2>Compétences</h2>
            </div>
            <div className='skills-section-container-scroll' >
              {elements.map((_, index)=>(
                <div key={index} className='skills-section-container-scroll-img'>
                <Image className="skills-section-container-scroll-picto" src={html} width={100} height={100}/>
                <Image className="skills-section-container-scroll-picto" src={css} width={100} height={100}/>
                <Image className="skills-section-container-scroll-picto" src={js} width={100} height={100}/>
                <Image className="skills-section-container-scroll-picto" src={react} width={100} height={100}/>
                <Image className="skills-section-container-scroll-picto" src={sass} width={100} height={100}/>
                <Image className="skills-section-container-scroll-picto" src={figma} width={100} height={100}/>
                <Image className="skills-section-container-scroll-picto" src={git} width={100} height={100}/>
              </div>
              ))}  
            </div>
        </div>
    </div>
    </>
  )
}
