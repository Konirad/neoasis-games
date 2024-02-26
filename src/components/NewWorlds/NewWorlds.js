//hooks
import { useState, useEffect, useRef } from "react";

//styles
import "./newWorlds.scss";

//assets
import discoverImg1 from "../../assets/images/ly2hpbcorzf91.png";
import discoverImg2 from "../../assets/images/d426913b69e27fb2dbd2b82224adafa8.jpg";
import discoverImg3 from "../../assets/images/traveling-through-the-multiverse-v0-014ym2qbbvy91.webp";
import { Link } from "react-router-dom";

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
        <Link to={"/products"}>
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
        </Link>
      </div>
    </>
  );
}
export default NewWorlds;
