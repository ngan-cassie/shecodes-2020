import React from "react";

export const Card = (props) => (
  <div className="card-container">
    <img alt="" src={props.image} />

    <p> {props.caption} </p>
  </div>
);

export default Card;
