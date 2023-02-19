import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
          <Link href="/" passHref>Home</Link>
          </li>
          <li>
            <Link href="/about" passHref>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
