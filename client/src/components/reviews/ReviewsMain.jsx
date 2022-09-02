import React from 'react';
import Breakdown from './breakdownComponents/Breakdown.jsx';
import ReviewsList from './reviewListComponents/ReviewsList.jsx';
import {Container} from './sharedStyles/sharedStyledComponents.js'



//mainProductName={mainProductName} mainProduct={mainProduct}
let Reviews = ({mainProductName, mainProduct}) => {
  let productID = mainProduct;
  let productName = mainProductName;
  return (<Container>
    <h1>Ratings & Reviews</h1>
    <Breakdown productID={productID}/> <ReviewsList productID={productID} productName={productName} />
    </Container>);
}

export default Reviews;