import styled from 'styled-components';
import React, { useState } from "react";
import StarRatings from 'react-star-ratings';

const StyledOverviewStars = styled.div`
grid-area: OvStar;
margin-top: 50px
`;

export default function OverviewStars({ stars }) {
  return (
    <StyledOverviewStars data-testid="stars">
        <StarRatings
          rating={3.5}
          starRatedColor="gray"
          numberOfStars={5}
          starDimension="15px"
          starHoverColor="yellow"
          name='rating'
        />
      </StyledOverviewStars>
  );
}