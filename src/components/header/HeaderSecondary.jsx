import React from 'react'
import styles from './headerSecondary.module.scss'

const HeaderSecondary = ({content}) => {
  return (
    <div className={styles.headerSecondary}>{content}</div>
  )
}

export default HeaderSecondary