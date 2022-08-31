import React from 'react';
import {BarGraph} from './BarGraph.jsx';
import {BarGraphContainer} from '../sharedStyles/sharedStyledComponents';

let RatingBreakdown = ({ starRatings, totalCount }) => {
  console.log("🚀 ~ file: RatingBreakdown.jsx ~ line 4 ~ totalCount", totalCount);
  console.log("🚀 ~ file: RatingBreakdown.jsx ~ line 4 ~ starRatings", starRatings);
  let findPercent = (star) => { return 100*starRatings[star]/totalCount; }
  let percent = {
    5: findPercent(5),
    4: findPercent(4),
    3: findPercent(3),
    2: findPercent(2),
    1: findPercent(1)
  }
  return (<div>
    <a>5 Stars</a> <BarGraphContainer><BarGraph percent={percent[5]}/></BarGraphContainer> <p>({starRatings[5]})</p>
    <a>4 Stars</a> <BarGraphContainer><BarGraph percent={percent[4]}/></BarGraphContainer> <p>({starRatings[4]})</p>
    <a>3 Stars</a> <BarGraphContainer><BarGraph percent={percent[3]}/></BarGraphContainer> <p>({starRatings[3]})</p>
    <a>2 Stars</a> <BarGraphContainer><BarGraph percent={percent[2]}/></BarGraphContainer> <p>({starRatings[2]})</p>
    <a>1 Stars</a> <BarGraphContainer><BarGraph percent={percent[1]}/></BarGraphContainer> <p>({starRatings[1]})</p>
  </div>);
};

export {RatingBreakdown};