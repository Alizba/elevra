import React from 'react'
import styles from './page.module.css'
import Button from '../../../components/button/button.jsx'
import Image from 'next/image'

const categoryData = {
  illustrations: [
    {
      id: 1,
      title: "Creative Illustration Design",
      description: "A stunning collection of hand-drawn illustrations featuring vibrant colors and unique artistic styles. Perfect for editorial and commercial use.",
      image: "/photo2.jpg",
      url: "#"
    },
    {
      id: 2,
      title: "Digital Art Collection",
      description: "Modern digital illustrations combining traditional techniques with contemporary design elements for impactful visual storytelling.",
      image: "/photo3.jpg",
      url: "#"
    },
    {
      id: 3,
      title: "Character Design Series",
      description: "Unique character illustrations designed for games, animations, and marketing campaigns with detailed personality traits.",
      image: "/photo4.jpg",
      url: "#"
    }
  ],
  applications: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with payment integration, user authentication, and real-time inventory management.",
      image: "/photo2.jpg",
      url: "#"
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "Comprehensive analytics dashboard for social media management with data visualization and scheduling features.",
      image: "/photo3.jpg",
      url: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative task management application with team features, deadline tracking, and productivity analytics.",
      image: "/photo4.jpg",
      url: "#"
    }
  ],
  websites: [
    {
      id: 1,
      title: "Corporate Website",
      description: "Modern corporate website with responsive design, interactive elements, and optimized performance for better user engagement.",
      image: "/photo2.jpg",
      url: "#"
    },
    {
      id: 2,
      title: "Portfolio Site",
      description: "Creative portfolio website showcasing work samples with smooth animations and an intuitive user interface.",
      image: "/photo3.jpg",
      url: "#"
    },
    {
      id: 3,
      title: "Blog Platform",
      description: "Feature-rich blog platform with CMS integration, SEO optimization, and social media sharing capabilities.",
      image: "/photo4.jpg",
      url: "#"
    }
  ]
}

const Category = ({ params }) => {
  // Get the category from params and convert to lowercase for data matching
  const categoryKey = params.Category?.toLowerCase() || 'illustrations'
  const items = categoryData[categoryKey] || categoryData.illustrations

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.Category}</h1>
      
      {items.map((item, index) => (
        <div key={item.id} className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.description}</p>
            <Button
              text="See More"
              url={item.url}
            />
          </div>
          <div className={styles.imgContainer}>
            <Image 
              className={styles.img}
              src={item.image} 
              alt={item.title} 
              fill
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Category