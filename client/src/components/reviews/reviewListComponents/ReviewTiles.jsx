import React from 'react';
import {IndividualTile} from './IndividualTile.jsx';

export const ReviewTiles = ({reviewList}) => {

  return reviewList.map((review) => {
    return <div data-testid="reviewTileCounting" key={review.review_id}><IndividualTile review={review} /></div>;
  })
};