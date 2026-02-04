'use client'
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

const BlogPost = () => {
  const searchParams = useSearchParams()
  const image = searchParams.get('image') || '/photo4.jpg' 
  const title = searchParams.get('title') || 'Default Title'

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {title}
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorum, voluptate libero est iste quos, deleniti tempora quae tenetur, rem sequi porro labore. Dolor eos sunt inventore tempora! Dolores officia sapiente obcaecati quae labore cupiditate quod beatae aspernatur, alias aliquid incidunt natus expedita voluptatum minima pariatur ducimus, nisi quia qui corporis repellat placeat eius amet, velit ab! Eveniet blanditiis amet dicta possimus animi. Ad tempora magnam nam praesentium provident nesciunt.
          </p>
          <div className={styles.author}>
            <Image
              src="/photo2.jpg"
              alt=''
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Alizba Ali</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={image}
            alt={title}
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi libero eligendi distinctio ducimus possimus impedit minus tempore accusantium a doloribus aut, necessitatibus voluptas natus debitis sit atque laboriosam asperiores quis, hic sapiente exercitationem voluptatum eius officiis? Facilis id labore nemo iure maxime sit praesentium! Veritatis.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat numquam aspernatur consequatur sapiente provident rerum porro consequuntur cupiditate enim possimus, maiores temporibus doloribus fugiat veniam, voluptatibus ipsa id eaque alias commodi corrupti eveniet? Deleniti illum sequi accusantium quos a dolor, laborum et itaque saepe quia illo doloremque libero consequatur sunt? Consectetur modi nostrum earum possimus non praesentium, magni officiis laborum!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corporis iusto accusamus harum iure excepturi voluptatibus officia necessitatibus provident nam doloribus pariatur, consequatur ipsam eaque amet! Laborum ratione iusto rerum. In reiciendis reprehenderit dignissimos natus cupiditate perspiciatis magnam ab iste. Eveniet error, similique voluptatum cumque, dolorem quisquam minus aspernatur iste debitis distinctio quibusdam temporibus eum at rerum odio accusamus. Praesentium voluptatum velit neque animi deleniti asperiores nihil possimus unde.
        </p>
      </div>
    </div>
  )
}

export default BlogPost