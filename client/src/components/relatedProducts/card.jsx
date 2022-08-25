import React from 'react';
import axios from 'axios';

const cardStyle = {
  /* Add shadows to create the "card" effect */
  "box-shadow": "0 4px 8px 0 rgba(0,0,0,0.2);",
  transition: "0.3s;",
  border: "solid",
  width: "max-content"
}

/* Add some padding inside the card container */
const containerStyle = {
  padding: "2px 16px;",

}

const Card = (props) => {

  return (
    <div class="card" style={cardStyle}>
    <img src="https://image.shutterstock.com/image-vector/colorful-illustration-test-word-260nw-1438324490.jpg"/>
      <div class="container" style={containerStyle}>
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
      </div>
  </div>
  )
}

export default Card;