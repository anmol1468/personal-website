import React from 'react'
import styles from './Footer.module.scss'
import { BsLinkedin, BsInstagram } from 'react-icons/bs'

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.connect}>
      <p>Connect on</p>
      <BsInstagram />
      <BsLinkedin />
      </div>
      <div className={styles.code}>
        Check out code for this website <a href="https://github.com/anmol1468/personal-website" target='_blank' >here</a>
      </div>
    </div>
  )
}

export default Footer