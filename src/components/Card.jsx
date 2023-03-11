import React from "react";
import './Card.css'


function Card(props) {
  return (
    <div className="Card">
      <p>Hola {props.userName}</p>
      <p>tu comida favorita es: </p>
      <div className="ComidaFavorita">{props.comida}</div>
    </div>
  );
}

export default Card;