import React from 'react';
import {IndividualTile} from './IndividualTile.jsx';

export const ReviewTiles = ({reviewList}) => {

  return reviewList.map((review) => {
    return (<IndividualTile data-testid="reviewTileCounting" key={review.review_id} review={review}></IndividualTile>);
  })
};