import React, { useState } from "react";
import Carousel from 'react-multi-carousel';
import axios from 'axios';
import API_KEY from '../../../../config.js'
import Card from './card.jsx'
import styled from 'styled-components';
import "react-multi-carousel/lib/styles.css";
import AddOutfit from './addOutfitCard.jsx'

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
  const product_id = props.addProduct
  const product_style = Number(props.addStyle)

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
  }, [product_id, product_style])

  return (
    <div>
      <Carousel responsive={responsive}>
        {
          [
            <div key={0}>
              <AddOutfit
                handleClick={
                  () => {
                    let style = productData.styles.results.find(result => result.style_id === product_style)

                    if (list.find(item => item.key === product_id+props.addStyle) === undefined) {

                      setList((list) => {

                        return [...list, <Card
                        style={props.addStyle}
                          info={productData.info}
                          picUrls={style.photos.map(photo => photo.url)}
                          category={productData.info.category}
                          name={productData.info.name}
                          price={'$' + style.original_price}
                          salePrice={style.sale_price ?
                            '$' + style.sale_price : null}
                          key={product_id+props.addStyle}
                          btnStyle={'x'}
                          handleXClick = {
                            ()=>{
                            console.log('X button clicked from outfitlist' )
                            setList((list)=> list.filter(item => item.key !== product_id+props.addStyle))
                          }
                        }
                          handleChangeProduct ={props.handleChangeProduct}
                        />]
                      })
                    }
                  }
                }
              />
            </div>
          ].concat(list)
        }
      </Carousel>
    </div>
  );
}

export default Outfit;