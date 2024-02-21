import "./game.scss";

import energyEvolution from "../../assets/07newWorlds/rectangle16.png";
import cosmicConquest from "../../assets/07newWorlds/rectangle17.png";
import astroTerra from "../../assets/07newWorlds/rectangle18.png";

import steamLogo from "../../assets/downloads/Steam_Logo.png";

function Game({ gameName, gameType, gamePlayers, gameLength, gameDesc, gamePic1 }) {
  return (
    <>
      <p className="game__name">{gameName}</p>

      <img src={energyEvolution} />

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

      <img />
      <img />
      <img />
      <img />

      <div className="game__ctaBox">
        <p className="game__cta">Play it on</p>
        <img className="game__steam" src={steamLogo} />
      </div>
    </>
  );
}

export default Game;
