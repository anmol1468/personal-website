import React from 'react'
import styles from './ProjectDisplay.module.scss'
import {projects} from '../../data'
import Project from '../Project/Project'

function ProjectDisplay() {
  return (
    <div className={styles.projectDisplay}>
      <h2>My Projects</h2>
      {
        projects.map((project) => {
          return <Project name={project.name} description={project.description} phone={project.phone} desktop={project.desktop} index={project.index} key={project.index} />
        })
        
      }
      <button className={`${styles.button} ${styles.button1}`} >See All Projects</button>
    </div>
  )
}

export default ProjectDisplay