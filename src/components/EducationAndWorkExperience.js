import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Education.css";

function EducationAndWorkExperience() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (index) => {
    setSelectedItem(selectedItem === index ? null : index);
  };

  const timelineItems = [
    {
      position: "left",
      title: "Software Development Engineer Intern",
      location: "at Amazon, Seattle",
      period: "Sep 2025 - Dec 2025",
      highlights: [
        "Built a multi-threaded Java backend service on DynamoDB that ingests feedback from 45+ AI services.",
        "Shipped a dual-write architecture behind feature flags, with automated monitoring to catch partial-write failures.",
        "Set up 50+ CloudWatch alarms on latency, availability, and error rates, and reached 95% test coverage with JUnit and Mockito.",
      ],
    },
    {
      position: "right",
      title: "Masters in Information Systems",
      location: "at Northeastern University, Boston",
      period: "Sep 2024 - Aug 2026",
    },
    {
      position: "left",
      title: "Software Engineer",
      location: "at Adapty - An Apexon Company, Mumbai",
      period: "Jun 2022 - May 2024",
      highlights: [
        "Built .NET MVC backends and REST APIs for 10+ enterprise SaaS clients.",
        "Added batch pipelines and async cron jobs that cut system latency by 25%.",
        "Reworked Elasticsearch queries and re-indexed data, cutting search latency by 18%.",
      ],
    },
    {
      position: "right",
      title: "BE in Computer Science and Engineering",
      location: "at Mumbai University, Mumbai",
      period: "Jun 2018 - May 2022",
    },
    {
      position: "left",
      title: "Web Development Intern",
      location: "at Sparks Foundation, Singapore",
      period: "Sep 2021 - Oct 2021",
    },
  ];

  return (
    <section id="education-and-work-experience" className="education">
      <div className="education-container">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span>Education</span>
          <span className="work-experience-text"> and Work Experience</span>
        </motion.h2>
        <div className="timeline">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${item.position}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <motion.div
                className="timeline-content"
                layoutId={`timeline-content-${index}`}
                onClick={() => handleClick(index)}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-location">{item.location}</p>
                <p className="timeline-period">{item.period}</p>
              </motion.div>
              <motion.div
                className="timeline-dot"
                whileHover={{ scale: 1.5 }}
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedItem !== null && (
        <motion.div
          className="expanded-view"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            layoutId={`timeline-content-${selectedItem}`}
            className="expanded-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="timeline-title">
              {timelineItems[selectedItem].title}
            </h3>
            <p className="timeline-location">
              {timelineItems[selectedItem].location}
            </p>
            <p className="timeline-period">
              {timelineItems[selectedItem].period}
            </p>
            {timelineItems[selectedItem].highlights && (
              <ul className="expanded-description">
                {timelineItems[selectedItem].highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

export default EducationAndWorkExperience;
