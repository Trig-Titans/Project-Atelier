import React from 'react';
import {Checkmark} from 'react-checkmark';
import {ReviewTileContainer} from '../sharedStyles/sharedStyledComponents';

export const ReviewTiles = ({reviewList}) => {

  return reviewList.map((review) => {
    let recommend;
    if (review.recommend === true) {
      recommend = <p><Checkmark size='medium'/> I recommend this product!</p>;
    } else {
      recommend = <p>Nope!</p>
    }
    return (<ReviewTileContainer key={review.review_id}>
      <p>{review.rating}</p>
      <p>{review.date}</p>
      <p>{review.summary}</p>
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
