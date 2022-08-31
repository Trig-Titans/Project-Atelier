import React, { useState } from "react";
import Carousel from 'react-multi-carousel';
import axios from 'axios';
import API_KEY from '../../../../config.js'
import Card from './card.jsx'
import styled from 'styled-components';
import "react-multi-carousel/lib/styles.css";
import AddOutfit from './addOutfitCard.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.25,
    slidesToSlide: .75
  }
};

const Outfit = (props) => {
  const [productData, setProductData] = React.useState([]);
  const product_id = "37314"
  const product_style = 0

  React.useEffect(() => {

    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${product_id}`, { headers: { Authorization: API_KEY } })
      .then(response => {
        let productInfoObj = response.data

        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${product_id}/styles`, {
          headers: { Authorization: API_KEY }
        })
          .then(response => {
            let productStylesObj = response.data;

            axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=${product_id}`, {
              headers: { Authorization: API_KEY }
            })
              .then(response => {
                let productReviewsObj = response.data

                setProductData({
                  info: productInfoObj,
                  styles: productStylesObj.results[product_style],
                  reviews: productReviewsObj
                })
              })
          })
      })
  }, []);

  return (
    <div>
      <Carousel responsive={responsive}>
        <AddOutfit handleClick = {()=>{console.log('test add button')}}/>
        {/*map added cards*/}
      </Carousel>
    </div>
  );
}

export default Outfit;