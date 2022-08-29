/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import axios from 'axios';
import API_KEY from '../../../../config.js'
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

 const RelatedProducts = (props) => {
  const [productID, setProductID,] = React.useState(null)
  const [relatedProductIDs, setRelatedProductIDs] = React.useState(null);
  const product_id = "37313"

  React.useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${product_id}/related`, { headers: {Authorization: API_KEY }
  })
  .then((response) => {
    //console.log(response.data)
    setRelatedProductIDs(response.data);
    // Promise.all(response.data.map(id => {
    //   axios.get()
    // }))
  })
  }, []);





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