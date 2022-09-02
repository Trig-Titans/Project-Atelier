import React, {useState} from 'react';
import { Button, Container } from '../sharedStyles/sharedStyledComponents.js';
import {NewReview} from '../NewReview.jsx';

export const ReviewButtons = ( { wholeReviewList, setReviewIndex, reviewIndex, productName } ) => {
  let [formVisable, setFormVisable] = useState(false)
  let moreReviews;
  if(wholeReviewList.length > reviewIndex) {
    moreReviews = <Button onClick={() => {setReviewIndex(reviewIndex + 2)}}>More Reviews</Button>
  } else {
    moreReviews = <div></div>
  }
  const submitReview = (e) => {
    e.preventDefault();
    console.log(e);
  }

  return (
    <Container>
      {formVisable ? <NewReview setFormVisable={setFormVisable} productName={productName} submitReview={submitReview}/> : <div></div>}
      {moreReviews}
      <Button primary onClick={() => {setFormVisable(true)}}>Add Reivew +</Button>
    </Container>
  );
}
