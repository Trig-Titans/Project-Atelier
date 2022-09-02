import styled from 'styled-components';
import React, { useState } from "react";
import StarRatings from 'react-star-ratings';

const StyledOverviewStars = styled.div`
padding: 10px;
grid-area: OvStar;
margin-top: 50px
`;

export default function OverviewStars({ stars, reviewCount }) {
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
        <div style={{cursor: 'pointer', textDecoration: 'none', color: '#6699cc'}}>Read all {reviewCount} reviews</div>
      </StyledOverviewStars>
  );
}