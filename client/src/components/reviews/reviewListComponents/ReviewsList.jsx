import React from 'react';
import {ReviewButtons} from './AdditionalButtons.jsx';
import {ReviewTiles} from './ReviewTiles.jsx';
import {SorterBar} from './SorterBar.jsx';
import {ReviewsContainer} from '../sharedStyles/sharedStyledComponents';

let ReviewsList = ( {reviews} ) => {
  let reviewList = reviews.results;
  return (<ReviewsContainer>
    <p>{console.log(reviews)}</p>
    <SorterBar />
    <ReviewTiles reviewList={reviewList} />
    <ReviewButtons />
    </ReviewsContainer>)
}

export default ReviewsList;