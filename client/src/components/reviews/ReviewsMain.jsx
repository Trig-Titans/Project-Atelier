import React, {useState} from 'react';
import Breakdown from './Breakdown.jsx';
import ReviewsList from './ReviewsList.jsx';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`

let Reviews = () => {
  // let [review, setReview] = useState()
  return (<Container>
    <h1>Ratings & Reviews</h1>
    <Breakdown /> <ReviewsList />
    </Container>);
}

export default Reviews;