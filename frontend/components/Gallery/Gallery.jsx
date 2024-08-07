"use client";
import './_Gallery.scss';
// import projects from '@/app/datas/projects.json'
import Modal from '../Modal/Modal';
import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import axios from "axios"

export default function Gallery() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [projets , setProjets]= useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  
  useEffect(() => {
    const fetchProjets = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/projets');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des projets');
        }
        const data = await response.json();
        console.log('Données reçues:', data); // Vérifiez la structure des données ici
        if (Array.isArray(data)) {
          setProjets(data);
        } else {
          console.error('Les données reçues ne sont pas un tableau.');
          setError('Erreur lors de la récupération des projets');
        }
      } catch (err) {
        console.error('Erreur lors de la récupération des projets :', err);
        setError('Erreur lors de la récupération des projets');
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchProjets();
  }, []);

  return (
    <div className='section-project background' id="projects">
      <h2 className='title'>Mes projets</h2>
      <div className='section-project-gallery'>
        {projets.slice(0, showMore ? projets.length : 6).map((projet, index) => (
          <div key={index} className='section-project-gallery-container'>
            <img 
              className="section-project-gallery-container-img openModal"
              src={projet.cover}
              alt={projet.title}
              loading="lazy"
            />
            <div className='section-project-gallery-container-text'>
              <span>{projet.title}</span>
            </div>
            <div className='section-project-gallery-container-detail'>
              <div className='section-project-gallery-container-detail-title title'>{projet.title}</div>
              <div>{projet.raccourci}</div>
              <div className='section-project-gallery-container-detail-context'>{projet.context}</div>
              <Button onClick={() => openModal(projet)}>Plus d'info <FontAwesomeIcon icon={faArrowRight} /></Button>

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
