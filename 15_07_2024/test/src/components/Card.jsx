import React from "react";
import "./Card.css";
function Card({ Image, Title }) {
  return (
    <card>
      <img src={Image} alt={Title} />
      <h1>{Title}</h1>
      <p>
        loreum ipsumloreum ipsumloreum ipsumloreum ipsumloreum ipsumloreum ipsum
        loreum ipsum loreum ipsumloreum ipsumloreum ipsumloreum ipsumloreum
        ipsumloreum ipsumloreum ipsumloreum ipsumloreum ipsumloreum ipsumloreum
        ipsumloreum ipsumloreum ipsumloreum ipsumloreum ipsumloreum ipsumloreum
        ipsum
      </p>
    </card>
  );
}

export default Card;
