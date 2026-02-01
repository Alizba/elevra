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
    url: "/"
  },
  {
    id:3,
    title: "Portfolio",
    url: "/"
  },
  {
    id:4,
    title: "Blog",
    url: "/"
  },
  {
    id:5,
    title: "Contact",
    url: "/"
  },
  {
    id:6,
    title: "Dashboard",
    url: "/"
  },
]

function Navbar() {
  return (
    <>
      <Link href="/">
        <Image src={logo} alt="Company logo" width={80} />
      </Link>
    </>
  )
}

export default Navbar