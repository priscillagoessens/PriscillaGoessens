'use client';
import './_Slider.scss';
import projects from '@/app/datas/projects.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Carousel() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
<div className="slider-section">
  <div className="slider-section-container">
    <h2>Projets</h2>
    <div  className="slider-section-container-slide">
      <Slider {...settings}>
        {projects.map((project, index)=>(
          <div key={index}>
              <img className="slider-section-container-slide-img" src={project.cover} alt={project.title} />
              <h3 className="slider-section-container-slide-title">{project.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  </div>
</div>
  )
}
