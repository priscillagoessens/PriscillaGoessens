import Image from "next/image"
import './_Slider.scss';
import projects from '@/app/datas/projects.json'
import next from '@/public/assets/img/arrow-next.svg'
import prev from '@/public/assets/img/arrow-prev.svg'

export default function Slider() {

  return (
<div className="slider-section">
  <div className="slider-section-container">
  <img src={prev}/>
    {projects.map((project)=>(
        <div className="slider-section-container-slide">
            
            <Image src={project.cover} 
            width={0}
            height={0}
            sizes="100vw" // Laissez la hauteur automatique pour maintenir le ratio d'aspect
            layout="responsive" // Définissez le mode de mise en page sur responsive pour permettre les tailles en pourcentage
            objectFit="cover"/>
            <h3 className="slider-section-container-slide-title">{project.title}</h3>
            
    </div>
    ))}
    <img src={next}/>
  </div>
</div>
  )
}
