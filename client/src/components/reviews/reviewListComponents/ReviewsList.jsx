import React from 'react';
import { useState, useEffect } from 'react';
import {ReviewButtons} from './AdditionalButtons.jsx';
import {ReviewTiles} from './ReviewTiles.jsx';
import {SorterBar} from './SorterBar.jsx';
import {ReviewsContainer, ScrollableContainer} from '../sharedStyles/sharedStyledComponents';
import data from '../apiExample.js';
import axios from 'axios';
import API_KEY from '../../../../../config.js'



const ReviewsList = ( {productID, productName, characteristics, starsToFilterReviews} ) => {


  // filter the reviews by stars if there is any filter in the state
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

  // dummyData - whole list
  let reviewArray = data.reviews.results;
  // dummyData for the filtered List
  let filteredArray = starFilteringFunction(reviewArray);
  // dummyData for the first two tiles to display
  let reviewListExample = filteredArray.slice(0,2)


  //state to contain whole list (minimizes API calls)
  let [wholeReviewList, setWholeReviewList] = useState(reviewArray)
  // sets what tiles are currently being displayed
  let [currentDisplay, setCurrentDisplay] = useState(reviewListExample);
  // sets the number of tiles
  let [reviewIndex, setReviewIndex] = useState(2);
  // sets the filter for API calls as necessary
  let [sortFilter, setSortFilter] = useState('');
  // used to keep track of the filtered list of reviews
  let [filteredReviewList, setFilteredReviewList] = useState(filteredArray)

  useEffect(() => {
    //when the reviewIndex updates, update the reviewList state
    //make a shallow copy of reviewArray from index 0 to (reviewIndex) and setReviewList
    setCurrentDisplay(filteredReviewList.slice(0, reviewIndex))
  }, [reviewIndex]);

  //when the starFiltering changes, update the reviews list
  useEffect(()=>{
    console.log(`${starsToFilterReviews} is inside useEffect ln75 ReviewsList`)
    filteredArray = starFilteringFunction(wholeReviewList)
    setFilteredReviewList(filteredArray);
    setCurrentDisplay(filteredArray.slice(0, reviewIndex));
  }, [starsToFilterReviews])

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
        setWholeReviewList(data.results);
        setFilteredReviewList = starFilteringFunction(data.results);
        filteredArray = starFilteringFunction(wholeReviewList)
        setCurrentDisplay(filteredArray.slice(0, reviewIndex));
      })
      .catch((err) => {
        console.log(err);
      })
  }, [sortFilter]);

  return (<ReviewsContainer data-testid="reviewListDivContainer">
    <SorterBar setSortFilter={setSortFilter}/>
    <ScrollableContainer><ReviewTiles reviewList={currentDisplay} /></ScrollableContainer>
    <ReviewButtons characteristics={characteristics} wholeReviewList={wholeReviewList} setReviewIndex={setReviewIndex} reviewIndex={reviewIndex} productName={productName} productID={productID}/>
    </ReviewsContainer>)
}

export default ReviewsList;