import React from 'react';
import {ReviewTileContainer, RecommendationContainer, SellersResponse, Thumbnail} from '../sharedStyles/sharedStyledComponents';
const {Checkmark} = require('react-checkmark');

const makeDate = (dateData) => {
  // without these regular expressions at the end of the dateData, the date shows up as off by a day. Adding these filters fixed that issue
  // this line writes a date stamp into human legible dates ex: Mon Jul 12 2019.
  let formatedDate = new Date(dateData.replace(/-/g, '\/').replace(/T.+/, '')).toDateString();

  // need to take off the day of the week and add a comma between day# and year#
  formatedDate = formatedDate.split(' ');
  formatedDate.shift();
  formatedDate[1] = formatedDate[1] + ',';
  formatedDate = formatedDate.join(' ');
  return formatedDate;
};

const makeRecommendation = (recommendation) => {
  if (recommendation === true) {
    return <RecommendationContainer><Checkmark size='medium' /> <p style={{margin: '5px'}} >I recommend this product!</p></RecommendationContainer>;
  } else {
    return '';
  }
};

const makeReviewSummaryandBody = (summary, body) => {
  let sumAndBod;
  if (summary === undefined) {
    let sum;
    let bod;
    // minimum length body from form submission is 50 characters, so summary will be first 30 characters and rest will be body
    sum = body.substring(0, 30);
    sum += '...';
    bod = body.substring(30, 280);
    if (body.length > 280) {
      bod += '...';
    }
    sumAndBod = <div><h4>{sum}</h4><p>{bod}</p></div>
  } else {
    if (body.length > 250) {
      body = body.substring(0,250);
      body += '...';
    }
    sumAndBod = <div><h4>{summary}</h4><p>{body}</p></div>
  }
  return sumAndBod;
};

const makeSellerResponse = (response) => {
  if (response !== null) {
    return <SellersResponse><h4>Response from seller:</h4><p>{response}</p></SellersResponse>
  } else {
    return '';
  }
};

const makePhotos = (photoArray) => {
  if (photoArray.length === 0) {
    return <div></div>
  } else {
    let thumbnailPics = photoArray.map((picUrl) => {
      // <Thumbnail
      return (<img style={{height: '70px', width:'70px', margin: '5px'}} key={picUrl.id} src={picUrl.url} />)
    });
    return (<RecommendationContainer>{thumbnailPics}</RecommendationContainer>);
  }
}

const ReviewTiles = ({reviewList}) => {

  return reviewList.map((review) => {

    let recommend = makeRecommendation(review.recommend);
    let date = makeDate(review.date);
    let summaryAndBody = makeReviewSummaryandBody(review.summary, review.body);
    let sellerResponse = makeSellerResponse(review.response);
    let photoThumbnails = makePhotos(review.photos);

    return (<ReviewTileContainer data-testid="reviewTileCounting" key={review.review_id}>
      <p>{review.rating} stars {date}</p>
      {summaryAndBody}
      {photoThumbnails}
      {recommend}
      <p style={{textAlign: 'right'}}>{review.reviewer_name}</p>
      {sellerResponse}
    </ReviewTileContainer>)
  });

  //   <p>Thumbnail pictures if any -- review.photos (is an array, if length is more than 0, display</p>

  //   <p>Is this helpful? Yes [###] | No [###]</p>
  //   <hr />
  // </div>);
}


export {ReviewTiles, makeDate, makeRecommendation, makeReviewSummaryandBody}