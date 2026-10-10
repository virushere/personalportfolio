import React, { useEffect, useRef } from 'react';
import './About.css';
import profileImage from './../images/personals/DP.jpg';
import Typewriter from 'typewriter-effect/dist/core';

function About() {
  const typewriterRef = useRef(null);

  useEffect(() => {
    // Initialize typewriter after component mounts
    if (document.getElementById('job-title')) {
      typewriterRef.current = new Typewriter('#job-title', {
        strings: ['Software Engineer', 'Backend Engineer', 'AI Systems Engineer'],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        delay: 100
      });
    }

    // Cleanup function to destroy typewriter instance when component unmounts
    return () => {
      if (typewriterRef.current) {
        typewriterRef.current.stop();
      }
    };
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-text">
          <h1>Hi 👋, I'm a</h1>
          <h2 className="gradient-text">Yash Vyas</h2>
          <h3 id="job-title">Software Engineer</h3>
          <p className="about-headline">I build reliable backends and AI systems.</p>
          <p>MS in Information Systems at Northeastern. Former SDE Intern at Amazon and Software Engineer at Apexon for two years. I build Spring Boot microservices, event-driven systems, and RAG and MCP-based AI tools.</p>
          <div className="hero-buttons">
            <a className="meeting-btn" href="mailto:vyas.yash@northeastern.edu">
              Email Me
            </a>
          </div>
        </div>
        <div className="about-image-container">
          <div className="image-frame">
            <div className="plus-sign">+</div>
            <img src={profileImage} alt="Yash Vyas" />
            <div className="cube"></div>
            <div className="zigzag"></div>
            <div className="dots-container">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
