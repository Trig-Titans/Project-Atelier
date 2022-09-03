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

  const [input, setInput] = React.useState(<div>test</div>)
  const [list, setList] = React.useState([])
  const product_id = props.addProduct
  const product_style = Number(props.addStyle)

  return (
    <div>
      <Carousel responsive={responsive}>
        {
          [
            <div key={0}>
              <AddOutfit
                handleClick={
                  () => {
                    let style = props.productData.styles.results.find(result => result.style_id === props.addStyle)
                    console.log('style info of added outfit:', style)

                    if (list.find(item => item.key === props.addProduct+props.addStyle) === undefined) {

                      setList((list) => {

                        return [
                                ...list,
                                <Card
                                  style={props.addStyle}
                                  info={props.productData.info}
                                  picUrls={
                                  style.photos.map(photo => photo.url !== null ?
                                      photo.url : 'https://www.foodnavigator-usa.com/var/wrbm_gb_food_pharma/storage/images/_aliases/news_large/9/7/3/7/217379-6-eng-GB/IDBS-SIC-Food-20122.jpg')
                                    }
                                  category={props.productData.info.category}
                                  name={props.productData.info.name}
                                  price={'$' + style.original_price}
                                  salePrice={
                                    style.sale_price ?
                                      '$' + style.sale_price : null
                                    }
                                  key={product_id+props.addStyle}
                                  btnStyle={'x'}
                                  handleXClick = {
                                    ()=>{

                                      console.log('X button clicked from outfitlist' )
                                      setList((list)=> list.filter(item => item.key !== product_id+props.addStyle))
                                    }
                                  }
                                  handleChangeProduct ={props.handleChangeProduct}
                                />
                              ]
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