import React from 'react';
import {BarGraph} from './BarGraph.jsx';
import {BarGraphContainer, RecommendationContainer} from '../sharedStyles/sharedStyledComponents';

let RatingBreakdown = ({ starRatings, totalCount, recommended }) => {
  console.log("🚀 ~ file: RatingBreakdown.jsx ~ line 4 ~ totalCount", totalCount);
  console.log("🚀 ~ file: RatingBreakdown.jsx ~ line 4 ~ starRatings", starRatings);
  let findPercent = (star) => { return 100*starRatings[star]/totalCount; }
  let recommendation = 100*recommended/totalCount;

  let percent = {
    5: findPercent(5),
    4: findPercent(4),
    3: findPercent(3),
    2: findPercent(2),
    1: findPercent(1)
  }
  return (<div>
    <RecommendationContainer><a>5 Stars</a> <BarGraphContainer><BarGraph percent={percent[5]}/></BarGraphContainer> <p>({starRatings[5]})</p></RecommendationContainer>
    <RecommendationContainer><a>4 Stars</a> <BarGraphContainer><BarGraph percent={percent[4]}/></BarGraphContainer> <p>({starRatings[4]})</p></RecommendationContainer>
    <RecommendationContainer><a>3 Stars</a> <BarGraphContainer><BarGraph percent={percent[3]}/></BarGraphContainer> <p>({starRatings[3]})</p></RecommendationContainer>
    <RecommendationContainer><a>2 Stars</a> <BarGraphContainer><BarGraph percent={percent[2]}/></BarGraphContainer> <p>({starRatings[2]})</p></RecommendationContainer>
    <RecommendationContainer><a>1 Stars</a> <BarGraphContainer><BarGraph percent={percent[1]}/></BarGraphContainer> <p>({starRatings[1]})</p></RecommendationContainer>
    <p>{recommendation.toFixed(0)}% of reviewers recommend this product</p>
  </div>);
};

export {RatingBreakdown};