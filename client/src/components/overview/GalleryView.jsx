import React, { useState, useEffect, useRef } from "react";
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
import Expanded from './overview-components/Expanded.jsx'
// Here are all of the styled components
const StyledOverviewGrid = styled.div`
  min-height: 30rem;
  column-gap: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  row-gap: 20px;
  width: 50%;
  text-align: center;
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
});

// Here is the axios request to receive the product information
const retrieveProductInfo = axios({
  method: 'get',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/37314/',
  headers: {
    Authorization: API_KEY
  }
});

// Here is the axios request to receive receive the ratings of a product
const retrieveRatingInfo = axios({
  method: 'get',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=37314',
  headers: {
    Authorization: API_KEY
  }
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
  var [expanded, setView] = useState(false);
  var [imgIndex, setImgIndex] = useState(0);
  const [styleIndex, setStyleIndex] = useState(0)
  // state for the style array
  var [styles, setStyles] = useState([
    {
      name: "",
      original_price: "",
      sale_price: null,
      photos: [
        {thumbnail_url: '', url: ''}
      ],
      skus: {
        1281104: {quantity: 8, size: 'XS'},
        1281105: {quantity: 16, size: 'S'}
      }
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

  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
     isInitialMount.current = false;
    } else {
      var zoomBoxes = document.querySelectorAll('.detail-view');

      // Extract the URL
      zoomBoxes.forEach(function(image) {
        var imageCss = window.getComputedStyle(image, false),
          imageUrl = imageCss.backgroundImage
                            .slice(4, -1).replace(/['"]/g, '');

        // Get the original source image
        var imageSrc = new Image();
        imageSrc.onload = function() {
          var imageWidth = imageSrc.naturalWidth,
              imageHeight = imageSrc.naturalHeight,
              ratio = imageHeight / imageWidth;

          // Adjust the box to fit the image and to adapt responsively
          var percentage = ratio * 100 + '%';
          image.style.paddingBottom = percentage;

          // Zoom and scan on mousemove
          image.onmousemove = function(e) {
            // Get the width of the thumbnail
            var boxWidth = image.clientWidth,
                // Get the cursor position, minus element offset
                x = e.pageX - this.offsetLeft,
                y = e.pageY - this.offsetTop,
                // Convert coordinates to % of elem. width & height
                xPercent = x / (boxWidth / 100) + '%',
                yPercent = y / (boxWidth * ratio / 100) + '%';

            // Update styles w/actual size
            Object.assign(image.style, {
              backgroundPosition: xPercent + ' ' + yPercent,
              backgroundSize: imageWidth + 'px'
            });
          };

          // Reset when mouse leaves
          image.onmouseleave = function(e) {
            Object.assign(image.style, {
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            });
          };
        }
        imageSrc.src = imageUrl;
      });
    }
  })

  if (!expanded) {
    return (
      <StyledOverviewGrid>
        <OverviewCarousel photos={styles[styleIndex].photos} expanded={expanded} setView={setView} imgIndex = {imgIndex} setImgIndex={setImgIndex}/>
        <OverViewStars stars={rating}/>
        <OverViewName name={productInfo.name} category={productInfo.category}/>
        <OverViewPrice price={styles[styleIndex]}/>
        <OverViewSelector styles={styles} setStyles={setStyleIndex} styleIndex={styleIndex}/>
        <OverViewForm styles={styles[styleIndex]}/>
        <OverviewDescription description={productInfo.description}/>
        <OverviewFacts facts={productInfo.features}/>
      </StyledOverviewGrid>
    )
  } else {
    return (
      <StyledOverviewGrid>
        <Expanded photos={styles[styleIndex].photos} expanded={expanded} setView={setView} imgIndex = {imgIndex} setImgIndex={setImgIndex}/>
      </StyledOverviewGrid>
    )
  }
}


export {Overview, findAverageRating}
