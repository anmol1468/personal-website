import React, { useEffect } from 'react'
import styles from './ProjectsPage.module.scss'
import Navbar from '../../components/Navbar/Navbar'
import { projects } from '../../data'
import Footer from '../../components/footer/Footer'
import HeaderSecondary from '../../components/header/HeaderSecondary'
import Project from '../../components/Project/Project'

const ProjectsPage = () => {

  useEffect(() => {
    window.scrollTo({
    top: 0,
    behavior: 'instant',
  });
  },[])
  

  return (
    <div className={styles.projectsPage}>
      <Navbar />
      <HeaderSecondary content='Projects' />
      <div className={styles.showcase}>
        <h3>My Projects</h3>
      {
        projects.map((project) => {
          return <Project name={project.name} description={project.description} phone={project.phone} desktop={project.desktop} index={project.index} key={project.index} code={project.github} website={project.site} />
        })
      }
      </div>
      <Footer />
    </div>
  )
}

export default ProjectsPage