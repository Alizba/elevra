import React from 'react'
import styles from './page.module.css'

const layout = ({children}) => {
  return (
    <div>
        <h1 className={styles.mainTitle}>
            Our Works
            {children}
        </h1>
    </div>
  )
}

export default layout