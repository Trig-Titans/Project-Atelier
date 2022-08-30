import React from 'react';
import {ProductBreakdown} from './ProductBreakdown.jsx';
import {RatingBreakdown} from './RatingBreakdown.jsx';
import {AverageRating} from './AverageRating.jsx';

let Breakdown = ( {meta} ) => {
  return (<div>
    <AverageRating />
    <RatingBreakdown />
    <ProductBreakdown />
    </div>);
}
export default Breakdown;