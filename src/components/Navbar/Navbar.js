import React from 'react';
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/" passHref>Home</Link>
        </li>
        <li>
          <Link href="/about/about" passHref>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
