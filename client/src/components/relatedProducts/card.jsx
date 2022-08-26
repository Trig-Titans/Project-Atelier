import React from 'react';
import axios from 'axios';

const cardStyle = {
  border: "solid",
  width: "200px",
  height: "299px",
}

const pic = {
  width: "200px",
  height: "195px"
}
const containerStyle = {
  padding: "2px 16px;",
  position: "relative",
  bottom: 0

}

const category_Price = {
  "font-size": '11px'
}

const Card = (props) => {
  axios

  return (
    <div class="card" style={cardStyle}>
    <img src="https://image.shutterstock.com/image-vector/colorful-illustration-test-word-260nw-1438324490.jpg" style={pic}/>
      <div class="container" style={containerStyle}>
      <p style={category_Price}>CATEGORY</p>
        <h5><b>John Doe</b></h5>
        <p style={category_Price}>$123</p>
      </div>
  </div>
  )
}

export default Card;