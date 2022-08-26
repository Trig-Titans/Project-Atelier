import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';


const StyledOverviewCarousel = styled.div`
margin: auto;
grid-area: OvPicture;
`;

export default function OverviewCarousel(props) {
  return (
  <StyledOverviewCarousel>
    <img src="https://m.media-amazon.com/images/I/51NCiuMYKCL._AC_SS450_.jpg" />
  </StyledOverviewCarousel>
  )
}