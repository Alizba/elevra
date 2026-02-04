'use client'

import React, { useState, useEffect } from 'react'
import styles from './darkmode.module.css'

const Darkmode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    
    if (!isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  if (!mounted) {
    return (
      <div className={styles.container}>
        <div className={styles.toggle}>
          <span className={styles.icon}>☀️</span>
        </div>
      </div>
    )
  }

  return (
    <div 
      className={`${styles.container} ${isDarkMode ? styles.dark : ''}`}
      onClick={toggleDarkMode}
    >
      <div className={styles.toggle}>
        <span className={styles.icon}>
          {isDarkMode ? '🌙' : '☀️'}
        </span>
      </div>
    </div>
  )
}

export default Darkmode