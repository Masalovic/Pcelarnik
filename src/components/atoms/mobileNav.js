import React, { useState } from "react";
import iconOpen from "../../assets/menuOpen.svg";
import iconClose from "../../assets/menuClose.svg";
import { Link } from "react-router-dom";
import Logo from "./logo";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMobileMenu = () => setOpen(false);

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  const menuItems = [
    { id: "home", label: "Početna", path: "/" },
    {
      id: "services",
      label: "Usluge",
      path: "",
      subItems: [
        {
          id: "serviceFirst",
          label: "   Upravljanje prihodima i rashodima",
          path: "/serviceFirst",
        },
        {
          id: "serviceSecond",
          label: "Obuka i trening zaposlenih",
          path: "/serviceSecond",
        },
        { id: "serviceThird", label: "Mystery checks", path: "/serviceThird" },
        {
          id: "serviceFourth",
          label: "Dodela menadžera",
          path: "/serviceFourth",
        },
      ],
    },
    { id: "about", label: "O nama", path: "/#about" },
    { id: "contact", label: "Kontakt", path: "/#contact" },
  ];

  return (
    <div className="mobile-nav">
      <nav role="navigation">
        <div id="menuToggle" onClick={toggleMenu}>
          <img
            src={open ? iconClose : iconOpen}
            alt={open ? "Close" : "Open"}
            className={open ? "burger__closed" : "burger__menu"}
          />
          <ul id="menu" className={open ? "open" : ""}>
            {menuItems.map((item) => (
              <li key={item.id}>
                {item.subItems ? (
                  <div className="service-item" onClick={toggleDropdown}>
                    {item.label}
                    {dropdownOpen && (
                      <ul>
                        {item.subItems.map((subItem) => (
                          <li key={subItem.id}>
                            <Link to={subItem.path} onClick={closeMobileMenu}>
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <a href={item.path} onClick={closeMobileMenu}>
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <Logo />
    </div>
  );
};

export default MobileNav;
