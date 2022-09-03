import React from 'react';
import {ProductBreakdown} from './ProductBreakdown.jsx';
import {RatingBreakdown} from './RatingBreakdown.jsx';
import {AverageRating} from './AverageRating.jsx';
import {BreakdownContainer} from '../sharedStyles/sharedStyledComponents';
import data from '../apiExample.js';


export const ratingsCountTotal = (ratingsObj) => {
  let totalNumberOfRatings = 0;
  for (let key in ratingsObj) {
    totalNumberOfRatings += Number(ratingsObj[key]);
  }
  return totalNumberOfRatings;
}

export const averageRating = (ratingsObj, total) => {
  // if there are no reviews you can't divide by zero so return 0;
  if (total === 0) { return 0; }
  // define variable for the sum of all the star votes
  let weightedSumOfRatings = 0
  let star, value, averageStarRating;
  //loop through the ratings object to calculate the weightedSum
  for (let key in ratingsObj) {
    star = Number(key);
    value = Number(ratingsObj[key]);
    weightedSumOfRatings += (star * value);
  }
  //calculate final average and return it rounded to tenths place
  averageStarRating = (weightedSumOfRatings/total);
  return averageStarRating.toFixed(1);
}

export const Breakdown = ( {reviewsMeta} ) => {

  // dummy data
  let meta;
  if (reviewsMeta.length === 0) {
    meta = data.reviewsMeta;
  } else {
    meta = reviewsMeta;
  }

  // calculations for total number of reviews and the average rating
  let totalReviews = ratingsCountTotal(meta.ratings);
  let averageStars = averageRating(meta.ratings, totalReviews);

  return (<BreakdownContainer>
    <AverageRating averageStars={averageStars} totalCount={totalReviews}/>
    <RatingBreakdown starRatings={meta.ratings} totalCount={totalReviews} recommended={meta.recommended.true}/>
    <ProductBreakdown characteristics={meta.characteristics}/>
    </BreakdownContainer>);
}
