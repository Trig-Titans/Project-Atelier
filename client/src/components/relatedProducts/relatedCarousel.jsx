/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Carousel from 'react-multi-carousel';
import axios from 'axios';
import API_KEY from '../../../../config.js'
import Card from './card.jsx'
import styled from 'styled-components';
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.25,
    slidesToSlide: .75
  }
};

const RelatedCarousel = (props) => {
  const [accumulatedProductData, setAccumulatedProductData] = React.useState([]);

  const product_id = props.product_id
  const product_style = props.product_style
  console.log('RelatedCarousel component called')

  React.useEffect(() => {

    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${product_id}/related`, { headers: { Authorization: API_KEY } })
      .then((response) => {
        let arrayOfRelatedProductIDs = response.data;

        Promise.all(arrayOfRelatedProductIDs.map(id => {
          return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}`, { headers: { Authorization: API_KEY } })
            .then(response => {
              let productInfoObj = response.data

              return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}/styles`, {
                headers: { Authorization: API_KEY }
              })
                .catch(err => { console.log('ERROR IN ACCUMULATED STYLES CALL FOR RELATED: ', err) })
                .then(response => {
                  let productStylesObj = response.data;

                  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=${id}`, {
                    headers: { Authorization: API_KEY }
                  })
                    .catch(err => { console.log('ERROR IN ACCUMULATED REVIEW/META CALL FOR RELATED: ', err) })
                    .then(response => {
                      let productReviewsObj = response.data

                      let productData = {
                        info: productInfoObj,
                        styles: productStylesObj,
                        reviews: productReviewsObj
                      }

                      return productData
                    })
                    .catch(err => { console.log('ERROR IN ACCUMULATED DATA FOR RELATED: ', err) })
                })
            })
        }))
          .then(response => {
            setAccumulatedProductData(response)
          })
          .catch(err => { console.log('ERROR IN PROMISE ALL CALL FOR RELATED: ', err) })
      })
  }, [product_id]);

  return (
    <div>

      <Carousel responsive={responsive}>


        {
        accumulatedProductData.map((product, index) => {
          let style = product.styles.results[0]

          return (
            <Card
             style={style.style_id}
             info={product.info}
              picUrls={style.photos.map(photo => photo.url !== null? photo.url : 'https://www.foodnavigator-usa.com/var/wrbm_gb_food_pharma/storage/images/_aliases/news_large/9/7/3/7/217379-6-eng-GB/IDBS-SIC-Food-20122.jpg')}
              category={product.info.category}
              name={product.info.name}
              price={'$' + style.original_price}
              salePrice={style.sale_price ?
                '$' + style.sale_price : null}
              key={index}
              btnStyle={'star'}
              setModalOpen = {props.setModalOpen}
              handleChangeProduct ={props.handleChangeProduct}
             />
          )
        })}

      </Carousel>
    </div>
  );
}

export default RelatedCarousel;