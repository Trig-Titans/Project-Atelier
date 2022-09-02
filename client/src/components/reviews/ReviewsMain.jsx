import React from 'react';
import Breakdown from './breakdownComponents/Breakdown.jsx';
import ReviewsList from './reviewListComponents/ReviewsList.jsx';
import {Container} from './sharedStyles/sharedStyledComponents.js';
import styled from 'styled-components';

const StyledHeader = styled.p`
  text-align: left;
  padding: 5vh 0 1.5vh 0;
  font-size: 16px;
  padding-left: 10%;
`;

let Reviews = () => {
  let productID = '37314';
  return (<div >
    <StyledHeader >RATINGS & REVIEWS</StyledHeader>
    <Breakdown productID={productID}/> <ReviewsList productID={productID} />
    </div>);
}

export default Reviews;