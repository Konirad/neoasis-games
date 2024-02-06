import React, { useState } from "react";

//assets
import headerLogo from "../../assets/02 HEADER/LOGO MINT.svg";

//styles
import "./header.scss";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header__container">
        <Link to={"/"}>
          <div className="header__1">
            <img src={headerLogo} className="header__logo" />
            <h1 className="header__title">Neoasis Games</h1>
          </div>
        </Link>

        <div
          className={`hamburger-menu ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <ul className={`menu ${menuOpen ? "open" : ""}`}>
            <li className="hamburger-item">Products</li>
            <li className="hamburger-item">About</li>
            <li className="hamburger-item">Blog</li>
            <li className="hamburger-item">Contact</li>
          </ul>
        </div>
        <div className="mobileBox">
          <div className="test">
            <ul className={`menuTablet`}>
              <li className="menuTablet__item">Products</li>
              <li className="menuTablet__item">About</li>
              <li className="menuTablet__item">Blog</li>
              <li className="menuTablet__item">Contact</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
