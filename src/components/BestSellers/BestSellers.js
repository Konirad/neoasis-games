import "./bestSellers.scss";

import energyEvo from "../../assets/10bestSellers/ee.png";
import cosmicConq from "../../assets/10bestSellers/cc.png";

function BestSellers() {
  return (
    <>
      <div>
        <h2 className="bestSellers__header">BESTSELLERS</h2>
        <div className="bestSellers__imgContainer">
          <div className="bestSellers__img eeBg" src={energyEvo}>
            {" "}
            <p className="bestSellers__gameTitle">ENERGY EVOLUTION</p>{" "}
          </div>
          <div className="bestSellers__img ccBg" src={cosmicConq}>
            {" "}
            <p className="bestSellers__gameTitle">COSMIC CONQUEST</p>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default BestSellers;
