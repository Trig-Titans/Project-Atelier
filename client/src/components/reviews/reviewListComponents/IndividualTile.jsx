import React, {useState} from 'react';
import {ReviewTileContainer, RecommendationContainer, SellersResponse} from '../sharedStyles/sharedStyledComponents';
import {ThumbnailModel} from './ThumbnailModal.jsx';
import axios from 'axios';
import API_KEY from '../../../../../config.js';
import { StyledLinks } from '../../questions/Answer.jsx';
const {Checkmark} = require('react-checkmark');
import {OverviewStars} from '../StarComponent.jsx';


// FORMATING FUNCTIONS

export const makeDate = (dateData) => {
  // without these regular expressions at the end of the dateData, the date shows up as off by a day. Adding these filters fixed that issue
  // this line writes a date stamp into human legible dates ex: Mon Jul 12 2019.
  let formatedDate = new Date(dateData.replace(/-/g, '\/').replace(/T.+/, '')).toDateString();

  // need to take off the day of the week and add a comma between day# and year#
  formatedDate = formatedDate.split(' ');
  formatedDate.shift();
  formatedDate[1] = formatedDate[1] + ',';
  formatedDate = formatedDate.join(' ');
  return formatedDate;
};

export const makeRecommendation = (recommendation) => {
  if (recommendation === true) {
    return <RecommendationContainer><Checkmark size='medium' /> <p style={{margin: '5px'}} >I recommend this product!</p></RecommendationContainer>;
  } else {
    return '';
  }
};


export const makeSellerResponse = (response) => {
  if (response !== null) {
    return <SellersResponse><h4>Response from seller:</h4><p>{response}</p></SellersResponse>
  } else {
    return '';
  }
};


// REACT TILE TO RENDER

export const IndividualTile = ({review}) => {
  let [thumbnailView, setThumbnailView] = useState(false);
  let [thumbnailUrl, setThumbnailUrl] = useState('');
  let [displayHelpfulness, setDisplayHelpfulness] = useState(review.helpfulness)
  let [clickedHelpfulReport, setClickedHelpfulReport] = useState(false)

  const addHelpfulRating = (review_id) => {
    //PUT /reviews/:review_id/helpful
    if(!clickedHelpfulReport) {
      axios({
        method: 'put',
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${review_id}/helpful`,
        headers: {
          'Authorization': API_KEY
        }
      })
        .then(() => {
          setDisplayHelpfulness(displayHelpfulness + 1);
          setClickedHelpfulReport(true);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }
  let longBody = false;
  const makeSummary = (summary, body) => {
    if (summary === undefined) {
      let sum;
      // minimum length body from form submission is 50 characters, so summary will be first 30 characters and rest will be body
      sum = body.substring(0, 30);
      sum += '...';
      return <h4>{sum}</h4>
    } else {
      return <h4>{summary}</h4>
    }
  }
  let longBodyText;
  const makeBody = (summary, body) => {
    if (summary === undefined) {
      let bod;
      // minimum length body from form submission is 50 characters, so summary will be first 30 characters and rest will be body
      bod = body.substring(30, 280);
      if (body.length > 280) {
        longBody = true;
        longBodyText = <p>{body.substring(30)}</p>;
        bod += '...';
      }
      return <p style={{fontSize: '14px'}}>{bod}</p>
    } else {
      if (body.length > 250) {
        longBody = true;
        longBodyText = <p>{body}</p>;
        body = body.substring(0,250);
        body += '...';
      }
      return <p style={{fontSize: '14px'}}>{body}</p>
    }
  }

  const addReportRating = (review_id) => {
    //PUT /reviews/:review_id/report
    if (!setClickedHelpfulReport) {
      axios({
        method: 'put',
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${review_id}/report`,
        headers: {
          'Authorization': API_KEY
        }
      })
        .then(() => {
          setClickedHelpfulReport(true);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  const openThumbnail = (url) => {
    setThumbnailView(true);
    setThumbnailUrl(url);
  }

  const makePhotos = (photoArray) => {
    if (photoArray.length === 0) {
      return <div></div>
    } else {
      let thumbnailPics = photoArray.map((picUrl) => {
        return (<img style={{height: '70px', width:'70px', margin: '5px'}} key={picUrl.id} src={picUrl.url} onClick={()=>{openThumbnail(picUrl.url)}}/>)
      });
      return (<RecommendationContainer>{thumbnailPics}</RecommendationContainer>);
    }
  }

  let notYetDisplayed = true;
  let [showLongBody, setShowLongBody] = useState(false);
  const changeBody = () => {
    notYetDisplayed = false;
    setShowLongBody(true);
  }

  let recommend = makeRecommendation(review.recommend);
  let date = makeDate(review.date);
  let summary = makeSummary(review.summary, review.body);
  let body = makeBody(review.summary, review.body);
  let sellerResponse = makeSellerResponse(review.response);
  let photoThumbnails = makePhotos(review.photos);
  let display = <div></div>;
  if(notYetDisplayed) {
    if(longBody) {
      display = <u onClick={()=>{changeBody()}}>(See More)</u>
    }
  }
  let reviewStars = `${review.rating}-stars`
  return (<ReviewTileContainer>
        <div data-testid={reviewStars} style={{display: 'flex', justifyContent: 'space-between'}}>
          <OverviewStars stars={review.rating} starSizePx={'15px'} />
          <p>{date}</p>
        </div>
        {summary}
        {showLongBody ? longBodyText : body}
        {/* This is the SeeMore link that needs to disappear if the full body has been displayed */}
        {display}
        {photoThumbnails}
        {thumbnailView ? <ThumbnailModel thumbnailUrl={thumbnailUrl} setThumbnailView={setThumbnailView}></ThumbnailModel> : <div></div>}
        {recommend}
        <p style={{textAlign: 'right'}}>{review.reviewer_name}</p>
        <StyledLinks>
          <p>Is this helpful? <u onClick={()=>{addHelpfulRating(review.review_id)}} style={{textDecoration: 'underline'}}>Yes</u> ({displayHelpfulness}) | <u style={{textDecoration: 'underline'}} onClick={() => {addReportRating(review.review_id)}}>Report</u></p>
        </StyledLinks>

        {sellerResponse}
      </ReviewTileContainer>)
}