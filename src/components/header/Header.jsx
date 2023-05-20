import React from 'react'
import styles from './header.module.scss'
import Pic1 from '../../assets/images/Pic1.png'
import Pic2 from '../../assets/images/Pic2.png'

function Header() {
  return (
    <div className={`${styles.header}`}>
      <div className={`${styles.intro}`}>Hi, I am <br />
      {/* <span className='animate-charcter'>A</span>
      <span className='animate-charcter'>n</span>
      <span className='animate-charcter'>m</span>
      <span className='animate-charcter'>o</span>
      <span className='animate-charcter'>l</span>     */}
      <span className='animate-charcter'>Anmol</span>    
      </div>
      <div className={`${styles.illustration}`}>
        <img src={Pic1} alt="Anmol's picture" />
      </div>
    </div>
  )
}

export default Header