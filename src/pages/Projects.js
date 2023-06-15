import React from 'react'
import "./Projects.css"
import { ProjectList } from './ProjectList';
import ProjectItem from '../components/ProjectItem';

function Projects() {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  )
}

export default Projects