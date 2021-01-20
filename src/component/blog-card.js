import React from "react";
import "./blog-card.styles.css";
export const Card = (props) => (
  <div className="card-container">
    <img src={props.image} />
    <p> {props.caption}</p>
  </div>
);

export default Card;
