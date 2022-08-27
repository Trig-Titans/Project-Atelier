import React, {useState} from 'react';
import Breakdown from './breakdownComponents/Breakdown.jsx';
import ReviewsList from './reviewListComponents/ReviewsList.jsx';
import {Container} from './sharedStyles/sharedStyledComponents.js'
import data from './apiExample.js'



let Reviews = () => {
  // let [review, setReview] = useState()
  return (<Container>
    <h1>Ratings & Reviews</h1>
    <Breakdown meta={data.reviewsMeta}/> <ReviewsList reviews={data.reviews}/>
    </Container>);
}

export default Reviews;