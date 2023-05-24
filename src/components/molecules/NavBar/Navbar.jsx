'use client';

import React from 'react';
import Button from '../../atoms/Button/Button';
import styles from './Navbar.module.css';

const Navbar = ({ activeSection }) => {
  return (
    <nav className={styles.nav}>
      <div className="logo">My Portfolio</div>
      <div className={styles.navLinks}>
        <Button
          className={activeSection === 'hero' ? 'active' : 'inactive'}
          href="#hero"
          type="transparent"
        >
          Home
        </Button>
        <Button
          className={activeSection === 'info' ? 'active' : 'inactive'}
          href="#info"
          type="transparent"
        >
          Info
        </Button>
        <Button
          className={activeSection === 'projects' ? 'active' : 'inactive'}
          href="#projects"
          type="transparent"
        >
          Projects
        </Button>
        <Button
          className={activeSection === 'contact' ? 'active' : 'inactive'}
          href="#contact"
          type="transparent"
        >
          Contact
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;