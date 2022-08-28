/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import axios from 'axios';
import API_KEY from '../../../../config.js'
import Card from './card.jsx'
// import styled from 'styled-components';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const RelatedProducts = (props) => {
  const [accumulatedProductData, setAccumulatedProductData] = React.useState([]);
  const product_id = "37313"

  React.useEffect(() => {
    //FIND LIST OF RELATED PRODUCT IDS
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${product_id}/related`, { headers: { Authorization: API_KEY } })
      .then((response) => {
        let arrayOfRelatedProductIDs = response.data

        //FIND All RELATED PRODUCTS INFO
        Promise.all(arrayOfRelatedProductIDs.map(id => {
          return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}`, { headers: { Authorization: API_KEY } })
            .then(response => {
              let productInfoObj = response.data

              return productInfoObj
            })
        }))
          .then(response => {
            let productsInfoArray = response;

            //ONCE WE HAVE ALL RELATED PRODUCTS FIND THE STYLES FOR EACH PRODUCT
            Promise.all(productsInfoArray.map(product => {
              return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${product.id}/styles`, {
                headers: { Authorization: API_KEY }
              })
                .then(response => {
                  let productStylesObj = response.data;

                  return productStylesObj;
                })
            }))
              .then(response => {

                let productsStylesArray = response;

                Promise.all(productsStylesArray.map(product => {
                  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=${product.product_id}`, {
                    headers: { Authorization: API_KEY }
                  })
                    .then(response => {
                      let productReviewsObj = response.data

                      return productReviewsObj
                    })
                }))
                  .then(response => {
                    let productReviewsArray = response

                    productsInfoArray.map((product, index) => {
                      product.styles = productsStylesArray[index];
                      product.reviews = productReviewsArray[index];
                    })

                    setAccumulatedProductData(productsInfoArray);
                  })

              })
          })
      })
  }, []);


  return (
    <Carousel responsive={responsive}>
      {accumulatedProductData.map((product, index) =>{

        let style = product.styles.results.length > 1 ?
          product.styles.results.find(result => result['default?'] === true) !== undefined ?
          product.styles.results.find(result => result['default?'] === true)
          : product.styles.results[0]
          : product.styles.results[0];

          console.log('style', style)
          // console.log('styleUrl', style.photos[0].url)


        return (<Card picUrl= {style.photos[0]['url']} category={product.category} name={product.name} price={style.original_price} salePrice={style.sale_price} key={index} />)
      } )}
    </Carousel>
  );
}

export default RelatedProducts;