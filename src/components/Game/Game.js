import "./game.scss";

import { Link, useOutlet, useParams } from "react-router-dom";

import energyEvolution from "../../assets/images/ly2hpbcorzf91.png";
import cosmicConquest from "../../assets/images/d426913b69e27fb2dbd2b82224adafa8.jpg";
import astroTerra from "../../assets/images/traveling-through-the-multiverse-v0-014ym2qbbvy91.webp";

import steamLogo from "../../assets/downloads/Steam_Logo.png";

function Game({
  gameName,
  gameType,
  gamePlayers,
  gameLength,
  gameDesc,
  gameAtHand,
}) {
  let imageSrc;

  switch (gameAtHand) {
    case "energy-evolution":
      imageSrc = energyEvolution;
      break;

    case "cosmic-conquest":
      imageSrc = cosmicConquest;
      break;

    case "astro-terra":
      imageSrc = astroTerra;
      break;

    default:
      imageSrc = "";
  }

  if (imageSrc === energyEvolution) {
  }

  return (
    <>
      <p className="game__name">{gameName}</p>

      <div className="game__container">
        <img src={imageSrc} className="game__image" />

        <div className="game__details">
          <p className="game__detailsItem">
            Game Type:
            <br /> {gameType}
          </p>

          <p className="game__detailsItem detailsRight">
            Players: <br /> {gamePlayers}
          </p>

          <p className="game__detailsItem">
            Game Length: <br /> {gameLength}
          </p>

          <p className="game__detailsItem detailsRight">
            Status: <br /> Available Now
          </p>

          <p className="game__desc">{gameDesc}</p>
        </div>
      </div>

      <img />
      <img />
      <img />
      <img />

      <Link
        to={
          "https://steamcommunity.com/sharedfiles/filedetails/?id=2712775836&searchtext=energy+evolution"
        }
      >
        {imageSrc === energyEvolution && (
          <div className="game__ctaBox">
            <p className="game__cta">Play it on</p>
            <img className="game__steam" src={steamLogo} />
          </div>
        )}
      </Link>
    </>
  );
}

export default Game;
