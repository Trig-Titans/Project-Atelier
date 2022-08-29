import React from 'react';

import {ReviewTileContainer} from '../sharedStyles/sharedStyledComponents';
const {Checkmark} = require('/Users/cathy/HackReactor/seniorProject/rfe2207-fec-trig-titans/node_modules/react-checkmark/dist/react-checkmark.min');

const makeDate = (dateData) => {
  let formatedDate = new Date(dateData.replace(/-/g, '\/').replace(/T.+/, ''));
  formatedDate = formatedDate.toDateString();
  formatedDate = formatedDate.split(' ');
  formatedDate.shift();
  formatedDate[1] = formatedDate[1] + ',';
  formatedDate = formatedDate.join(' ');
  return formatedDate;
};

const makeRecommendation = (recommendation) => {
  if (recommendation === true) {
    return <p><Checkmark size='medium'/> I recommend this product!</p>;
  } else {
    return <p>Nope!</p>
  }
};

const ReviewTiles = ({reviewList}) => {

  return reviewList.map((review) => {
    let recommend = makeRecommendation(review.recommend);
    let date = makeDate(review.date);

    return (<ReviewTileContainer key={review.review_id}>
      <p>{review.rating}{date}</p>
      <h4>{review.summary}</h4>
      <p>{review.body}</p>
      {recommend}
      <p>{review.reviewer_name}</p>
    </ReviewTileContainer>)
  });
  // (<div>
  //   <p> Star Rating  Username and Date</p>
  //   <p>Title Line - summary max 60 char and bold</p>
  //   <p>Message Body - display only the 1st 250 characters</p>
  //   <p>Thumbnail pictures if any -- review.photos (is an array, if length is more than 0, display</p>
  //   <p><Checkmark size='medium'/> I recommend this product! -- make it a banner? if review.recommend</p>
  //   <p>Response from Seller: if any and message attached. Styling should be different if review.response</p>
  //   <p>Is this helpful? Yes [###] | No [###]</p>
  //   <hr />
  // </div>);
}


export {ReviewTiles, makeDate, makeRecommendation}