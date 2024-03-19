import React from "react";
import MobileNav from "../atoms/mobileNav";
import Logo from "./logo";
import "../../styles/atoms/navbar.scss";

const Navbar = () => {
  const handleNavLinkClick = (event) => {
    const href = event.currentTarget.getAttribute("href");
    if (href.startsWith("#")) {
      event.preventDefault();
      window.location.hash = href;
    }
  };

  return (
    <div id="nav-container">
      <MobileNav />
      <Logo />
      <div className="sidebar">
        <a href="/#home" className="menu-item" onClick={handleNavLinkClick}>
          Naslovna
        </a>
        <a href="/#about" className="menu-item" onClick={handleNavLinkClick}>
          O nama
        </a>
        <a href="/#products" className="menu-item" onClick={handleNavLinkClick}>
          Proizvodi
        </a>
        <a href="/#contact" className="menu-item" onClick={handleNavLinkClick}>
          Kontakt
        </a>
      </div>
    </div>
  );
};

export default Navbar;
