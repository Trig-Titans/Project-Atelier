import React from 'react';
import {ProductBreakdown} from './ProductBreakdown.jsx';
import {RatingBreakdown} from './RatingBreakdown.jsx';
import {AverageRating} from './AverageRating.jsx';
import {BreakdownContainer} from '../sharedStyles/sharedStyledComponents';

let Breakdown = ( {meta} ) => {
  return (<BreakdownContainer>
    <AverageRating />
    <RatingBreakdown />
    <ProductBreakdown />
    </BreakdownContainer>);
}
export default Breakdown;