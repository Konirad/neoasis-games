import { Link } from "react-router-dom";
import React, { useState } from "react";

//assets
import headerLogo from "../../assets/02 HEADER/LOGO MINT.svg";

//styles
import "./header.scss";

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
            <img
              src={headerLogo}
              className="header__logo"
              alt="a colorful palm tree, the logo for the site"
            />
            <h1 className="header__title">Neoasis Games</h1>
          </div>
        </Link>

        <div
          className={`hamburger-menu ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <ul className={`menu ${menuOpen ? "open" : ""}`}>
            <Link to={"/"}>
              <li className="hamburger-item">Home</li>
            </Link>
            <Link to={"/products"}>
              <li className="hamburger-item">Products</li>
            </Link>
            <Link to={"/about"}>
              <li className="hamburger-item">About</li>
            </Link>
            <Link to={"/contact"}>
              <li className="hamburger-item">Contact</li>
            </Link>
          </ul>
        </div>
        <div className="mobileBox">
          <div className="test">
            <ul className={`menuTablet`}>
              <Link to={"/products"}>
                <li className="menuTablet__item">Products</li>
              </Link>
              <Link to={"/about"}>
                <li className="menuTablet__item">About</li>
              </Link>
              <Link to={"/contact"}>
                <li className="menuTablet__item">Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
