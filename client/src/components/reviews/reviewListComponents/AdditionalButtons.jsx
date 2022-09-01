import React, {useState} from 'react';
import { Button, Container } from '../sharedStyles/sharedStyledComponents.js';
import {NewReview} from '../NewReview.jsx';

export const ReviewButtons = ( { wholeReviewList, setReviewIndex, reviewIndex } ) => {
  let [formVisable, setFormVisable] = useState(false)
  let moreReviews;
  if(wholeReviewList.length > reviewIndex) {
    moreReviews = <Button onClick={() => {setReviewIndex(reviewIndex + 2)}}>More Reviews</Button>
  } else {
    moreReviews = <div></div>
  }
  return (
    <Container>
      {formVisable ? <NewReview setFormVisable={setFormVisable} /> : <div></div>}
      {moreReviews}
      <Button primary onClick={() => {setFormVisable(true)}}>Add Reivew +</Button>
    </Container>
  );
}
