import React from "react";

//styles
import "./quote.scss";

function Quote({ image, text, name, style }) {
  const quoteContainerClasses = `quote__container ${style}`;

  return (
    <>
      <div className={quoteContainerClasses}>
        <img src={image} className="quote__image" />
        <p className="quote__text">
          <span className="quote__copy">{text}</span> {name}{" "}
        </p>
      </div>
    </>
  );
}

export default Quote;
