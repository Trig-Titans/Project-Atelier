import React from "react";
import {RecommendationContainer} from '../sharedStyles/sharedStyledComponents.js';
import {OverviewStars} from '../StarComponent.jsx';

let AverageRating = ({averageStars, totalCount}) => {
  return(<RecommendationContainer>
    <h1>{averageStars}</h1>
    <OverviewStars stars={averageStars} starSizePx={'25px'}/>
    <p>({totalCount})</p>
  </RecommendationContainer>);
};

export {AverageRating};