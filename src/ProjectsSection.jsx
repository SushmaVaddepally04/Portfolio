import React from "react";
import { projects } from "./data/projects";
import './ProjectsSection.css'

/**
 * ProjectsSection
 * Renders the 'Projects' section with project cards.
 * Filename: ProjectsSection.jsx
 */
export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2>My Projects</h2>
        <p>A showcase of my work and accomplishments.</p>
      </div>
      <div className="projects-grid">
        {projects.map((p, index) => (
          <div key={index} className="project-card">
            {/* Work: Project card */}
            <a href={p.liveLink} target="_blank" rel="noopener noreferrer">
              <img src={p.image} alt={p.title} />
            </a>
            <div className="project-content">
              <h3>{p.title}</h3>
              <span className="project-subtitle">{p.subtitle}</span>
              <p>{p.description}</p>
              <div className="project-links">
                <a href={p.liveLink} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                {p.codeLink && (
                  <a href={p.codeLink} target="_blank" rel="noopener noreferrer">
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
