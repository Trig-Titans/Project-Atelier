/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
// import styled from 'styled-components';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

function RelatedProducts(props) {
  const [count, setCount] = useState(0);
  return (
    <Carousel responsive={responsive}>
        <div>
            <img src="https://image.shutterstock.com/image-vector/colorful-illustration-test-word-260nw-1438324490.jpg" />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src="https://image.shutterstock.com/image-vector/colorful-illustration-test-word-260nw-1438324490.jpg" />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src="https://image.shutterstock.com/image-vector/colorful-illustration-test-word-260nw-1438324490.jpg" />
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>
);
}

export default RelatedProducts;