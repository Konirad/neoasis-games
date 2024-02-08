//hooks
import { useState, useEffect, useRef } from "react";

//styles
import "./newWorlds.scss";

//assets
import discoverImg1 from "../../assets/07newWorlds/rectangle16.png";
import discoverImg2 from "../../assets/07newWorlds/rectangle17.png";
import discoverImg3 from "../../assets/07newWorlds/rectangle18.png";

function NewWorlds() {
  const [index, setIndex] = useState(0);
  const picturesArray = [discoverImg1, discoverImg2, discoverImg3];

  useEffect(() => {
    const newWorldsBox = document.querySelector(".newWorlds__image");

    picturesArray.forEach((imgSrc) => {
      const img = new Image();
      img.src = imgSrc;
    });

    function changeWorldsBg() {
      newWorldsBox.style.backgroundImage = `url(${picturesArray[index]})`;

      setIndex((prevIndex) => (prevIndex + 1) % picturesArray.length);
    }
    ////////////////////////////////////////////////////

    const intervalId = setInterval(changeWorldsBg, 4000);
    return () => clearInterval(intervalId);
  }, [index]);

  return (
    <>
      <div className="newWorlds__headerContainer">
        <h2 className="newWorlds__header">
          <span className="newWorlds__header--discover">DISCOVER </span>NEW
          WORLDS
        </h2>
        <div className="newWorlds__imageContainer">
          <img
            src={picturesArray[index]}
            alt="Discover New World"
            className="newWorlds__image"
          />
        </div>
        <div className="newWorlds__imagesContainer">
          <img className="newWorlds__images" src={discoverImg1} />
          <img className="newWorlds__images" src={discoverImg2} />
          <img className="newWorlds__images" src={discoverImg3} />
        </div>
      </div>
    </>
  );
}
export default NewWorlds;
