import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top py-3">
      <div className="container">
        {/* Logo Section */}
        <Link className="navbar-brand fw-bold fs-3" to="/">
          RUMBA <span className="text-warning">GROUP</span>
        </Link>

        {/* Mobile Toggle Button */}
        <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link px-3 active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/services">Services</Link>
            </li>
            <li className="nav-item ms-lg-3">
              <Link className="btn btn-warning fw-bold px-4" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;