import React, {useState} from 'react';
import { Button, Container } from '../sharedStyles/sharedStyledComponents.js';
import {NewReview} from '../NewReview.jsx';

export const ReviewButtons = ( { wholeReviewList, setReviewIndex, reviewIndex, productName, characteristics, productID } ) => {
  let [formVisable, setFormVisable] = useState(false)
  let moreReviews;
  if(wholeReviewList.length > reviewIndex) {
    moreReviews = <Button onClick={() => {setReviewIndex(reviewIndex + 2)}}>More Reviews</Button>
  } else {
    moreReviews = <div></div>
  }
  const submitReview = (e, photoArray) => {
    e.preventDefault();
    productID
    console.log(e.target.Helpfulness.value)
    console.log(e)
    // const data = new FormData(e.target);
    // let result = {};
    // for (let name of data.keys()) {
    //   const input = e.target.elements[name];
    //   const parserName = input.dataset.parse;

    //   if (parserName) {
    //     let key = parserName;
    //     let value = key(data.get(name));
    //     result[key] = value;
    //   }
    // }
    // console.log('What is result?', result)
  }

  return (
    <Container>
      {formVisable ? <NewReview setFormVisable={setFormVisable} productName={productName} submitReview={submitReview} characteristics={characteristics}/> : <div></div>}
      {moreReviews}
      <Button primary onClick={() => {setFormVisable(true)}}>Add Reivew +</Button>
    </Container>
  );
}
