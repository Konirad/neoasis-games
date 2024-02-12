import React, { useEffect, useState } from "react";
import "./productPage.scss";
import ProductImgBox from "../../components/ProductImgBox/ProductImgBox";

import prodImageA from "../../assets/07newWorlds/rectangle16.png";
import prodImageB from "../../assets/07newWorlds/rectangle17.png";
import prodImageC from "../../assets/07newWorlds/rectangle18.png";

function ProductPage() {
  const [products, setProducts] = useState([]);

  const games = [
    {
      imageSrc: prodImageA,
      title: "Energy Evolution",
      description:
        "Earth needs new technologies to sustain humanity's unrelenting demand for power. Race with your friends to be the first one to reach cold Fusion.",
    },
    {
      imageSrc: prodImageB,
      title: "Cosmic Conquest",
      description:
        "Upgrade your ship and reach the end of the universe before your friends do.",
    },
    {
      imageSrc: prodImageC,
      title: "Astro Terra",
      description:
        "An intergalactic invasion is under way. Battle the invasion with your friends or create alliances with the unknown invaders.",
    },
  ];

  useEffect(() => {
    const productComponents = games.map((game) => (
      <ProductImgBox
        key={game.index}
        imgSrc={game.imageSrc}
        gameName={game.title}
        Desc={game.description}
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
