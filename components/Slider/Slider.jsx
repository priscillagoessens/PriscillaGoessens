"use client"
import './_Slider.scss';
import projects from '@/app/datas/projects.json'
import { useState } from 'react';

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
      <h2>Projets</h2>
      <div className="slider-section-container">
        <button onClick={goToPrevious} className="carousel-button prev-button">❮</button>
        <div className="slider-section-container-slide">
        <div className='card'>
            <img
              className="slider-section-container-slide-img"
              src={projects[currentIndex].cover}
              alt={projects[currentIndex].title}
            />
            <div>
              <h3 className="slider-section-container-slide-title">
                {projects[currentIndex].title}
              </h3>

            </div>
          </div>
        </div>
        <button onClick={goToNext} className="carousel-button next-button">❯</button>
      </div>
    </div>
  )
}
