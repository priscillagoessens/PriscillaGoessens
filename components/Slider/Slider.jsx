"use client"
import './_Slider.scss';
import projects from '@/app/datas/projects.json'
import { useState } from 'react';
import Button from '../Button/Button';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider-section" id="projects">
      <div className='slider-section-container'>
        <div className='slider-section-container-title'>
          <h2>Projets</h2>
        </div>
      <div className="slider-section-container-carousel">
        <button onClick={goToPrevious} className="carousel-button">❮</button>
        <div className='slider-section-container-carousel-slide'>
          <div className='slider-section-container-carousel-slide-wrapper'>
          <img
            className="slider-section-container-carousel-slide-wrapper-img"
            src={projects[currentIndex].cover}
            alt={projects[currentIndex].title}
            />
            </div>
          <div className='slider-section-container-carousel-slide-content'>
            <h3 className="slider-section-container-carousel-slide-content-title">
              {projects[currentIndex].title}
            </h3>
            <p className="slider-section-container-carousel-slide-content-description">{projects[currentIndex].description}</p>
            <div className="slider-section-container-carousel-slide-content-buttons">
            {projects[currentIndex].technos.map((tech, index) => (
                  <Button key={index} className="tech-button" text={tech.value}>
                    
                  </Button>
                ))}
              </div>
          </div>
        </div>
        
        <button onClick={goToNext} className="carousel-button">❯</button>
      </div>
      </div>
    </div>
  )
}
