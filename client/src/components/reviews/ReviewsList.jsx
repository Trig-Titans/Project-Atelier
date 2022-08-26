import React from 'react';
import styled, {css} from 'styled-components';
import {Checkmark} from 'react-checkmark';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;


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

let MoreReviewsButton = () => {
  return (<Button>More Reviews</Button>);
}

let AddReviewButton = () => {
  return (<Button primary>Add Reivew +</Button>);
}


let ReviewsList = () => {
  return (<div>
    <Sorter />
    <ReviewTile />
    <MoreReviewsButton />
    <AddReviewButton />
    </div>)
}

export default ReviewsList;