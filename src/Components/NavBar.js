import React from 'react';
import '../index.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" style={{ top: '0' }}>
      <div className="container">
        <a className="navbar-brand" href="/#">
          <img src="https://reisestate.vercel.app/assets/Logo-3682d112.svg" alt="REIS" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav d-flex justify-content-end align-center w-100">
            <li className="nav-item">
              <NavLink className="nav-link text-uppercase pe-3" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-uppercase pe-3" to="properties">
                Properties
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-uppercase pe-3" to="gallery">
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-uppercase pe-3" to="about">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-uppercase pe-3" to="contact">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
