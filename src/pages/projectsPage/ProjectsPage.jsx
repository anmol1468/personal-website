import React from 'react'
import styles from './ProjectsPage.module.scss'
import Navbar from '../../components/Navbar/Navbar'
import { projects } from '../../data'
import Footer from '../../components/footer/Footer'
import HeaderSecondary from '../../components/header/HeaderSecondary'
import Project from '../../components/Project/Project'

const ProjectsPage = () => {
  return (
    <div className={styles.projectsPage}>
      <Navbar />
      <HeaderSecondary content='Projects' />
      <div className={styles.showcase}>
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