'use client'

import React, { useState, useEffect } from 'react'
import styles from './Darkmode.module.css'

const Darkmode = () => {
  // State to track if dark mode is active
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted (prevents hydration mismatch)
  useEffect(() => {
    setMounted(true)
    
    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    
    // Add or remove dark class from html element
    if (!isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  // Prevent hydration mismatch by not rendering until mounted
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