import styled from 'styled-components';
import React, { useState } from "react";
import StarRatings from 'react-star-ratings';

const StyledOverviewStars = styled.div`
padding: 10px;
grid-area: OvStar;
margin-top: 50px
`;

export default function OverviewStars({ stars, reviewCount }) {
  function handleScroll (e) {
    let offsetTop  = document.getElementById(e).offsetTop;
    window.scrollTo({
      top: offsetTop-100,
      behavior: "smooth"
    });
  }

  return (
    <StyledOverviewStars data-testid="stars">
        <StarRatings
          rating={parseFloat(stars)}
          starRatedColor="gray"
          numberOfStars={5}
          starDimension="15px"
          starHoverColor="yellow"
          name='rating'
        />
        <div data-testid='review-count' onClick={() => {
          handleScroll("reviews")
        }}style={{cursor: 'pointer', textDecoration: 'none', color: '#800000'}}>Read all {reviewCount} reviews</div>
      </StyledOverviewStars>
  );
}