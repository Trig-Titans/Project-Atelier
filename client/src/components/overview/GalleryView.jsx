import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import axios from 'axios';
import API_KEY from '../../../../config.js';

// All of the imports from component files
import OverviewCarousel from './overview-components/Carousel.jsx';
import OverViewStars from './overview-components/Stars.jsx';
import OverViewName from './overview-components/Name.jsx';
import OverViewPrice from './overview-components/Price.jsx';
import OverViewSelector from './overview-components/Selector.jsx';
import OverViewForm from './overview-components/Form.jsx';
import OverviewDescription from './overview-components/Description.jsx';
import OverviewFacts from './overview-components/Facts.jsx';
// Here are all of the styled components
const StyledOverviewGrid = styled.div`
  margin-left: 20%;
  column-gap: 20px;
  row-gap: 20px;
  width: 60%;
  text-align: left;
  display: grid;
  color: black;
  grid-template-areas:
    'OvPicture OvStar'
    'OvPicture OvName'
    'OvPicture OvPrice'
    'OvPicture OvStyle'
    'OvPicture OvForm'
    'OvDesc OvMeta'
`;

// Here is the axios request to receive the style information for a product
const retrieveStyles = axios({
  method: 'get',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/37314/styles',
  headers: {
    Authorization: API_KEY
  }
  // data.data.results
});

// Here is the axios request to receive the product information
const retrieveProductInfo = axios({
  method: 'get',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/37314/',
  headers: {
    Authorization: API_KEY
  }
  // data.data
});

// Here is the axios request to receive receive the ratings of a product
const retrieveRatingInfo = axios({
  method: 'get',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=37314',
  headers: {
    Authorization: API_KEY
  }
  // data.data.ratings
});

// This is the function to create the average rating
function findAverageRating(ratings)  {
  var ratingArray = Object.values(ratings);
  var numberOfVotes = 0;
  var total = 0;
  ratingArray.forEach((voteCount, index) => {
    var intRating = parseInt(voteCount)
    numberOfVotes += intRating;
    total += ((index + 1) * voteCount)
  })
  var average = total / numberOfVotes;
  var roundNearQtr = function(number) {
    return (Math.round(number * 4) / 4).toFixed(2);
  };
  return roundNearQtr(average);
}

// This is the actual functional component
function Overview(props) {
  // state for the style array
  var [styles, setStyles] = useState([
    {
      name: "",
      original_price: "",
      photos: [
        {thumbnail_url: 'https://images.unsplash.com/photo-1554260570-9140f…hcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80', url: ''}
      ],
    }
  ]);
  // state for the product info object
  var [productInfo, setInfo] = useState({
    category: "",
    default_price: "",
    description: "",
    name: "",
    slogan: "",
    features: [{feature: 'Cut', value: 'Loose'}],
  });
  // single digit average rating of the product
  var [rating, setRating] = useState(0);
  useEffect(() => {
    Promise.all([retrieveStyles, retrieveProductInfo, retrieveRatingInfo])
      .then((response) => {
        // this sets the styles to an array of different styles
        setStyles(styles = response[0].data.results);
        // this sets the product info to the correct object
        setInfo(productInfo = response[1].data);
        // this sets the rating to the average of all the votes
        setRating(rating = findAverageRating(response[2].data.ratings));
      }).catch((err) => {
        console.log(err);
      })
  }, []);
  return (
    // The grid
    <StyledOverviewGrid>
      <OverviewCarousel photos={styles[0].photos}/>
      <OverViewStars stars={rating}/>
      <OverViewName name={productInfo.name} category={productInfo.category}/>
      <OverViewPrice price={styles[0]}/>
      <OverViewSelector styles={styles}/>
      <OverViewForm styles={styles}/>
      <OverviewDescription description={productInfo.description}/>
      <OverviewFacts facts={productInfo.features}/>
    </StyledOverviewGrid>
  )
}

export default Overview;