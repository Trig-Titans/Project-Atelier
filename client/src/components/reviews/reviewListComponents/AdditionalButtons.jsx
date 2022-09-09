import React, {useState} from 'react';
import { Button, Container } from '../sharedStyles/sharedStyledComponents.js';
import {NewReview} from '../NewReview.jsx';
import axios from 'axios';
import API_KEY from '../../../../../config.js';
import {CompletedFormModal} from './CompleteMessage.jsx';


export const ReviewButtons = ( { filteredReviewList, setReviewIndex, reviewIndex, productName, characteristics, productID } ) => {

  let [formVisable, setFormVisable] = useState(false);
  let [formComplete, setFormComplete] = useState(false);

  let moreReviews;
  if(filteredReviewList !== undefined) {
    if(filteredReviewList.length > reviewIndex) {
      moreReviews = <Button onClick={() => {setReviewIndex(reviewIndex + 2)}}>More Reviews</Button>
    }
  } else {
    moreReviews = <div></div>
  }
  const submitReview = (e, photoArray, currentRating) => {
    e.preventDefault();

    console.log("product_id", parseInt(productID));
    console.log('rating', currentRating)
    // do you recommend?
    console.log('recommend', Boolean(e.target.Helpfulness.value));
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

    // characteristics
    let reviewCharacteristicRatings = {};
    for (let key in characteristics) {
      let id = characteristics[key].id
      if (key === 'size') {
        reviewCharacteristicRatings[id] = e.target.characteristicSize.value;
      } else if (key === 'width') {
        reviewCharacteristicRatings[id] = e.target.characteristicWidth.value;
      } else if (key === 'fit') {
        reviewCharacteristicRatings[id] = e.target.characteristicFit.value;
      } else if (key === 'comfort') {
        reviewCharacteristicRatings[id] = e.target.characteristicComfort.value;
      } else if (key === 'length') {
        reviewCharacteristicRatings[id] = e.target.characteristicLength.value;
      } else if (key === 'quality') {
        reviewCharacteristicRatings[id] = e.target.characteristicQuality.value;
      }
    }



    let body = {};
    // body.product_id = parseInt(productID);
    // body.rating = parseInt(currentRating);
    // body.summary = e.target.ReviewSummaryText.value;
    // body.body = e.target.ReviewBodyText.value;
    // body.recommend = Boolean(e.target.Helpfulness.value);
    // body.name = e.target.reviewNickname.value;
    // body.email = e.target.reviewEmail.value;
    // body.photos = [];
    // body.characteristics = reviewCharacteristicRatings;

    axios({
      method: 'post',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews`,
      headers: {
        'Authorization': API_KEY
      },
      body: {
        product_id: parseInt(productID),
        rating: parseInt(currentRating),
        summary: e.target.ReviewSummaryText.value,
        body: e.target.ReviewBodyText.value,
        recommend: Boolean(e.target.Helpfulness.value),
        name: e.target.reviewNickname.value,
        email: e.target.reviewEmail.value,
        photos: [],
        characteristics: reviewCharacteristicRatings
      }
    })
    .then((response)=> {
      console.log(response);
      setFormVisable(false);
      setFormComplete(true);

    })
    .catch((err) => {
      console.log(err);
      setFormVisable(false);
      setFormComplete(true);

    })
  }

  return (
    <Container>
      {formVisable ? <NewReview setFormVisable={setFormVisable} productName={productName} submitReview={submitReview} characteristics={characteristics}/> : <div></div>}
      {formComplete ? <CompletedFormModal setFormComplete={setFormComplete}/> : <div></div>}
      {moreReviews}
      <Button primary onClick={() => {setFormVisable(true)}}>Add Review +</Button>
    </Container>
  );
}
