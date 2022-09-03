import React, {useState, useEffect} from 'react';
import Breakdown from './breakdownComponents/Breakdown.jsx';
import ReviewsList from './reviewListComponents/ReviewsList.jsx';
import {Container} from './sharedStyles/sharedStyledComponents.js';
import styled from 'styled-components';
import axios from 'axios';
import API_KEY from '../../../../config.js'
import data from './apiExample.js';

const StyledHeader = styled.p`
  text-align: left;
  padding: 5vh 0 1.5vh 0;
  font-size: 16px;
  padding-left: 10%;
`;


let Reviews = ({mainProductName, mainProduct}) => {
  let productID = mainProduct;
  let productName = mainProductName;


  let [reviewsMeta, setReviewsMeta] = useState(data.reviewsMeta);

  useEffect (()=> {
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=${productID}`,
      headers: {
        'Authorization': API_KEY
      }
    })
      .then((data)=> {
        setReviewsMeta(data.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);
  //console.log(reviewsMeta)
  return (
    <div>
      <StyledHeader >RATINGS & REVIEWS</StyledHeader>
      <Container>
        <Breakdown reviewsMeta={reviewsMeta}/> <ReviewsList productID={productID} productName={productName} characteristics={reviewsMeta.characteristics}/>
      </Container>
    </div>
    );
}

export default Reviews;