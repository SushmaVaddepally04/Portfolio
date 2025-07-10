import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <nav className={`navbar ${open ? 'active' : ''}`}>
      <div className="logo">Your Name</div>

      <ul className={`nav-links ${open ? 'show' : ''}`}>
        {['profile', 'skills', 'projects', 'contact'].map(sec => (
          <li key={sec}>
            <Link to={sec} smooth duration={500} onClick={() => setOpen(false)}>
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hamburger" onClick={toggle}>
        {open ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}
