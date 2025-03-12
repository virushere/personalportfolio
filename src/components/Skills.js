import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaReact, FaTools } from 'react-icons/fa';

const Skills = () => {
  const skillSets = [
    {
      category: "Programming Languages",
      skills: ["C#", "Java", "Python", "SQL", "TypeScript", "JavaScript"],
      icon: <FaCode />
    },
    {
      category: "Databases",
      skills: ["MS SQL", "MY SQL", "Elasticsearch", "Firebase", "Mongo DB"],
      icon: <FaDatabase />
    },
    {
      category: "Web Technologies",
      skills: ["ASP .NET", "REST", "HTML", "CSS", "React", "Redux", "Node", "Express"],
      icon: <FaReact />
    },
    {
      category: "Tools/Frameworks",
      skills: ["Git", "Jira", "SourceTree", "Postman", "Bruno", "Eureka", "Docker", "Kafka", "Prometheus", "Grafana"],
      icon: <FaTools />
    }
  ];

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
  };

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skillSets.map((skillSet, index) => (
          <motion.div
            className="skill-category"
            key={index}
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
          >
            <h3>{skillSet.icon} {skillSet.category}</h3>
            <div className="skill-tags">
              {skillSet.skills.map((skill, idx) => (
                <motion.span
                  className="skill-tag"
                  key={idx}
                  variants={tagVariants}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;