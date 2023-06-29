import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { AiTwotoneSetting } from 'react-icons/ai';
import { BsChevronLeft } from 'react-icons/bs';
import '../styles/Navbar.css';

const Navbar = () => (
  <header className="nav">
    <div className="nav-left">
      <NavLink to="/">
        <BsChevronLeft />
      </NavLink>
      Back
    </div>
    <h2>ALL Continents Details </h2>
    <div className="nav-right">
      <FaMicrophone />
      <AiTwotoneSetting />
    </div>
  </header>
);

export default Navbar;
