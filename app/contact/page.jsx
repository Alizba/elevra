import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image 
            src="/contact.png" 
            width={400} 
            height={400} 
            alt='Contact us illustration'
            className={styles.img}
          />
        </div>

        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name"
              name="name"
              placeholder="Alizba"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email"
              name="email"
              placeholder="Ali@example.com"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject</label>
            <input 
              type="text" 
              id="subject"
              name="subject"
              placeholder="How can we help?"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea 
              id="message"
              name="message"
              rows="6"
              placeholder="Tell us about your project..."
              required
            ></textarea>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact