import React, {useState} from 'react';
import Breakdown from './Breakdown.jsx';
import ReviewsList from './ReviewsList.jsx';
import styled from 'styled-components';
import data from './apiExample.js'

const Container = styled.div`
  text-align: center;
`

let Reviews = () => {
  // let [review, setReview] = useState()
  return (<Container>
    <h1>Ratings & Reviews</h1>
    <Breakdown meta={data.reviewsMeta}/> <ReviewsList reviews={data.reviews} />
    </Container>);
}

export default Reviews;