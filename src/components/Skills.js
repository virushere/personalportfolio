import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaReact, FaTools, FaCloud } from 'react-icons/fa';

const Skills = () => {
  const skillSets = [
    {
      category: "Programming Languages",
      skills: ["C#", "Java", "Python", "SQL", "TypeScript", "JavaScript", "C", "C++"],
      icon: <FaCode />
    },
    {
      category: "Databases",
      skills: ["MS SQL", "PostgreSQL", "MySQL", "Elasticsearch", "Firebase", "MongoDB", "Hibernate"],
      icon: <FaDatabase />
    },
    {
      category: "Web Technologies",
      skills: ["Spring Boot", "ASP .NET", "HTML5", "CSS", "React", "Redux", "Node.js", "Express.js", "JSP", "XML", "JSON"],
      icon: <FaReact />
    },
    {
      category: "Tools/Frameworks",
      skills: ["Git", "Jira", "SourceTree", "Postman", "Bruno", "Eureka", "Docker", "Kafka", "Prometheus", "Grafana"],
      icon: <FaTools />
    },
    {
      category: "AWS Cloud Services",
      skills: ["EC2", "CloudWatch", "DynamoDB"],
      icon: <FaCloud />
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