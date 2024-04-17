import React from "react";
import DefaultIcon from "../assets/person.jpg";
import "./Card.css";

function Card({ name, image }) {
  return (
    <div className="Candidate-card">
      <img
        src={DefaultIcon}
        alt="Candidate"
        style={{ width: "100px", height: "100px" }}
      />
      <h2>{name}</h2>
    </div>
  );
}

export default Card;
