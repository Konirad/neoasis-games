import React, { useEffect, useState } from "react";
import "./productPage.scss";
import ProductImgBox from "../../components/ProductImgBox/ProductImgBox";

import prodImageA from "../../assets/images/ly2hpbcorzf91.png";
import prodImageB from "../../assets/images/d426913b69e27fb2dbd2b82224adafa8.jpg";
import prodImageC from "../../assets/images/traveling-through-the-multiverse-v0-014ym2qbbvy91.webp";

function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const games = [
      {
        imageSrc: prodImageA,
        title: "Energy Evolution",
        description:
          "Earth needs new technologies to sustain humanity's unrelenting demand for power. Race with your friends to be the first one to reach cold Fusion.",
        pagePath: "energy-evolution",
      },
      {
        imageSrc: prodImageB,
        title: "Cosmic Conquest",
        description:
          "Upgrade your ship and reach the end of the universe before your friends do.",
        pagePath: "cosmic-conquest",
      },
      {
        imageSrc: prodImageC,
        title: "Astro Terra",
        description:
          "An intergalactic invasion is under way. Battle the invasion with your friends or create alliances with the unknown invaders.",
        pagePath: "astro-terra",
      },
    ];

    const productComponents = games.map((game, index) => (
      <ProductImgBox
        key={index}
        imgSrc={game.imageSrc}
        gameName={game.title}
        Desc={game.description}
        page={game.pagePath}
      />
    ));

    setProducts(productComponents);
  }, []);

  return (
    <>
      <h2 className="productPage__header">
        THE <span className="productPage__headerAlt">FUTURE</span> SERIES
      </h2>
      <div className="compBox">{products}</div>
    </>
  );
}

export default ProductPage;
