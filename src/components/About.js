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
        strings: ['Software Engineer', 'Software Developer', 'Full Stack Software Engineer'],
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
          <p>I'm Yash Vyas, a software developer dedicated to making the world a better place one line of code at a time.</p>
          <button
            className="meeting-btn"
            onClick={() =>
              window.open(
                "https://outlook.office.com/bookwithme/user/f2b1606ca6ac412a913b0c4a74bfb085@northeastern.edu?anonymous&ep=plink",
                "_blank"
              )
            }
          >
            Book Meeting
          </button>        </div>
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
