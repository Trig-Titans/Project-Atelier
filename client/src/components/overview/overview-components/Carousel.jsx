import React, { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';


const StyledOverviewCarousel = styled.div`
grid-area: OvPicture;
`;

export default function OverviewCarousel({ photos }) {
  var photoList = photos.map((photo) => {
    return <div key={photo.url}><img src={photo.url}/></div>
  })
  return (
  <StyledOverviewCarousel>
    <Carousel>
      {photoList}
    </Carousel>
  </StyledOverviewCarousel>
  )
}