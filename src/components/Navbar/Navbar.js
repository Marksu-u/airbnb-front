import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faBars, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className={styles.navbar__head}>
      <div>Mettre mon logement sur Airbnb</div>
      <FontAwesomeIcon icon={faGlobe} />
      <button className={styles.dropdownMenu}>
        <FontAwesomeIcon icon={faBars} />
        <FontAwesomeIcon icon={faUser} />
      </button>
    </div>
  );
};

export default Navbar;
