import React, { useCallback, useEffect, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './ProjectCarousel.css';
import { FaGlobeAmericas, FaGraduationCap, FaHeartbeat } from 'react-icons/fa';

import homeFinderImage from './../images/Project Images/home-finder.jpg';
import cartVistaImage from './../images/Project Images/E-Commerce Application Microservices2004x896.png';
import roomieImage from './../images/Project Images/roomie.jpg';
import eventifyImage from './../images/Project Images/Eventify958x666.png';
import rapidAidImage from './../images/Project Images/RapidAid.png';

// Projects without a screenshot get a gradient banner with an icon instead
const banners = {
  conflict: { icon: <FaGlobeAmericas />, gradient: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)' },
  courseReg: { icon: <FaGraduationCap />, gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)' },
  healthPlan: { icon: <FaHeartbeat />, gradient: 'linear-gradient(135deg, #ec4899 0%, #f97316 100%)' },
};

const projects = [
  {
    id: 1,
    title: "Home-Finder",
    image: homeFinderImage,
    imagePosition: "center top",
    period: "Jul 2026 – Sep 2026",
    description: "A Boston rental aggregator with 15K+ listings from 80+ brokers. It has a 950K-record ETL pipeline, a dedup engine with 99% accuracy, pgvector RAG over tenant law, and agentic LLM orchestration.",
    tech: ["React", "TypeScript", "Vite", "Node.js", "PostgreSQL", "pgvector"],
    demoLink: "https://home-finder-gules.vercel.app/",
    codeLink: "https://github.com/vyasyash-neu/Home-Finder",
    privateRepo: true
  },
  {
    id: 2,
    title: "CartVista",
    image: cartVistaImage,
    imagePosition: "left top",
    period: "Feb 2026 – Jun 2026",
    description: "A 7-service polyglot e-commerce platform built on Spring Boot and FastAPI. It uses a Kafka transactional outbox for reliable events, circuit breakers, and three-pillar observability, with 235 tests.",
    tech: ["Java", "Spring Boot", "FastAPI", "Kafka", "MongoDB", "PostgreSQL", "Redis", "Grafana"],
    demoLink: "",
    codeLink: "https://github.com/MicroServices-Project-Org/Python-Microservices"
  },
  {
    id: 3,
    title: "Real-Time Conflict Intelligence Platform",
    banner: banners.conflict,
    period: "Mar 2026 – Apr 2026",
    description: "Concurrent Go ingestion of 13K+ geolocated events, with Llama classification and a 7-tool MCP server that lets LLMs query the data through a FastAPI RAG service.",
    tech: ["Go", "Python", "FastAPI", "MCP", "RAG", "Llama"],
    demoLink: "",
    codeLink: "https://github.com/vyasyash-neu/conflict-monitor"
  },
  {
    id: 4,
    title: "CourseReg – Cloud-Native Course Registration Platform",
    banner: banners.courseReg,
    period: "Jan 2026 – Apr 2026",
    description: "A Spring Boot REST API on an AWS VPC provisioned with Terraform. GitHub Actions handles CI/CD, and TestContainers runs 199+ integration tests.",
    tech: ["Java", "Spring Boot", "AWS", "Terraform", "GitHub Actions", "TestContainers"],
    demoLink: "",
    codeLink: "https://github.com/Yash-Vyas-Organization/webapp",
    privateRepo: true
  },
  {
    id: 5,
    title: "Health Plan Data Indexing Platform",
    banner: banners.healthPlan,
    period: "Feb 2026 – Apr 2026",
    description: "Event-driven Elasticsearch indexing through RabbitMQ, with parent-child join documents, Redis caching, and OAuth 2.0 RS256 JWT auth.",
    tech: ["Spring Boot", "RabbitMQ", "Elasticsearch", "Redis", "OAuth 2.0", "Docker"],
    demoLink: "",
    codeLink: "https://github.com/vyasyash-neu/plan-rest-api",
    privateRepo: true
  },
  {
    id: 6,
    title: "Roomie",
    image: roomieImage,
    imagePosition: "center 36%",
    period: "Mar 2025 – Apr 2025",
    description: "A full-stack roommate and apartment listing platform. Lazy-loaded pagination cut page load by 70% across 1000+ listings, with AJAX filtering on 15+ criteria and Spring Security on every controller.",
    tech: ["Java", "Spring Boot", "Hibernate", "MySQL", "JSP", "Bootstrap"],
    demoLink: "",
    codeLink: "https://github.com/virushere/Roomie"
  },
  {
    id: 7,
    title: "Eventify",
    image: eventifyImage,
    period: "Nov 2024 – Dec 2024",
    description: "A full-stack event management app for creating events and handling registrations. It has REST APIs for events, tickets, and users with JWT auth, and a responsive TypeScript frontend.",
    tech: ["React", "Redux", "Node.js", "MongoDB", "TypeScript", "Tailwind CSS"],
    demoLink: "",
    codeLink: "https://github.com/virushere/eventify"
  },
  {
    id: 8,
    title: "Rapid Aid",
    image: rapidAidImage,
    imagePosition: "center 20%",
    period: "Oct 2021 – Jan 2022",
    description: "An Android app for emergency services, with multicast alerts from emergency drivers to police, dual-login authentication, verified government emergency contacts, and blood donor matching by zip code.",
    tech: ["Android", "Java", "Firebase", "Firestore"],
    demoLink: "https://www.ijraset.com/research-paper/rapid-aid-android-application-for-emergency-services",
    demoLabel: "Research Paper",
    codeLink: "https://github.com/virushere/RapidAid"
  }
];

const responsive = {
  0: { items: 1 },
  768: { items: 2 },
  1024: { items: 3 },
};

const ProjectCarousel = () => {
  const handleDragStart = e => e.preventDefault();
  const sectionRef = useRef(null);

  // Give every card the height of the tallest one so the row stays even
  // at any width, instead of hard-coding a height that clips or leaves gaps
  const equalizeHeights = useCallback(() => {
    const cards = sectionRef.current?.querySelectorAll('.project-card');
    if (!cards?.length) return;
    cards.forEach(card => { card.style.height = 'auto'; });
    const tallest = Math.max(...Array.from(cards, card => card.offsetHeight));
    cards.forEach(card => { card.style.height = `${tallest}px`; });
  }, []);

  useEffect(() => {
    let frame;
    const onResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(equalizeHeights);
    };
    window.addEventListener('resize', onResize);
    document.fonts?.ready.then(equalizeHeights);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', onResize);
    };
  }, [equalizeHeights]);

  const items = projects.map(({ id, title, period, description, tech, image, imagePosition, banner, demoLink, demoLabel, codeLink, privateRepo }) => (
    <div className="project-card" key={id} onDragStart={handleDragStart} role="presentation">
      {image ? (
        <img
          src={image}
          alt={title}
          className="project-image"
          onLoad={equalizeHeights}
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
        />
      ) : (
        <div className="project-banner" style={{ background: banner.gradient }} aria-hidden="true">
          {banner.icon}
        </div>
      )}
      <div className="project-content">
        <h3>{title}</h3>
        <span className="project-period">{period}</span>
        <p>{description}</p>
        <div className="project-tags">
          {tech.map(t => <span className="project-tag" key={t}>{t}</span>)}
        </div>
        {privateRepo && (
          <span className="private-repo-note">🔒 Private repo, access on request</span>
        )}
        <div className="project-links">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {demoLabel || 'Live Demo'}
            </a>
          )}
          {codeLink && (
            <a
              href={privateRepo ? `mailto:vyas.yash@northeastern.edu?subject=${encodeURIComponent(`Repo access request: ${title}`)}` : codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={demoLink ? '' : 'single-link'}
            >
              {privateRepo ? 'Request Access' : 'View Code'}
            </a>
          )}
        </div>
      </div>
    </div>
  ));

  return (
    <section id="projects" className="project-carousel-container" ref={sectionRef}>
      <h2>My Projects</h2>
      <AliceCarousel
        onInitialized={equalizeHeights}
        onResized={equalizeHeights}
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
      <a
        className="more-on-github"
        href="https://github.com/vyasyash-neu"
        target="_blank"
        rel="noopener noreferrer"
      >
        More on GitHub →
      </a>
    </section>
  );
};

export default ProjectCarousel;