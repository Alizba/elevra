import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Illustrations",
      href: "/portfolio/illustrations",
      image: "/photo2.jpg"
    },
    {
      id: 2,
      title: "Applications",
      href: "/portfolio/applications",
      image: "/photo3.jpg"
    },
    {
      id: 3,
      title: "Websites",
      href: "/portfolio/websites",
      image: "/photo4.jpg"
    }
  ]

  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a Gallery</h1>
      <div className={styles.items}>
        {portfolioItems.map((item) => (
          <Link 
            key={item.id}
            href={item.href} 
            className={styles.item}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <span className={styles.title}>
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default portfolio