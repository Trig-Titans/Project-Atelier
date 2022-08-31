import React from 'react';
import { Button, Container } from '../sharedStyles/sharedStyledComponents.js'

export const ReviewButtons = ( { wholeReviewList, setReviewIndex, reviewIndex } ) => {
  let moreReviews;
  if(wholeReviewList) {
    moreReviews = <Button onClick={() => {setReviewIndex(reviewIndex + 2)}}>More Reviews</Button>
  }
  return (
    <Container>
      {moreReviews}
      <Button primary>Add Reivew +</Button>
    </Container>
  );
}
