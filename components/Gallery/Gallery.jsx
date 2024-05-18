"use client";
import './_Gallery.scss';
import projects from '@/app/datas/projects.json'
import Modal from '../Modal/Modal';
import { useState } from 'react';

export default function Gallery() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };
  return (
    <div className='section-project' id="projects">
      <h2>Mes projets</h2>
      <div className='section-project-gallery'>
          {projects.map((project, index) => (
              <div key={index} className='section-project-gallery-container'  onClick={() => openModal(project)}>
                    <img 
                      className="section-project-gallery-container-img openModal"
                      src={project.cover}
                      alt={project.title}
                    />
                    <div className='section-project-gallery-container-text'>
                      <span>{project.title}</span>
                    </div>
                    {selectedProject && (
                      <Modal 
                        title={selectedProject.title} 
                        detail={selectedProject.description} 
                        technos={selectedProject.technos} 
                        closeModal={closeModal}
                      />
                    )}
              </div>
          ))}
      </div>
    </div>
  )
}
