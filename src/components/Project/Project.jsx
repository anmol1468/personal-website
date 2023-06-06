import React from 'react'
import styles from './Project.module.scss'

function Project({name, description, desktop, phone, index, website, code}) {

  const isEvenNum = index % 2 === 0 || index === 0 ? true: false;

  return (
    <div className={styles.project} 
    style={{flexDirection: `${isEvenNum? 'row-reverse': 'initial'}`}}
    >
      <div className={styles.desktop}>
        <img src={desktop} alt="desktop-illustration" />
      </div>
      <div className={styles.info}>
        <h3>{name}</h3> 
        <p>{description}</p>
        <a href={website} target='_blank' >
        <button className={`${styles.button} ${styles.button1}`}>Visit Website</button></a>
        <a href={code} target='_blank' >
        <button className={`${styles.button} ${styles.button2}`}>See code</button></a>
      </div>
      <div className={styles.phone}>
        <img src={phone} alt="phone-illustration" />
      </div>
    </div>
  )
}

export default Project