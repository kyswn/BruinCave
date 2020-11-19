import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { SignupButton } from "./SignupButton";
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { pathname } = useLocation();

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  function classHome() {
    if (!button) {
      return "nav-links";
    } else {
      return "nav-links-home";
    }
  }

  function classAboutUs() {
    if (!button) {
      return "nav-links";
    } else {
      return "nav-links-aboutus";
    }
  }

  function classRecommend() {
    if (!button) {
      return "nav-links";
    } else {
      return "nav-links-recommend";
    }
  }

  function returnLogin() {
    if (pathname.startsWith("/login")) {
      return;
    } else {
      return <Button buttonStyle="btn--outline">Login</Button>;
    }
  }
  function returnSignup() {
    if (pathname.startsWith("/signup")) {
      return;
    } else {
      return <SignupButton buttonStyle="btn--outline">Signup</SignupButton>;
    }
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/"
            className="navbar-logo"
            onClick={closeMobileMenu}
            style={{ fontFamily: "Syne Mono" }}
          >
            BruinCave
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className={classHome()}
                onClick={closeMobileMenu}
                style={{ fontFamily: "Roboto" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={classAboutUs()}
                onClick={closeMobileMenu}
                style={{ fontFamily: "Roboto" }}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/recommend"
                className={classRecommend()}
                onClick={closeMobileMenu}
                style={{ fontFamily: "Roboto" }}
              >
                Recommend
              </Link>
            </li>

            <li>
              <Link
                to="/login"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>

            <li>
              <Link
                to="/signup"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Signup
              </Link>
            </li>
          </ul>
          {button && returnLogin()}
          {button && returnSignup()}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
