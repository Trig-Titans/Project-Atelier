import React from 'react';
import { useState, useEffect } from 'react';
import {ReviewButtons} from './AdditionalButtons.jsx';
import {ReviewTiles} from './ReviewTiles.jsx';
import {SorterBar} from './SorterBar.jsx';
import {ReviewsContainer, ScrollableContainer} from '../sharedStyles/sharedStyledComponents';
import dummyData from '../apiExample.js';
import axios from 'axios';
import API_KEY from '../../../../../config.js'

 // dummyData - whole list
 let reviewArray = dummyData.reviews.results;
 // dummyData for the filtered List
 let filteredArray;
 // dummyData for the first two tiles to display
 let reviewListExample = reviewArray.slice(0,2)

 export const ReviewsList = ( {productID, productName, characteristics, starsToFilterReviews} ) => {
   const starFilteringFunction = (currentData) => {

     if (starsToFilterReviews.length > 0) {
       let filteredData = [];

       currentData.map((ratingObj)=> {
         let currentRating = ratingObj.rating;
         if (starsToFilterReviews.indexOf(currentRating) > -1) {
           filteredData.push(ratingObj);
         }
       });
       return filteredData;
     } else {
       return currentData;
     }
   }

  // filter the reviews by stars if there is any filter in the state

  //state to contain whole list (minimizes API calls)
  let [wholeReviewList, setWholeReviewList] = useState(reviewArray)
  // sets the number of tiles
  let [reviewIndex, setReviewIndex] = useState(2);
  // sets what tiles are currently being displayed
  let [currentDisplay, setCurrentDisplay] = useState(reviewListExample);
  // sets the filter for API calls as necessary
  let [sortFilter, setSortFilter] = useState('');
  // used to keep track of the filtered list of reviews
  let [filteredReviewList, setFilteredReviewList] = useState(reviewArray)

  useEffect(() => {
    //when the reviewIndex updates, update the reviewList state
    //make a shallow copy of reviewArray from index 0 to (reviewIndex) and setReviewList
    filteredArray = starFilteringFunction(wholeReviewList);
    setFilteredReviewList(filteredArray)
    setCurrentDisplay(filteredArray.slice(0, reviewIndex))
  }, [reviewIndex]);

  //when the starFiltering changes, update the reviews list
  useEffect(()=>{
    filteredArray = starFilteringFunction(wholeReviewList)
    setFilteredReviewList(filteredArray);
    setCurrentDisplay(filteredArray.slice(0, reviewIndex));
  }, [starsToFilterReviews])

  useEffect(()=>{
    // when the sorting method changes, make new GET request to get data sorted appropriately
    console.log('I MADE AN AXIOS REQUEST')
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=${productID}&page=1&count=50&sort=${sortFilter}`,
      headers: {
        'Authorization': API_KEY
      }
    })
      .then(({data})=>{
        setWholeReviewList(data.results);
        filteredArray = starFilteringFunction(data.results);
        setFilteredReviewList = filteredArray;
        setCurrentDisplay(filteredArray.slice(0, reviewIndex));
      })
      .catch((err) => {
        console.log(err);
      })
  }, [sortFilter, productName]);

  return (<ReviewsContainer data-testid="reviewListDivContainer">
    <SorterBar setSortFilter={setSortFilter}/>
    <ScrollableContainer><ReviewTiles reviewList={currentDisplay} /></ScrollableContainer>
    <ReviewButtons characteristics={characteristics} filteredReviewList={filteredReviewList} setReviewIndex={setReviewIndex} reviewIndex={reviewIndex} productName={productName} productID={productID}/>
    </ReviewsContainer>)
}
