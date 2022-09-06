import React, {useState, useEffect} from 'react';
import {Breakdown} from './breakdownComponents/Breakdown.jsx';
import ReviewsList from './reviewListComponents/ReviewsList.jsx';
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

  let [starsToFilterReviews, setStarsToFilterReviews] = useState([])

  let [reviewsMeta, setReviewsMeta] = useState(data.reviewsMeta);

  useEffect (()=> {
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=${productID}`,
      headers: {
        'Authorization': API_KEY
      }
    })
      .then((response)=> {
        setReviewsMeta(response.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);


  return (<div style={{backgroundColor: '#FFFFFF'}}>
      <StyledHeader >RATINGS & REVIEWS</StyledHeader>
      <Breakdown reviewsMeta={reviewsMeta} starsToFilterReviews={starsToFilterReviews} setStarsToFilterReviews={setStarsToFilterReviews}/>
      <ReviewsList productID={productID} productName={productName} characteristics={reviewsMeta.characteristics} starsToFilterReviews={starsToFilterReviews}/>
    </div>);

}

export default Reviews;