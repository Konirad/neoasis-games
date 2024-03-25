import React from "react";

//styles
import "./quote.scss";

function Quote({ image, text, name, style }) {
  const quoteContainerClasses = `quote__container ${style}`;

  return (
    <>
      <div className={quoteContainerClasses}>
        <img
          src={image}
          className="quote__image"
          alt="a young man smiles in a headshot"
        />
        <p className="quote__text">
          <span className="quote__copy">{text}</span> {name}{" "}
        </p>
      </div>
    </>
  );
}

export default Quote;
