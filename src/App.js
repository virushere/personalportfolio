import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import EducationAndWorkExperience from './components/EducationAndWorkExperience';
import GradientLine from './components/GradientLine';
import ProjectCarousel from './components/ProjectCarousel'
// import Work from './components/Work';
// import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
// import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <EducationAndWorkExperience />
      <GradientLine 
        height="4px" 
        colors={['#ff66c4', '#7b68ee', '#00bfff']} 
      />      
      <ProjectCarousel />
      <GradientLine 
        height="4px" 
        colors={['#00bfff', '#7b68ee', '#ff66c4']} 
      />    
      <Skills />
      <GradientLine 
        height="4px" 
        colors={['#ff66c4', '#7b68ee', '#00bfff']} 
      />   
      <Testimonials />
        {/* <Contact />  */}
      {/* Add Footer Here if needed */}
    </div>
  );
}

export default App;
