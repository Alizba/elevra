import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import photo from '../../public/photo1.jpg'
import Button from '../../components/button/button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src={photo} 
          alt='About our digital agency' 
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      <div className={styles.textContainer}>
        <div className={styles.section}>
          <h1>Who we are?</h1>
          <p>
            We are a passionate team of digital innovators, designers, and storytellers dedicated to transforming ideas into extraordinary digital experiences. With years of expertise in crafting cutting-edge solutions, we blend creativity with technology to deliver products that don't just meet expectations—they exceed them. Our mission is to empower businesses through thoughtful design and strategic innovation.
          </p>
        </div>

        <div className={styles.section}>
          <h1>What we do?</h1>
          <p>
            We specialize in creating award-winning digital experiences that captivate audiences and drive results. From stunning web applications and intuitive mobile platforms to comprehensive brand identities and user-centric designs, we handle every aspect of your digital journey. Our collaborative approach ensures that every project reflects your vision while incorporating industry best practices and the latest technological innovations.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About