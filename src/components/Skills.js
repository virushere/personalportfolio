import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaRobot, FaDatabase, FaExchangeAlt, FaCloud, FaChartLine, FaReact, FaTools } from 'react-icons/fa';

const Skills = () => {
  const skillSets = [
    {
      category: "Languages",
      skills: ["Java", "Python", "Go", "TypeScript", "JavaScript", "C#", "SQL"],
      icon: <FaCode />
    },
    {
      category: "Backend",
      skills: ["Spring Boot", "Spring Security", "FastAPI", "ASP.NET", "Node.js", "Express", "Hibernate"],
      icon: <FaServer />
    },
    {
      category: "AI / LLM",
      skills: ["RAG", "MCP Servers", "Agentic Orchestration", "pgvector", "Embeddings", "Qdrant", "Llama", "Claude Code"],
      icon: <FaRobot />
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "SQL Server", "MySQL", "MongoDB", "Redis", "Elasticsearch", "DynamoDB", "DuckDB"],
      icon: <FaDatabase />
    },
    {
      category: "Messaging",
      skills: ["Kafka", "RabbitMQ", "Redpanda"],
      icon: <FaExchangeAlt />
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS (EC2, VPC, DynamoDB, CloudWatch)", "Terraform", "Docker", "GitHub Actions"],
      icon: <FaCloud />
    },
    {
      category: "Observability",
      skills: ["Prometheus", "Grafana", "Loki", "OpenTelemetry", "Tempo", "Micrometer"],
      icon: <FaChartLine />
    },
    {
      category: "Frontend",
      skills: ["React", "Redux", "Vue.js", "Tailwind CSS", "Material-UI"],
      icon: <FaReact />
    },
    {
      category: "Testing & Tools",
      skills: ["TestContainers", "Postman", "Bruno", "Git"],
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