import "./footer.scss";

import footerLogo from "../../assets/02 HEADER/LOGO MINT.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__links">
          <Link to={"/about"}>
            <p className="footer__linkItem">ABOUT</p>
          </Link>
          <Link to={"/products"}>
            <p className="footer__linkItem">PRODUCTS</p>
          </Link>
          <Link to={"/contact"}>
            <p className="footer__linkItem">CONTACT</p>
          </Link>
        </div>
        <div className="footer__container">
          <img src={footerLogo} className="footer__logo" alt="a plam tree logo" />
          <h1 className="footer__title">Neoasis Games</h1>
          <p className="footer__copyright">
            © 2024 Neo Oasis Games Inc. Neo Oasis Games and the NOG logo are ©
            of Neo Games Oasis Publishing, Inc. All rights reserved.{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
