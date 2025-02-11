'use client';
import Link from "next/link";
import React from 'react';
import styles from './navbar.module.css';
import AboutMe from '../pages/aboutme.jsx';
import Header from './header.jsx';
import Projects from '../pages/projects.jsx';
import Resume from '../pages/resume.jsx';
import ContactMe from '../pages/contactme.tsx';

const Navbar = () => {
  return (
  <nav className={styles.navbar}>
      <div className={styles.navbarleft}>
        <Link href="/" className="logo">
          DominickCS
        </Link>
      </div>
      <div className={styles.navbarcenter}>
        <ul className={styles.navlinks}>
          <li>
            <Link href="/aboutme">About Me</Link>
          </li>
          <li>
            <Link href="/resume">Resume</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contactme">Contact Me</Link>
          </li>
        </ul>
      </div>
      <div className={styles.navbarright}>
        <button className={styles.pagemodebtn}>Light or Dark Mode</button>
      </div>
  </nav>
 );
}

export default Navbar;
