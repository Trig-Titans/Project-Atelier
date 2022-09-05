import React, { useState } from "react";
import Carousel from 'react-multi-carousel';
import axios from 'axios';
import API_KEY from '../../../../config.js'
import Card from './card.jsx'
import styled from 'styled-components';
import "react-multi-carousel/lib/styles.css";
import AddOutfit from './addOutfitCard.jsx';
import {findAverageRating} from '.././overview/GalleryView.jsx';

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

const Layer = styled.div`
 width: 200px;
  height: 299px;
    z-index: 0;

`

const Outfit = (props) => {
  const [list, setList] = React.useState([])
  const product_id = props.addProduct
  const product_style = Number(props.addStyle)

  const handleClick= () => {
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
                    starCount = {findAverageRating( props.productData.reviews.ratings )}
                  />
                ]
        })
      }
    }

  return (
    <div>
      <span>
      <AddOutfit  handleClick={ handleClick}/>
      </span>
      <Carousel responsive={responsive}>
        {
          [<Layer key ={0} />  ].concat(list)
        }
      </Carousel>
    </div>
  );
}

export default Outfit;