import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './ProjectCarousel.css';

import rapidAid from './../images/Project Images/RapidAid.png';
import roomieImage from './../images/Project Images/Roomie.gif';              
import personalPortfolio from './../images/Project Images/PortfolioWebsite2940x1474.png';
import eventify from './../images/Project Images/Eventify958x666.png';
import ecommerce from './../images/Project Images/E-Commerce Application Microservices2004x896.png';

const projects = [
  {
    id: 1,
    title: "CartVista",
    description: "Microservices Application Showcasing Diverse Tech Stacks",
    image: ecommerce,
    demoLink: "",
    codeLink: "https://github.com/virushere/Microservice-E-Commerce-Application"
  },
  {
    id: 2,
    title: "Rapid Aid",
    description: "Android Application for Disaster Management",
    image: rapidAid,
    demoLink: "https://www.ijraset.com/research-paper/rapid-aid-android-application-for-emergency-services",
    codeLink: "https://github.com/virushere/RapidAid"
  },
  {
    id: 3,
    title: "Roomie",
    description: "Fullstack SpringBoot Application for Roommate and Apartment Hunting",
    image: roomieImage,
    demoLink: "",
    codeLink: "https://github.com/virushere/Roomie"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Personal portfolio website built with React and CSS animations",
    image: personalPortfolio,
    demoLink: "https://yashvyas-portfolio.netlify.app/",
    codeLink: "https://github.com/virushere/personalportfolio"
  },
  {
    id: 5,
    title: "Eventify",
    description: "Web Application for Event Management",
    image: eventify,
    demoLink: "",
    codeLink: "https://github.com/virushere/Eventify.git"
  }
];

const responsive = {
  0: { items: 1 },
  768: { items: 2 },
  1024: { items: 3 },
};

const ProjectCarousel = () => {
  const handleDragStart = e => e.preventDefault();

  const items = projects.map(({ id, title, description, image, demoLink, codeLink }) => (
    <div className="project-card" key={id} onDragStart={handleDragStart} role="presentation">
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {id === 2 ? 'Research Paper' : 'Live Demo'}
            </a>
          )}
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={demoLink ? '' : 'single-link'}
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  ));

  return (
    <section id="projects" className="project-carousel-container">
      <h2>My Projects</h2>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay
        autoPlayInterval={3000}
        infinite
        keyboardNavigation
        renderPrevButton={() => <div className="custom-arrow prev-arrow">‹</div>}
        renderNextButton={() => <div className="custom-arrow next-arrow">›</div>}
        disableDotsControls={false}
      />
    </section>
  );
};

export default ProjectCarousel;
