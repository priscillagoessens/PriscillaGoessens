"use client";
import './_Gallery.scss';
import projects from '@/app/datas/projects.json'
import Modal from '../Modal/Modal';
import { useState } from 'react';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

export default function Gallery() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div className='section-project background' id="projects">
      <h2 className='title'>Mes projets</h2>
      <div className='section-project-gallery'>
        {projects.slice(0, showMore ? projects.length : 6).map((project, index) => (
          <div key={index} className='section-project-gallery-container'>
            <img 
              className="section-project-gallery-container-img openModal"
              src={project.cover}
              alt={project.title}
              loading="lazy"
            />
            <div className='section-project-gallery-container-text'>
              <span>{project.title}</span>
            </div>
            <div className='section-project-gallery-container-detail'>
              <div className='section-project-gallery-container-detail-title title'>{project.title}</div>
              <div>{project.raccourci}</div>
              <div className='section-project-gallery-container-detail-context'>{project.context}</div>
              <Button onClick={() => openModal(project)}>Plus d'info <FontAwesomeIcon icon={faArrowRight} /></Button>

            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <Modal 
          cover={selectedProject.cover}
          title={selectedProject.title} 
          detail={selectedProject.description} 
          technos={selectedProject.technos} 
          gitPage={selectedProject.git}
          link={selectedProject.link}
          closeModal={closeModal}
        />
      )}
      <Button onClick={toggleShowMore}>
        {showMore ? 'Voir moins de projets' : 'Voir plus de projets'}
      </Button>
    </div>
  )
}
