import React from 'react';
import { Button, Container } from '../sharedStyles/sharedStyledComponents.js'

export const ReviewButtons = () => {
  return (
    <Container>
      <Button>More Reviews</Button>
      <Button primary>Add Reivew +</Button>
    </Container>
  );
}
