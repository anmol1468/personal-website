import React from 'react'
import styles from './Footer.module.scss'
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs'

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.connect}>
      <p>Connect on</p>
      <a target='_blank' href="https://www.linkedin.com/in/anmol-singh-dhillon-816a33220/"><BsLinkedin /></a>
      <a target='_blank' href="https://github.com/anmol1468"><BsGithub /></a>
      <a target='_blank' href="https://www.instagram.com/anmol_1468/"><BsInstagram /></a>
      </div>
      <div className={styles.code}>
        Check out code for this website <a href="https://github.com/anmol1468/personal-website" target='_blank' >here</a>
      </div>
    </div>
  )
}

export default Footer