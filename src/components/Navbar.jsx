// Navbar.jsx
import React from 'react';
import Logo from "../assets/mb.png";
import { NavLink } from 'react-router-dom';
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftSide'>
        <img src={Logo} alt="Logo" />
      </div>
      <div className='rightSide'>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">
          About
        </NavLink>
        <NavLink to="/contact">
          Contact Me
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
