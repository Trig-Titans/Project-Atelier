import React from 'react';
import { useState, useEffect } from 'react';
import {ReviewButtons} from './AdditionalButtons.jsx';
import {ReviewTiles} from './ReviewTiles.jsx';
import {SorterBar} from './SorterBar.jsx';
import {ReviewsContainer} from '../sharedStyles/sharedStyledComponents';

let ReviewsList = ( {reviews} ) => {
  let reviewArray = reviews.results;
  //hold the reviews in state? send two at a time?
  //create variable to keep track of number of reviews to display
  let currentDisplay = reviewArray.slice(0,2)
  let [reviewList, setReviewList] = useState(currentDisplay)
  let [reviewIndex, setReviewIndex] = useState(2)

  useEffect(() => {
    //when the reviewIndex updates, update the reviewList state
    //make a shallow copy of reviewArray from index 0 to (reviewIndex)
    setReviewList(reviewArray.slice(0, reviewIndex))
    //setReviewList = this copy
  }, [reviewIndex]);

  return (<ReviewsContainer>
    <SorterBar />
    <ReviewTiles reviewList={reviewList} />
    <ReviewButtons setReviewIndex={setReviewIndex} reviewIndex={reviewIndex}/>
    </ReviewsContainer>)
}

export default ReviewsList;