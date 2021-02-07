import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import Alex from "./Alex";
import { Button } from "./Button";
import AlexIcon from "../components/images/Alex Icon White.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <Alex />
            <img className="navbar-icon" alt="Logo" src={AlexIcon} />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink exact to="/" className="nav-links" activeClassName="active" onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/About" className="nav-links" activeClassName="active" onClick={closeMobileMenu}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Project" className="nav-links" activeClassName="active" onClick={closeMobileMenu}>
                Projects
              </NavLink>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Resume</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
