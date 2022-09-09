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
      let id = characteristics[key].id;
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



    let body = {
      "product_id": parseInt(productID),
      "rating": parseInt(currentRating),
      "summary": e.target.ReviewSummaryText.value,
      "body": e.target.ReviewBodyText.value,
      "recommend": Boolean(e.target.Helpfulness.value),
      "name": e.target.reviewNickname.value,
      "email": e.target.reviewEmail.value,
      "photos": ['https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/12/31/17/toy-story-woody-buzz.jpg?quality=75&width=1200&auto=webp'],
      "characteristics": reviewCharacteristicRatings
    }
    let req = JSON.stringify(body);

    axios({
      method: 'post',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews`,
      headers: {
        'Authorization': API_KEY,
      },
      data: {
        "product_id":37314,
        "rating":2,
        "summary":"Mission Log: Zurg Not Found",
        "body":"Buzz Lightyear to Star Command. Come in, Star Command. Star Command, come in. Do you read me? Why don't they answer? My ship! Blast! This will take weeks to repair. Buzz Lightyear mission log, star date 4-0-7-2. My ship has run off course en route to sector 12. I've crash-landed on a strange planet. The impact must have awoken me from hyper sleep. Terrain seems a bit unstable. No readout yet if the air is breathable. And there seems to be no sign of intelligent life anywhere.",
        "recommend":false,
        "name":"Buzz",
        "email":"socks@lightyear.com",
        "photos":[

        ],
        "characteristics":{
           "125040":2,
           "125041":2,
           "125042":2,
           "125043":2
        }
     }
    })
    .then((response)=> {
      console.log(response);
      // setFormVisable(false);
      // setFormComplete(true);

    })
    .catch((err) => {
      console.log(err);
      // setFormVisable(false);
      // setFormComplete(true);

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
