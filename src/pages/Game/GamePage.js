//hooks
import { useParams } from "react-router-dom";

//style
import "./gamePage.scss";

//data
import gameData from "../../Data/gameData.json";

//component
import Game from "../../components/Game/Game";

function GamePage() {
  const { gameAtHand } = useParams();

  const data = gameData;

  const getId = data.filter((item) => gameAtHand === item.identifier);

  if (getId.length === 0) {
    return <p>uh ohno page.</p>;
  }

  const { gameName, gameType, gamePlayers, gameLength, gameDesc } = getId[0];

  return (
    <Game
      gameName={gameName}
      gameType={gameType}
      gamePlayers={gamePlayers}
      gameLength={gameLength}
      gameDesc={gameDesc}
      gameAtHand={gameAtHand}
    />
  );
}

export default GamePage;
