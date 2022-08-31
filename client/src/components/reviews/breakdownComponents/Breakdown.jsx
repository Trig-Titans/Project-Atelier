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
  if (total === 0) {
    return 0;
  }
  let weightedSum = 0
  let star, value;
  for (let key in ratingsObj) {
    star = Number(key);
    value = Number(ratingsObj[key]);
    weightedSum += (star * value);
  }
  let average = (weightedSum/total);
  return average.toFixed(1);
}

let Breakdown = ( {productID} ) => {
  let meta = data.reviewsMeta;
  console.log('meta', meta);

  let totalReviews = ratingsCountTotal(meta.ratings);
  let averageStars = averageRating(meta.ratings, totalReviews);
  // console.log('averageStars', averageStars);




  return (<BreakdownContainer>
    <AverageRating averageStars={averageStars} totalCount={totalReviews}/>
    <RatingBreakdown starRatings={meta.ratings} totalCount={totalReviews} recommended={meta.recommended.true}/>
    <ProductBreakdown />
    </BreakdownContainer>);
}
export default Breakdown;