import React, { useState } from "react";
import Carousel from 'react-multi-carousel';
import axios from 'axios';
import API_KEY from '../../../../config.js'
import Card from './card.jsx'
import styled from 'styled-components';
import "react-multi-carousel/lib/styles.css";
import AddOutfit from './addOutfitCard.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.25,
    slidesToSlide: .75
  }
};

const Outfit = (props) => {
  const [productData, setProductData] = React.useState(null);
  const [input, setInput] = React.useState(<div>test</div>)
  const [list, setList] = React.useState([])


  //WILL RECIEVE FROM PROPS
  const product_id = "37314"
  const product_style = 221014

  React.useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${product_id}`, { headers: { Authorization: API_KEY } })
      .then(response => {
        let productInfoObj = response.data

        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${product_id}/styles`, {
          headers: { Authorization: API_KEY }
        })
          .catch(err => { console.log('ERROR IN STYLES CALL FOR OUTFIT: ', err) })
          .then(response => {
            let productStylesObj = response.data;

            axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=${product_id}`, {
              headers: { Authorization: API_KEY }
            })
              .catch(err => { console.log('ERROR IN REVIEW CALL FOR OUTFIT: ', err) })
              .then(response => {
                let productReviewsObj = response.data

                setProductData({
                  info: productInfoObj,
                  styles: productStylesObj,
                  reviews: productReviewsObj
                })
              })
              .catch(err => (console.log('ERROR IN setProductData CALL FOR OUTFIT: ', err)))
          })
      })
  }, [])

  return (
    <div>
      <Carousel responsive={responsive}>
        <div>
          <AddOutfit
            handleClick={
              () => {
                let style = productData.styles.results.filter(result => result.style_id === product_style)[0]

                setList((list) => {
                  return [...list, <Card
                    picUrls={style.photos.map(photo => photo.url)}
                    category={productData.info.category}
                    name={productData.info.name}
                    price={'$' + style.original_price}
                    salePrice={style.sale_price ?
                      '$' + style.sale_price : list.length % 2 === 0 ?
                        '$7327.00' : null}
                    key={list.length}
                    button={<FontAwesomeIcon icon={faCircleXmark} />}
                  />]
                })
              }
            }
          />
        </div>

        {list.map(item => item)}

      </Carousel>
    </div>
  );
}

export default Outfit;