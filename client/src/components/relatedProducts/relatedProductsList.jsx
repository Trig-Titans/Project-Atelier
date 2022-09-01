/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Carousel from 'react-multi-carousel';
import axios from 'axios';
import API_KEY from '../../../../config.js'
import Card from './card.jsx'
import styled from 'styled-components';
import "react-multi-carousel/lib/styles.css";
import StarBtn from './relatedBtn.jsx'
import Outfit from './outfitList.jsx'

const List = styled.div`
  margin-left: 23%;
  width:53%;
`
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.25,
    slidesToSlide: .75
  }
};

const RelatedProducts = (props) => {
  const [accumulatedProductData, setAccumulatedProductData] = React.useState([]);
  const product_id = "37314"

  React.useEffect(() => {

    //FIND LIST OF RELATED PRODUCT IDS
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${product_id}/related`, { headers: { Authorization: API_KEY } })
      .then((response) => {
        let arrayOfRelatedProductIDs = response.data;

        //FIND All RELATED PRODUCTS INFO
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
  }, []);

  return (
    <List>
      <br />
      <br />
      <Carousel responsive={responsive}>

        {accumulatedProductData.map((product, index) => {
          let style = product.styles.results[0]

          return (
            <Card
              picUrls={style.photos.map(photo => photo.url)}
              category={product.info.category}
              name={product.info.name}
              price={'$' + style.original_price}
              salePrice={style.sale_price ?
                '$' + style.sale_price : index % 2 === 0 ?
                  '$7327.00' : null}
              key={index}
              button={<StarBtn />} />
          )
        })}

      </Carousel>
      <br />
      <br />
      <Outfit />
    </List>
  );
}

export default RelatedProducts;