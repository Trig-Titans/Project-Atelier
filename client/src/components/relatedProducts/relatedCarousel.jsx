/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Carousel from 'react-multi-carousel';
import axios from 'axios';
import API_KEY from '../../../../config.js'
import Card from './card.jsx'
import styled from 'styled-components';
import "react-multi-carousel/lib/styles.css";
import {findAverageRating} from '.././overview/GalleryView.jsx'

const responsive = {

  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.25,
    slidesToSlide: .75
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

// let zIndex = {
//   zIndex: 10
// }


// const CustomLeftArrow = ({ onClick }) => (
//   <i style ={zIndex} onClick={() => onClick()} className="custom-left-arrow" />
// );
// const CustomRightArrow = ({ onClick }) => {
//   return <i  style ={zIndex} className="custom-right-arrow" onClick={() => onClick()} />;
// };

const RelatedCarousel = (props) => {

  return (
    <div
    // style={{width: "60%"}}
    id='relatedProducts'
    data-testid = 'relatedCarousel'>
      <Carousel

      responsive={responsive} >

        {
          props.accumulatedProductData.map((product, index) => {
            let style = product.styles.results[0];
            let info = product.info;
            let starCount = findAverageRating( product.reviews.ratings )

            return (
                <Card
                style={style.style_id}
                info={info}
                  picUrls={style.photos.map(photo => photo.url !== null? photo.url : 'https://www.foodnavigator-usa.com/var/wrbm_gb_food_pharma/storage/images/_aliases/news_large/9/7/3/7/217379-6-eng-GB/IDBS-SIC-Food-20122.jpg')}
                  category={info.category}
                  name={info.name}
                  price={'$' + style.original_price}
                  salePrice={style.sale_price ?
                    '$' + style.sale_price : null}
                  key={index}
                  btnStyle={'star'}
                  setModalOpen = {props.setModalOpen}
                  handleChangeProduct ={props.handleChangeProduct}
                  setProductCardClickedOn ={props.setProductCardClickedOn}
                  starCount = {starCount}
                />
              )
          })
        }


      </Carousel>
    </div>
  );
}

export default RelatedCarousel;