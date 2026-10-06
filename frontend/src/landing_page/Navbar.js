import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: "#ffffff" }}>
      <div class="container">
        <Link class="navbar-brand" to="/">
          <img src="media/images/TradeWave_logo.png"   alt="Logo" style={{ width: '30%' , height: 'auto' }} />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active text-muted"  aria-current="page" to="/signup">
                Signup
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active text-muted " aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active text-muted" aria-current="page" to="/products">
                Products
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active text-muted" aria-current="page" to="/pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active text-muted" aria-current="page" to="/support">
                Support
              </Link>
            </li>
            <div class="dropdown-center">
              <button class="btn dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
               <i class="fa-solid fa-bars fs-5 mt-1"></i>
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/Signup">Signup</a></li>
                <li><a class="dropdown-item" href="/Login">Login</a></li>
                <li><a class="dropdown-item" href="/Calculator">Calculator</a></li>
              </ul>
            </div>
          </ul>
        </div>               
      </div>
    </nav>
  );
}

export default Navbar;
