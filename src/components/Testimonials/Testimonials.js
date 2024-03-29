import React from "react";

//style
import "./testimonials.scss";

//components
import Quote from "../Quote/Quote";

//assets
import pic1 from "../../assets/06testimonials/temp img/pic1.png";
import pic2 from "../../assets/06testimonials/temp img/pic2.png";
import pic3 from "../../assets/06testimonials/temp img/pic3.png";
import pic4 from "../../assets/06testimonials/temp img/pic4.png";
import ellipses2 from "../../assets/13circles/CIRCLES 2.svg";

function Testimonials() {
  const quotes = [
    {
      image: pic1,
      text: "Best board games ever! Great for game nights with friends.",
      name: "- Mike",
    },
    {
      image: pic2,
      text: "Endless replay-ability with different approaches.",
      name: "- Steve",
    },
    {
      image: pic3,
      text: "Their games brought out the competitive spirit in everyone. Thrilling!",
      name: "- Jessica",
    },
    {
      image: pic4,
      text: "The perfect blend of strategy and luck, Loved every minute of Energy Evolution!",
      name: "- Chris",
    },
  ];

  return (
    <>
      <div className="testimonials__headerContainer">
        <h3 className="testimonials__header">See what players are saying</h3>
      </div>

      <img
        src={ellipses2}
        className="testimonials__ellipTwo"
        alt="an ellipses element designed to give the site visual depth"
      />

      <div className="testimonials__quotes">
        {quotes.map((quote, index) => {
          return (
            <Quote
              key={index}
              image={quote.image}
              text={quote.text}
              name={quote.name}
              style={index % 2 === 0 ? "left" : "right"}
            />
          );
        })}
      </div>
    </>
  );
}

export default Testimonials;
