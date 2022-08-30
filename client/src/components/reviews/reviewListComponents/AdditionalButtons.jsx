import React from 'react';
import { Button, Container } from '../sharedStyles/sharedStyledComponents.js'

export const ReviewButtons = ( { setReviewIndex, reviewIndex } ) => {
  return (
    <Container>
      <Button onClick={() => {setReviewIndex(reviewIndex + 2)}}>More Reviews</Button>
      <Button primary>Add Reivew +</Button>
    </Container>
  );
}
