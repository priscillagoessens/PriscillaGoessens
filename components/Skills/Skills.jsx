import './_Skills.scss';
import Image from 'next/image';
import js from '@/public/assets/img/js.webp'
import react from '@/public/assets/img/react.webp'
import css from '@/public/assets/img/css.webp'
import sass from '@/public/assets/img/sass.webp'
import figma from '@/public/assets/img/figma.webp'
import html from '@/public/assets/img/html.webp'
import git from '@/public/assets/img/github.webp'
import Separator from '../Separator/Separator';

export default function Skills() {
  const elements = Array.from({ length: 3 });
  return (
    <>
    <Separator/>
    <div className='skills-section' id="skills">
        <div className='skills-section-container'>
            <div className='skills-section-container-title'>
                <h2>Compétences</h2>
            </div>
            <div className='skills-section-container-scroll' >
              {elements.map((_, index)=>(
                <div key={index} className='skills-section-container-scroll-img'>
                <Image className="skills-section-container-scroll-picto" src={html} width={100} height={100} alt="icone html" loading="lazy"/>
                <Image className="skills-section-container-scroll-picto" src={css} width={100} height={100} alt="icone css" loading="lazy"/>
                <Image className="skills-section-container-scroll-picto" src={js} width={100} height={100} alt="icone js" loading="lazy"/>
                <Image className="skills-section-container-scroll-picto" src={react} width={100} height={100} alt="icone react" loading="lazy"/>
                <Image className="skills-section-container-scroll-picto" src={sass} width={100} height={100} alt=" icone sass" loading="lazy"/>
                <Image className="skills-section-container-scroll-picto" src={figma} width={100} height={100} alt=" icone figma" loading="lazy"/>
                <Image className="skills-section-container-scroll-picto" src={git} width={100} height={100} alt="icone git" loading="lazy"/>
              </div>
              ))}  
            </div>
        </div>
    </div>
    <Separator/>
    </>
  )
}
