import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './ProjectCarousel.css';
import rapidAid from './../images/Project Images/RapidAid.png'
import personalPortfolio from './../images/Project Images/PortfolioWebsite2940x1474.png'
import eventify from './../images/Project Images/Eventify958x666.png'
import ecommerce from './../images/Project Images/E-Commerce Application Microservices2004x896.png'

const ProjectCarousel = () => {
  const handleDragStart = (e) => e.preventDefault();
  
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
      image:  rapidAid,
      demoLink: "https://www.ijraset.com/research-paper/rapid-aid-android-application-for-emergency-services",
      codeLink: "https://github.com/virushere/RapidAid"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Personal portfolio website built with React and CSS animations",
      image: personalPortfolio,
      demoLink: "https://yashvyas-portfolio.netlify.app/",
      codeLink: "https://github.com/virushere/personalportfolio"
    },
    {
      id: 4,
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

  const items = projects.map(project => (
    <div className="project-card" key={project.id} onDragStart={handleDragStart} role="presentation">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-links">
          {/* For Rapid Aid: Show "Research Paper" and "View Code" */}
          {project.id === 2 && (
            <>
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Research Paper</a>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">View Code</a>
            </>
          )}
          
          {/* For Personal Portfolio: Show "Live Demo" and "View Code" */}
          {project.id === 3 && (
            <>
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">View Code</a>
            </>
          )}
          
          {/* For other projects: Show only "View Code" */}
          {(project.id === 1 || project.id === 4) && (
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="single-link">View Code</a>
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
        renderPrevButton={() => <div className="custom-arrow prev-arrow">&#8592;</div>}
        renderNextButton={() => <div className="custom-arrow next-arrow">&#8594;</div>}
        disableDotsControls={false}
      />
    </section>
  );
  
};

export default ProjectCarousel;
