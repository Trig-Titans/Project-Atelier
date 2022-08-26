import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';


const StyledOverviewCarousel = styled.div`
grid-area: OvPicture;
`;

export default function OverviewCarousel({ styles }) {
  return (
  <StyledOverviewCarousel>
    <Carousel>
      <div>
          <img src="https://images.unsplash.com/photo-1544009520-e2ea9189f15e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" />
      </div>
      <div>
          <img src="https://images.unsplash.com/photo-1544085311-11a028465b03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" />
      </div>
      <div>
          <img src="https://images.unsplash.com/photo-1536683402757-75f8d0dfa419?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" />
      </div>
    </Carousel>
  </StyledOverviewCarousel>
  )
}