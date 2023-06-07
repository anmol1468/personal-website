import React from 'react'
import styles from './Info.module.scss'
import developer from '../../assets/images/developer.svg'

function Info({handleButtonClick}) {
  return (
    <div className={`${styles.info}`}>
      <div className={`${styles.illustration}`}>
        <img src={developer} alt="developer" />
      </div>
      <div className={`${styles.text}`}>
        <h3>I am a self-taught <br /> <span>Web Developer</span></h3>
        <p>I have been learning technologies like React, Redux, Sass, etc. over the past 1 year, focusing mainly on the front-end.</p>
        <div className={`${styles.button}`}>
        <button onClick={handleButtonClick}>See Projects &darr;</button>
      </div>
      </div>
      
    </div>
  )
}

export default Info