import React, { useState } from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            LOGO <i className="fab fa-typo3"></i>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;