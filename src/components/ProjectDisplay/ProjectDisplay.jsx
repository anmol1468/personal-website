import React from 'react'
import styles from './ProjectDisplay.module.scss'
import {projects} from '../../data'
import Project from '../Project/Project'
import { Outlet, Link } from "react-router-dom";

function ProjectDisplay() {
  return (
    <div className={styles.projectDisplay}>
      <h2>My Projects</h2>
      {
        projects.map((project) => {
          return <Project name={project.name} description={project.description} phone={project.phone} desktop={project.desktop} index={project.index} key={project.index} />
        })
        
      }
      <Link to={`projects`}><button className={`${styles.button} ${styles.button1}`} >See All Projects</button></Link>
      
    </div>
  )
}

export default ProjectDisplay