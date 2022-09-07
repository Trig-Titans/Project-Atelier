/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef, useContext } from "react";
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
import Expanded from './overview-components/Expanded.jsx';
import Social from './overview-components/Social.jsx'
// Here are all of the styled components
const StyledOverviewGrid = styled.div`
  min-height: 30rem;
  margin-top: 4rem;
  margin-bottom: 20px;
  column-gap: 20px;
  display: block;
  padding: 0 10px;
  row-gap: 0px;
  width: 100%;
  text-align: left;
  display: grid;
  color: black;
  grid-template-areas:
    'OvPicture OvStar'
    'OvPicture OvName'
    'OvPicture OvPrice'
    'OvPicture OvStyle'
    'OvPicture OvForm'
    'OvPicture OvSocial'
    'OvPicture blank'
    'OvDesc OvMeta'
`;

const StyledIconSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    width: 2%;
    position: absolute;
    width: auto;
  `;

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:40px;
  height:40px;
  overflow: hidden;
  border-radius: 50%;
  background-size: cover;
  margin: 5px;
  cursor: pointer;
  border: 2px solid gray;
  transition: 0.3s;
  &:hover {
    border: 2px solid white;
  }
`;

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

const ExpandedContext = React.createContext(2)

// This is the actual functional component
function Overview({ currentStyleId, setCurrentStyleId, mainProduct }) {
  var productSku = mainProduct;
  var [reviewCount, setReviewCount] = useState(0);
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

  // Here is the axios request to receive the style information for a product
  const retrieveStyles = axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productSku}/styles`,
    headers: {
      Authorization: API_KEY
    }
  });

  // Here is the axios request to receive the product information
  const retrieveProductInfo = axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productSku}/`,
    headers: {
      Authorization: API_KEY
    }
  });

  // Here is the axios request to receive receive the ratings of a product
  const retrieveRatingInfo = axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=${productSku}`,
    headers: {
      Authorization: API_KEY
    }
  });

  const retrieveReviewInfo = axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=${productSku}`,
    headers: {
      Authorization: API_KEY
    }
  })


  useEffect(() => {
    Promise.all([retrieveStyles, retrieveProductInfo, retrieveRatingInfo, retrieveReviewInfo])
      .then((response) => {
        // this sets the styles to an array of different styles
        setStyles(styles = response[0].data.results);
        // this sets the product info to the correct object
        setInfo(productInfo = response[1].data);
        // this sets the rating to the average of all the votes
        setRating(rating = findAverageRating(response[2].data.ratings));
        // this sets the review state to the number of reviews
        setReviewCount(reviewCount = response[3].data.count);
      }).catch((err) => {
        //console.log(err);
      })
  }, [mainProduct]);

  const isInitialMount = useRef(true);
  // This is the function to make the zoom effect. Not my code.
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
  });
  /* find(obj => obj.style_id === currentStyleId) */
  if (!expanded) {
    return (
      <StyledOverviewGrid data-testid='overview'>
        <OverviewCarousel
          photos={styles[styleIndex].photos}
          expanded={expanded}
          setView={setView}
          imgIndex = {imgIndex}
          setImgIndex={setImgIndex}/>
        <OverViewStars
          stars={rating}
          reviewCount={reviewCount}/>
        <OverViewName
          name={productInfo.name}
          category={productInfo.category}/>
        <OverViewPrice
          price={styles[styleIndex]}/>
        <OverViewSelector
          styles={styles}
          setStyles={setStyleIndex}
          styleIndex={styleIndex}
          currentStyleId={currentStyleId}
          setCurrentStyleId={setCurrentStyleId}/>
        <OverViewForm
          styles={styles[styleIndex]}/>
        <OverviewDescription
          description={productInfo.description}/>
        <OverviewFacts
          facts={productInfo.features}/>
        <Social/>
      </StyledOverviewGrid>
    )
  } else {
    // this is done using create context and children props to showcase how it is supposed to work
    return (
      <StyledOverviewGrid>
        <ExpandedContext.Provider value={{ photos: styles[styleIndex].photos, expandedVal: [expanded, setView], imgIndexVal: [imgIndex, setImgIndex] }}>
          <Expanded>
            <StyledIconSection data-testid='expanded-icons'>
              {
                styles[styleIndex].photos.map((photo, index) => {
                  return <StyledIcon onClick={() => {
                    setImgIndex(index);
                  }}
                  value={index} key={index} style={{backgroundImage: `url(${photo.url})`}}></StyledIcon>
                })
              }
            </StyledIconSection>
          </Expanded>
        </ExpandedContext.Provider>
        {/* <Expanded photos={styles[styleIndex].photos} expanded={expanded} setView={setView} imgIndex = {imgIndex} setImgIndex={setImgIndex}/> */}
      </StyledOverviewGrid>
    )
  }
}


export {Overview, findAverageRating, ExpandedContext}
