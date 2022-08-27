import React from 'react';
import {Checkmark} from 'react-checkmark';
import {ReviewButtons} from './AdditionalButtons.jsx'




let Sorter = () => {
  return (<div>### of reviews, sorted by DropDownList</div>);
}

let ReviewTile = () => {
  return (<div>
    <p> Star Rating  Username and Date</p>
    <p>Title Line - summary max 60 char and bold</p>
    <p>Message Body</p>
    <p>Thumbnail pictures if any</p>
    <p><Checkmark size='medium'/> I recommend this product! -- make it a banner?</p>
    <p>Response from Seller: if any and message attached. Styling should be different</p>
    <p>Is this helpful? Yes [###] | No [###]</p>
    <hr />
  </div>);
}




let ReviewsList = ( {reviews} ) => {
  let reviewList = reviews.results;
  return (<div>
    <p>{console.log(reviews)}</p>
    <Sorter />
    <ReviewTile />
    <ReviewButtons />
    </div>)
}

export default ReviewsList;