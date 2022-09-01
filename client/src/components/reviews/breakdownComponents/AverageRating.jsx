import React from 'react';
import {RecommendationContainer} from '../sharedStyles/sharedStyledComponents.js'

let AverageRating = ({averageStars, totalCount}) => {
  return(<RecommendationContainer>
    <h1>{averageStars}</h1>
    <p>Star Component</p>
    <p>({totalCount})</p>
  </RecommendationContainer>);
};

export {AverageRating};