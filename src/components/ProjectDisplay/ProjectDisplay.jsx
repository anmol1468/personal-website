import React from 'react'
import styles from './ProjectDisplay.module.scss'
import {projects} from '../../data'
import Project from '../Project/Project'
import { Link } from "react-router-dom";

function ProjectDisplay() {

  const highlightedProjects = projects.slice(0, 2)

  return (
    <div className={styles.projectDisplay}>
      <h2>My Projects</h2>
      {
        highlightedProjects.map((project) => {
          return <Project name={project.name} description={project.description} phone={project.phone} desktop={project.desktop} index={project.index} key={project.index} code={project.github} website={project.site} />
        })
      }
      <Link to={`projects`}><button className={`${styles.button} ${styles.button1}`} >See More Projects</button></Link>
      
    </div>
  )
}

export default ProjectDisplay