import React from 'react';
import Breakdown from './breakdownComponents/Breakdown.jsx';
import ReviewsList from './reviewListComponents/ReviewsList.jsx';
import {Container} from './sharedStyles/sharedStyledComponents.js'




let Reviews = () => {
  let productID = '37314';
  return (<div >
    <h1>Ratings & Reviews</h1>
    <Breakdown productID={productID}/> <ReviewsList productID={productID} />
    </div>);
}

export default Reviews;