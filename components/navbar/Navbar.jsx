import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo.png'

const Links = [
  {
    id:1,
    title: "Home",
    url: "/"
  },
  {
    id:2,
    title: "About",
    url: "/about"
  },
  {
    id:3,
    title: "Portfolio",
    url: "/portfolio"
  },
  {
    id:4,
    title: "Blog",
    url: "/blog"
  },
  {
    id:5,
    title: "Contact",
    url: "/contact"
  },
  {
    id:6,
    title: "Dashboard",
    url: "/dashboard"
  },
]

function Navbar()  {
  return (
    <>
      <Link href="/"><Image src={logo} alt="Company logo" width={80} /></Link>
      <div>
        {Links.map(link=>(
          <Link key={link.id} href={link.url}>{link.title}</Link>
        ))}
      </div>
    </>
  )
}

export default Navbar