import React from "react";
import StarRatings from 'react-star-ratings';
import {StyledOverviewStars} from './sharedStyles/sharedStyledComponents.js'



export const OverviewStars = ({ stars, starSizePx }) => {
  return (
    <StyledOverviewStars data-testid="stars">
        <StarRatings
          rating={parseFloat(stars)}
          starRatedColor="gray"
          numberOfStars={5}
          starDimension={starSizePx}
          starSpacing='2px'
        />
      </StyledOverviewStars>
  );
}