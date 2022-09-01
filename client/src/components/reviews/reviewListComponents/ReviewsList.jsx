import React from 'react';
import { useState, useEffect } from 'react';
import {ReviewButtons} from './AdditionalButtons.jsx';
import {ReviewTiles} from './ReviewTiles.jsx';
import {SorterBar} from './SorterBar.jsx';
import {ReviewsContainer, ScrollableContainer} from '../sharedStyles/sharedStyledComponents';
import data from '../apiExample.js';
import axios from 'axios';
import API_KEY from '../../../../../config.js'



const ReviewsList = ( {productID} ) => {
  // dummyData
  let reviewArray = data.reviews.results;
  let reviewListExample = reviewArray.slice(0,2)

  //state to contain whole list (minimizes API calls)
  let [wholeReviewList, setWholeReviewList] = useState(reviewArray)

  //on initial render, GET data for productID
  useEffect(()=>{
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=${productID}&page=1&count=50`,
      headers: {
        'Authorization': API_KEY
      }
    })
      .then(({data})=>{
        // console.log('I am the FIRST request for data', data);
        reviewArray = data.results;
        setWholeReviewList(data.results);
        setCurrentDisplay(reviewArray.slice(0, reviewIndex));
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  let [currentDisplay, setCurrentDisplay] = useState(reviewListExample);
  let [reviewIndex, setReviewIndex] = useState(2);
  let [sortFilter, setSortFilter] = useState('');

  useEffect(() => {
    //when the reviewIndex updates, update the reviewList state
    //make a shallow copy of reviewArray from index 0 to (reviewIndex) and setReviewList
    setCurrentDisplay(wholeReviewList.slice(0, reviewIndex))
  }, [reviewIndex]);

  useEffect(()=>{
    // when the sorting method changes, make new GET request to get data sorted appropriately
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=${productID}&page=1&count=50&sort=${sortFilter}`,
      headers: {
        'Authorization': API_KEY
      }
    })
      .then(({data})=>{
        reviewArray = data.results;
        setWholeReviewList(data.results);
        setCurrentDisplay(reviewArray.slice(0, reviewIndex));
      })
      .catch((err) => {
        console.log(err);
      })
  }, [sortFilter])


  return (<ReviewsContainer data-testid="reviewListDivContainer">
    <SorterBar setSortFilter={setSortFilter}/>
    <ScrollableContainer><ReviewTiles reviewList={currentDisplay} /></ScrollableContainer>
    <ReviewButtons wholeReviewList={wholeReviewList} setReviewIndex={setReviewIndex} reviewIndex={reviewIndex}/>
    </ReviewsContainer>)
}

export default ReviewsList;