import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Education.css";
import amazonPhoto from "./../images/personals/amazon-internship.jpg";

function EducationAndWorkExperience() {
  const [selectedItem, setSelectedItem] = useState(null);

  const PREVIEW_COUNT = 2;

  const handleClick = (index) => {
    if (!timelineItems[index].highlights) return;
    setSelectedItem(selectedItem === index ? null : index);
  };

  // Close on Escape and lock page scroll while the details are open
  useEffect(() => {
    if (selectedItem === null) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelectedItem(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

  const timelineItems = [
    {
      position: "left",
      title: "Software Development Engineer Intern",
      location: "at Amazon, Seattle",
      period: "Sep 2025 - Dec 2025",
      image: amazonPhoto,
      imageAlt: "Yash next to the Amazon logo during his internship",
      highlights: [
        "Built a multi-threaded Java backend service on DynamoDB that ingests feedback from 45+ AI services.",
        "Set up CloudWatch dashboards and 50+ alarms tracking latency, availability, and error rates.",
        "Shipped a dual-write architecture behind feature flags, with automated monitoring to catch partial-write failures.",
        "Reached 95% test coverage with JUnit and Mockito unit and integration tests in CI/CD, with code reviews.",
        "Provisioned CloudFormation infrastructure with blue-green and canary deployments for zero-downtime releases.",
        "Used Claude Code to speed up prototyping and documentation, finishing multi-day tasks in hours.",
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
        "Improved UI responsiveness by 30% with TypeScript, React, and Redux.",
        "Built user lifecycle APIs that raised customer engagement by 65%.",
        "Integrated enterprise ERP systems for real-time pricing, inventory, and orders, removing duplicate data entry.",
        "Reached 80% unit-test coverage with xUnit.",
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
            >
              <motion.div
                className={`timeline-content${item.highlights ? " clickable" : ""}`}
                layoutId={`timeline-content-${index}`}
                onClick={() => handleClick(index)}
                whileHover={{ scale: 1.03 }}
                whileTap={item.highlights ? { scale: 0.98 } : undefined}
              >
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-location">{item.location}</p>
                <p className="timeline-period">{item.period}</p>
                {item.highlights && (
                  <>
                    <ul className="timeline-highlights">
                      {item.highlights.slice(0, PREVIEW_COUNT).map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    {item.highlights.length > PREVIEW_COUNT && (
                      <button
                        type="button"
                        className="view-more-btn"
                        aria-haspopup="dialog"
                      >
                        View all {item.highlights.length} highlights
                        <span className="view-more-arrow" aria-hidden="true">→</span>
                      </button>
                    )}
                  </>
                )}
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
            role="dialog"
            aria-modal="true"
            aria-labelledby="expanded-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="expanded-close"
              aria-label="Close"
              onClick={() => setSelectedItem(null)}
            >
              ×
            </button>
            {timelineItems[selectedItem].image && (
              <img
                className="expanded-image"
                src={timelineItems[selectedItem].image}
                alt={timelineItems[selectedItem].imageAlt}
              />
            )}
            <h3 id="expanded-title" className="timeline-title">
              {timelineItems[selectedItem].title}
            </h3>
            <p className="timeline-location">
              {timelineItems[selectedItem].location}
            </p>
            <p className="timeline-period">
              {timelineItems[selectedItem].period}
            </p>
            <ul className="expanded-description">
              {timelineItems[selectedItem].highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="expanded-hint">Press Esc or click outside to close</p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

export default EducationAndWorkExperience;
