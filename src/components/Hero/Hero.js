import "./hero.scss";
import heroBtn from "../../assets/03topCTA/orderNow.svg";

import heroImage from "../../assets/04heroImg/Rectangle11.png";

import Sphere from "../Sphere/Sphere";

import ellipses from "../../assets/13circles/CIRCLES 1.svg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="hero__container">
        <div className="hero__copyContainer">
          <img
            src={ellipses}
            className="hero__ellip"
            alt="an ellipses that rotates and helps give the website visual depth"
          />
          <h2 className="hero__header">
            BUILDING <span className="hero__highlight">GAMES OF THE </span>{" "}
            FUTURE
          </h2>
          <p className="hero__logline">
            Board games are timeless, but the times are changing and so is our
            perspective
          </p>

          <Link
            to={
              "https://steamcommunity.com/sharedfiles/filedetails/?id=2712775836&searchtext=energy+evolution"
            }
          >
            <img
              className="hero__btn"
              src={heroBtn}
              alt="button linking to the game webpage"
            />
          </Link>
        </div>
        <div className="hero__imageContainer">
          <img
            className="hero__image"
            src={heroImage}
            alt="a colorful gameboard"
          />
        </div>
        <Sphere />
      </div>
    </>
  );
}

export default Hero;
