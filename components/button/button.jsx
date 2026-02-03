import React from 'react'
import Link from 'next/link'
import styles from './button.module.css'

const Button = ({ text, url, className = '' }) => {
  return (
    <Link href={url} className={`${styles.button} ${className}`}>
      <button>{text}</button>
    </Link>
  )
}

export default Button