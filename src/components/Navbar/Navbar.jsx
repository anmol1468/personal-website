import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import logo from "../../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const toggleSideMenu = () => {
    setShowSideMenu(!showSideMenu);
  };

  const location = useLocation();

  return (
    <div className={styles.navbar}>
      <Link to={`/`}>
        <img src={logo} alt="A D" />
      </Link>
      <ul>
        <Link
          to={`/`}
          style={{
            borderColor: location.pathname === "/" ? "#fff" : "transparent",
          }}
        >
          Home
        </Link>
        <Link
          to={`/projects`}
          style={{
            borderColor:
              location.pathname === "/projects" ? "#fff" : "transparent",
          }}
        >
          Projects
        </Link>
        <Link
          to={`/blog`}
          style={{
            borderColor: location.pathname === "/blog" ? "#fff" : "transparent",
          }}
        >
          Blog
        </Link>
        <Link
          to={`/contact`}
          style={{
            borderColor:
              location.pathname === "/contact" ? "#fff" : "transparent",
          }}
        >
          Contact
        </Link>
      </ul>

      <div className={styles.hamburger} onClick={toggleSideMenu}>
        <GiHamburgerMenu></GiHamburgerMenu>
      </div>

      <div
        className={styles.responsiveUl}
        style={{
          right: showSideMenu ? "0" : "100%",
        }}
      >
        <ul
          className={`${styles.links} ${
            showSideMenu ? styles.show : styles.hide
          }`}
        >
          <RxCross2 onClick={toggleSideMenu}></RxCross2>
          <Link
            to={`/`}
            style={{
              borderColor: location.pathname === "/" ? "#fff" : "transparent",
            }}
          >
            Home
          </Link>
          <Link
            to={`/projects`}
            style={{
              borderColor:
                location.pathname === "/projects" ? "#fff" : "transparent",
            }}
          >
            Projects
          </Link>
          <Link
            to={`/blog`}
            style={{
              borderColor:
                location.pathname === "/blog" ? "#fff" : "transparent",
            }}
          >
            Blog
          </Link>
          <Link
            to={`/contact`}
            style={{
              borderColor:
                location.pathname === "/contact" ? "#fff" : "transparent",
            }}
          >
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
