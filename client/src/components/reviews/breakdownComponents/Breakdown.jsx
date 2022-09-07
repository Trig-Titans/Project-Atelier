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

export const Breakdown = ( {reviewsMeta, starsToFilterReviews, setStarsToFilterReviews} ) => {

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


  const closeReview = (starValue) => {
    let temp = starsToFilterReviews;
    let index = temp.indexOf(starValue);
    temp.splice(index, 1);
    var newArray = temp.slice();
    setStarsToFilterReviews(newArray);
  }

  const closeALLReviews = () => {
    setStarsToFilterReviews([]);
  }

  // conditionally render filter-clickable links
  let fiveStars
  if (starsToFilterReviews.indexOf(5) > -1){
    fiveStars = <div style={{padding: '5px 2px', width: '100%'}}><u onClick={()=>{closeReview(5)}}>Filter 5-Star Reviews [x]</u></div>
  } else {
    fiveStars = <div></div>
  }
  let fourStars
  if (starsToFilterReviews.indexOf(4) > -1){
    fourStars = <div style={{padding: '5px 2px', width: '100%'}}><u onClick={()=>{closeReview(4)}}>Filter 4-Star Reviews [x]</u></div>
  } else {
    fourStars = <div></div>
  }
  let threeStars
  if (starsToFilterReviews.indexOf(3) > -1){
    threeStars = <div style={{padding: '5px 2px', width: '100%'}}><u onClick={()=>{closeReview(3)}}>Filter 3-Star Reviews [x]</u></div>
  } else {
    threeStars = <div></div>
  }
  let twoStars
  if (starsToFilterReviews.indexOf(2) > -1){
    twoStars = <div style={{padding: '5px 2px', width: '100%'}}><u onClick={()=>{closeReview(2)}}>Filter 2-Star Reviews [x]</u></div>
  } else {
    twoStars = <div></div>
  }
  let oneStars
  if (starsToFilterReviews.indexOf(1) > -1){
    oneStars = <div style={{padding: '5px 2px', width: '100%'}}><u onClick={()=>{closeReview(1)}}>Filter 1-Star Reviews [x]</u></div>
  } else {
    oneStars = <div></div>
  }

  let closeAllReviews
  if (starsToFilterReviews.length > 0) {
    closeAllReviews = <div style={{padding: '5px 2px', width: '100%'}}><u onClick={()=>{closeALLReviews()}}>Remove all filters[x]</u></div>
  } else {
    closeAllReviews = <div></div>
  }

  return (<BreakdownContainer>
    <AverageRating averageStars={averageStars} totalCount={totalReviews}/>
    <RatingBreakdown starRatings={meta.ratings} totalCount={totalReviews} recommended={meta.recommended.true} starsToFilterReviews={starsToFilterReviews} setStarsToFilterReviews={setStarsToFilterReviews}/>
    <ProductBreakdown characteristics={meta.characteristics}/>
    {fiveStars}
    {fourStars}
    {threeStars}
    {twoStars}
    {oneStars}
    {closeAllReviews}
    </BreakdownContainer>);
}
