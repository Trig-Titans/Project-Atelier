import React from 'react';
import {BarGraph} from './BarGraph.jsx';
import {BarGraphContainer, RecommendationContainer, StarFilterLink} from '../sharedStyles/sharedStyledComponents';


export const RatingBreakdown = ({ starRatings, totalCount, recommended, starsToFilterReviews, setStarsToFilterReviews }) => {

  const recommendation = 100*recommended/totalCount;

  const findPercent = (star) => {
    return 100*starRatings[star]/totalCount;
  }

  const percent = {
    5: findPercent(5),
    4: findPercent(4),
    3: findPercent(3),
    2: findPercent(2),
    1: findPercent(1)
  }

  const clickStarFilter = (clickedRating) => {

    let temp = starsToFilterReviews;
    // if clicked rating is already in the array, remove it?
    if (temp.indexOf(clickedRating) > -1) {
      let index = temp.indexOf(clickedRating);
      temp.splice(index, 1);
      var newArray = temp.slice();
      setStarsToFilterReviews(newArray);
    } else {
      temp.push(clickedRating);
      var newArray = temp.slice();
      setStarsToFilterReviews(newArray);
    }
  }

  return (<div>
    <RecommendationContainer>
      <StarFilterLink onClick={() => {clickStarFilter(5)}}>5 Stars</StarFilterLink>
      <BarGraphContainer><BarGraph percent={percent[5]}/></BarGraphContainer>
      <p>({starRatings[5]})</p>
    </RecommendationContainer>
    <RecommendationContainer>
      <StarFilterLink onClick={() => {clickStarFilter(4)}}>4 Stars</StarFilterLink>
      <BarGraphContainer><BarGraph percent={percent[4]}/></BarGraphContainer>
      <p>({starRatings[4]})</p>
    </RecommendationContainer>
    <RecommendationContainer>
      <StarFilterLink onClick={() => {clickStarFilter(3)}}>3 Stars</StarFilterLink>
      <BarGraphContainer><BarGraph percent={percent[3]}/></BarGraphContainer>
      <p>({starRatings[3]})</p>
    </RecommendationContainer>
    <RecommendationContainer>
      <StarFilterLink onClick={() => {clickStarFilter(2)}}>2 Stars</StarFilterLink>
      <BarGraphContainer><BarGraph percent={percent[2]}/></BarGraphContainer>
      <p>({starRatings[2]})</p>
    </RecommendationContainer>
    <RecommendationContainer>
      <StarFilterLink onClick={() => {clickStarFilter(1)}}>1 Stars</StarFilterLink>
      <BarGraphContainer><BarGraph percent={percent[1]}/></BarGraphContainer>
      <p>({starRatings[1]})</p>
    </RecommendationContainer>
    <p>{recommendation.toFixed(0)}% of reviewers recommend this product</p>
  </div>);
};