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


  return (
    <div>


      <Carousel responsive={responsive}>
      <AddOutfit/>
      {/*map added cards*/}
      </Carousel>
    </div>
  );
}

export default Outfit;