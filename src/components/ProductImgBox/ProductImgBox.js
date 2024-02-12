import "./productImgBox.scss";

function ProductImgBox({ imgSrc, gameName, Desc }) {
  return (
    <>
      <div className="productImgBox">
        <img className="productImgBox__img" src={imgSrc} />
        <div className="productImgBox__textContainer">
          <p className="productImgBox__gameTitle">{gameName}</p>
          <p className="productImgBox__gameDesc">{Desc}</p>
        </div>
      </div>
    </>
  );
}

export default ProductImgBox;
