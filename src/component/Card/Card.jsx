import React from "react";
import "./Card.css";

const Card = ({ emoji, heading, technology, color }) => {
  return (
    <div className="card" style={{ borderColor: { color } }}>
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{technology}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
};

export default Card;
