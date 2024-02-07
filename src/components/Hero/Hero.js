import "./hero.scss";
import heroBtn from "../../assets/03topCTA/orderNow.svg";

import heroImage from "../../assets/04heroImg/Rectangle11.png";

function Hero() {
  return (
    <>
      <div className="hero__container">
        <div className="hero__copyContainer">
          <h2 className="hero__header">
            BUILDING <span className="hero__highlight">GAMES OF THE </span>{" "}
            FUTURE
          </h2>
          <p className="hero__logline">
            Board games are timeless, but the times are changing and so is our
            perspective
          </p>
          <img className="hero__btn" src={heroBtn} />
        </div>
        <div className="hero__imageContainer">
          <img className="hero__image" src={heroImage} />
        </div>
      </div>
    </>
  );
}

export default Hero;