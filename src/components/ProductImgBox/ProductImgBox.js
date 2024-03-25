import { Link } from "react-router-dom";
import "./productImgBox.scss";

function ProductImgBox({ imgSrc, gameName, Desc, page }) {
  return (
    <>
      <Link to={page}>
        <div className="productImgBox">
          <img
            className="productImgBox__img"
            src={imgSrc}
            alt="a dystopian future"
          />
          <div className="productImgBox__textContainer">
            <p className="productImgBox__gameTitle">{gameName}</p>
            <p className="productImgBox__gameDesc">{Desc}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductImgBox;
