import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo.png'
import styles from './navbar.module.css'
import Darkmode from "../darkmode/Darkmode"

const Links = [
  {
    id: 1,
    title: "Home",
    url: "/"
  },
  {
    id: 2,
    title: "About",
    url: "/about"
  },
  {
    id: 3,
    title: "Portfolio",
    url: "/portfolio"
  },
  {
    id: 4,
    title: "Blog",
    url: "/blog"
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact"
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard"
  },
]

function Navbar() {
  return (

    <div className={styles.container}>
      <Link href="/" className={styles.logo}><Image src={logo} alt="Company logo" width={80} /></Link>
      <div className={styles.links}>
        <Darkmode/>
        {Links.map(link => (
          <Link key={link.id} href={link.url}>{link.title}</Link>
        ))}
        <button className={styles.logout}>
          Logout
        </button>
      </div>
    </div>

  )
}

export default Navbar