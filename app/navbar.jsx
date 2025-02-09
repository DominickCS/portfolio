'use client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import './styles/navbar.css';
import AboutMe from './aboutme.jsx';
import Header from './header.jsx';
import Projects from './projects.jsx';

const Navbar = () => {
  return (
    <Router>
  <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          DominickCS
        </Link>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <Link to="/aboutme">About Me</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <button className="pagemodebtn">Light or Dark Mode</button>
      </div>
  </nav>
 
      <Routes>
        <Route path="/" element={<Header title="Welcome to my Portfolio" subtitle="I am a highly passionate front-end web developer!"/>} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
  </Router>
  );
}

export default Navbar;
