import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import Image from 'next/image'

const blog = () => {

  const blogs = [
    {
      id: 1,
      image: '/photo4.jpg',
      title: 'First Blog Post',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum dolorem, deserunt rem blanditiis praesentium molestiae dolorum id sapiente natus doloribus nam expedita rerum consequuntur quo nobis in cumque excepturi. Mollitia.'
    },
    {
      id: 2,
      image: '/photo3.jpg',
      title: 'Second Blog Post',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum dolorem, deserunt rem blanditiis praesentium molestiae dolorum id sapiente natus doloribus nam expedita rerum consequuntur quo nobis in cumque excepturi. Mollitia.'
    },
    {
      id: 3,
      image: '/photo5.jpg',
      title: 'Third Blog Post',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum dolorem, deserunt rem blanditiis praesentium molestiae dolorum id sapiente natus doloribus nam expedita rerum consequuntur quo nobis in cumque excepturi. Mollitia.'
    }
  ]

  return (
    <div className={styles.mainContainer}>
      {blogs.map((blog) => (
        <Link 
          key={blog.id}
          href={`/blog/${blog.id}?image=${encodeURIComponent(blog.image)}&title=${encodeURIComponent(blog.title)}`} 
          className={styles.container}
        >
          <div className={styles.imageContainer}>
            <Image
              src={blog.image}
              alt={blog.title}
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{blog.title}</h1>
            <p className={styles.desc}>{blog.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default blog