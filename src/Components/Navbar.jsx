import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar navbar-expand-lg px-3" style={{ background: '#212428' }}>
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-4">
          <Link to="/" className="navbar-brand">
            <img
              src="https://res.cloudinary.com/dfkkdv8et/image/upload/v1745499765/WhatsApp_Image_2025-04-24_at_18.02.22_cd6599dc-removebg-preview_rvhbuw.png"
              width={100}
              alt="Logo"
            />
          </Link>
          <Link to="/" className="nav-link custom-nav-link text-light">
            Home
          </Link>
        </div>

        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
          <div className="navbar-nav gap-3 align-items-center">
              <Link to="/cart" className="nav-link custom-nav-link text-light">
                Cart ({cartCount})
              </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
