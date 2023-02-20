import Link from 'next/link'
import React from 'react'
import Navbar from '../Navbar/Navbar'

import logo from '../../../public/logo.jpg'

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link href="/" passHref>
          <img src={logo.src} alt="Airbnb" />
        </Link>
      </div>
      <Navbar />
    </header>
  )
}

export default Header
