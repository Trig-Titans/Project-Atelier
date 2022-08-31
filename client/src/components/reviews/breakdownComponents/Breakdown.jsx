import React from 'react';
import {ProductBreakdown} from './ProductBreakdown.jsx';
import {RatingBreakdown} from './RatingBreakdown.jsx';
import {AverageRating} from './AverageRating.jsx';
import {BreakdownContainer} from '../sharedStyles/sharedStyledComponents';
import data from '../apiExample.js';

let Breakdown = ( {productID} ) => {
  let meta = data.reviewsMeta;
  return (<BreakdownContainer>
    <AverageRating />
    <RatingBreakdown />
    <ProductBreakdown />
    </BreakdownContainer>);
}
export default Breakdown;