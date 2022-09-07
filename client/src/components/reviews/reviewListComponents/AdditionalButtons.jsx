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
  const submitReview = (e, photoArray, currentRating) => {
    e.preventDefault();

    console.log("product_id", productID);
    // console.log(e)
    // console.log("🚀 ~ file: AdditionalButtons.jsx ~ line 14 ~ photoArray", photoArray);


    // star rating value
    //console.log(e.target.newReviewRating.value);
    console.log('rating', currentRating)
    // do you recommend?
    console.log('recommend', e.target.Helpfulness.value);
    // characteristics
    console.log("🚀 ~ file: AdditionalButtons.jsx ~ line 14 ~ characteristics", characteristics);
    let list = [];
    for (let key in characteristics) {
      list.push(key);
      console.log('key', key, 'id', characteristics[key].id)
    }
    if(e.target.characteristicSize !== undefined) {
      console.log('size', e.target.characteristicSize.value);
    }
    if(e.target.characteristicComfort !== undefined) {
      console.log('comfort', e.target.characteristicComfort.value);
    }
    // photos
    console.log('photos', e.target.photos.value);
    // review summary text
    console.log('summary', e.target.ReviewSummaryText.value);
    // review body text
    console.log('body', e.target.ReviewBodyText.value);
    // review Nickname
    console.log('name', e.target.reviewNickname.value);
    // review Email
    console.log('email', e.target.reviewEmail.value);
  }

  return (
    <Container>
      {formVisable ? <NewReview setFormVisable={setFormVisable} productName={productName} submitReview={submitReview} characteristics={characteristics}/> : <div></div>}
      {moreReviews}
      <Button primary onClick={() => {setFormVisable(true)}}>Add Review +</Button>
    </Container>
  );
}
