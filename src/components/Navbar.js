import React from "react";
import paslogo from "../img/paslogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg   ">
        <div className="container-fluid ">
          <a className="navbar-brand" href="#"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse  "
            id="navbarSupportedContent"
          >
            <Link to="/">
              <img
                src={paslogo}
                alt="Logo"
                width="125px"
                height="75px"
                // style={{ textAlign: center }}
              />
            </Link>
            <h1 className="title" id="main-title">
              Placement Activity System
            </h1>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Contact
                </a>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Footer">
                  AboutUs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
