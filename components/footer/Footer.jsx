import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

function Footer() {
  return (
    <div className={styles.container}>
      <div>2026 Elevra. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/fblogo.png" width={45} height={40} className={styles.icon} alt="Elevra"/>
        <Image src="/instalogo.png" width={75} height={40} className={styles.icon} alt="Elevra"/>
        <Image src="/discordlogo.png" width={40} height={40} className={styles.icon} alt="Elevra"/>
      </div>
    </div>
  )
}

export default Footer