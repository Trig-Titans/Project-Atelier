import React from 'react';
import {ProductBreakdown} from './ProductBreakdown.jsx';
import {RatingBreakdown} from './RatingBreakdown.jsx';
import {AverageRating} from './AverageRating.jsx';
import {BreakdownContainer} from '../sharedStyles/sharedStyledComponents';
import data from '../apiExample.js';

let ratingsCountTotal = (ratingsObj) => {
  let sum = 0;
  for (let key in ratingsObj) {
    sum += Number(ratingsObj[key]);
  }
  return sum;
}

let averageRating = (ratingsObj, total) => {
  // if there are no reviews you can't divide by zero so return 0;
  if (total === 0) { return 0; }
  // define variable for the sum of all the star votes
  let weightedSum = 0
  let star, value, average;
  //loop through the ratings object to calculate the weightedSum
  for (let key in ratingsObj) {
    star = Number(key);
    value = Number(ratingsObj[key]);
    weightedSum += (star * value);
  }
  //calculate final average and return it rounded to tenths place
  average = (weightedSum/total);
  return average.toFixed(1);
}

let Breakdown = ( {productID} ) => {
  // dummy data
  const meta = data.reviewsMeta;

  // calculations for total number of reviews and the average rating
  let totalReviews = ratingsCountTotal(meta.ratings);
  let averageStars = averageRating(meta.ratings, totalReviews);

  return (<BreakdownContainer>
    <AverageRating averageStars={averageStars} totalCount={totalReviews}/>
    <RatingBreakdown starRatings={meta.ratings} totalCount={totalReviews} recommended={meta.recommended.true}/>
    <ProductBreakdown characteristics={meta.characteristics}/>
    </BreakdownContainer>);
}
export default Breakdown;