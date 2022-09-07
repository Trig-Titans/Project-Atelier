import React, {useState} from 'react';
import {StyledBackground, StyledModal, StyledTitle, StyledForm, StyledLabel, StyledAnswerBox} from '../questions/AnswerModal.jsx';
import StarRatings from 'react-star-ratings';
import {Characteristics} from './CharacteristicsInputs.jsx';
import {RadioLabel, RadioContainer, RadioInputContainer, StyledPhoto, StyledInput} from './sharedStyles/sharedStyledComponents.js';

export const NewReview = ({ wholeReviewList, setReviewIndex, reviewIndex, productName, characteristics, productID}) => {
  const [reviewBodyCount, setReviewBodyCount] = useState(0);
  const [photoArray, setPhotoArray] = useState([]);
  const [largeImgErr, setLargeImgErr] = useState('none');

  var addPhoto = (input) => {
    // tests if the image being uploaded is too large
    if (input.target.files[0].size > 2097152) {
      setLargeImgErr('block');
      return;
    }
    setPhotoArray(photoArray => [...photoArray, URL.createObjectURL(input.target.files[0])]);
    setLargeImgErr('none');
  }

  let bodyCount;
  if (reviewBodyCount < 50) {
    bodyCount = <p>Minimum required characters left: {reviewBodyCount}/50</p>
  } else {
    bodyCount = <p>Minimum count reached</p>
  }

  let [currentRating, setCurrentRating] = useState(0);
  let rating = ['Poor', 'Fair', 'Average', 'Good', 'Great'];

  let ratingDescription;
  if (currentRating === 0) {
    ratingDescription = <div></div>
  } else {
    let index = currentRating - 1
    ratingDescription = <i>{rating[index]}</i>
  }

  // conditionally show the characteristic rating(s) based on what is relevent to the product
  let newReviewSize = false;
  let newReviewWidth = false;
  let newReviewComfort = false;
  let newReviewQuality = false;
  let newReviewLength = false;
  let newReviewFit = false;
  for (let key in characteristics) {
    if (key === 'Size') {
      newReviewSize = true;
    } else if (key === 'Width') {
      newReviewWidth = true;
    } else if (key === 'Comfort') {
      newReviewComfort = true;
    } else if (key === 'Quality') {
      newReviewQuality = true;
    } else if (key === 'Length') {
      newReviewLength = true;
    } else if (key === 'Fit') {
      newReviewFit = true;
    }
  }

  return (<div data-testid="ModalPopUpCreateNewReview">
    <StyledBackground onClick={()=>{setFormVisable(false)}}></StyledBackground>
    <StyledModal>
      <StyledTitle>
      <h2>Write Your Review</h2>
      <h4>About the {productName}</h4>
      </StyledTitle>
      <StyledForm  onSubmit={(e)=>{submitReview(e, photoArray, currentRating)}}>
        {/* onclick of star it displays the appropriate text next (poor, fair, average, good, great) */}
        <StyledLabel htmlFor="newReviewRating">Overall Rating*:</StyledLabel>
        <StarRatings
          rating={currentRating}
          starRatedColor="yellow"
          starDimension='25px'
          changeRating={(e)=>{setCurrentRating(e)}}
          starHoverColor="yellow"
          name='newReviewRating'
        />
        {ratingDescription}

        {/* Radio buttons for helpfulness rating */}
        <StyledLabel htmlFor="Helpfulness" >Do you recommend this product?*:</StyledLabel>
        <RadioContainer>
        <RadioInputContainer>
        <input type="radio" id="yesHelpful" name="Helpfulness" value="Yes" required/>
        <RadioLabel htmlFor="yesHelpful" style={{padding: '0 20px 0 5px'}}>Yes</RadioLabel>
        </RadioInputContainer>
        <RadioInputContainer>
        <input type="radio" id="noHelpful" name="Helpfulness" value="No" required/>
        <RadioLabel htmlFor="noHelpful" style={{padding: '0 20px 0 5px'}}>No</RadioLabel>
        </RadioInputContainer>
        </RadioContainer>

        {/* Characteristic Ratings */}
        <Characteristics showSize={newReviewSize} showWidth={newReviewWidth} showComfort={newReviewComfort} showQuality={newReviewQuality} showLength={newReviewLength} showFit={newReviewFit}/>

        {/* Review Summary */}
        <StyledLabel htmlFor="ReviewSummaryText">Review Summary:</StyledLabel>
        <input type="text" placeholder="Example: Best purchase EVER!!" name="ReviewSummaryText" id="ReviewSummaryText"/>

        {/* Review Body */}
        <StyledLabel htmlFor="ReviewBodyText">Why did you like/not like {productName}?* :</StyledLabel>
        <StyledAnswerBox name="ReviewBodyText" minLength="50" maxLength="1000" required onChange={(e)=>{setReviewBodyCount(e.target.value.length)}}></StyledAnswerBox>
        {bodyCount}

        {/* photo uploads */}
        <StyledInput>
              <StyledLabel htmlFor="photos">Upload your photos :</StyledLabel>
              <input type="file" name="photos" onChange={addPhoto} accept="image/*"></input>
              <div style={{display: largeImgErr, color: 'red'}}>Image too large, please upload smaller image file.</div>
              {photoArray.length > 0 ? photoArray.map((photoURL, index) => {
                if (index === 4) {
                  return (
                    <div key={photoURL}>
                      <StyledPhoto src={photoURL} ></StyledPhoto>
                    </div>
                  )
                }
                return (
                  <div key={photoURL}>
                    <StyledPhoto src={photoURL} ></StyledPhoto>
                    <input type="file" name="photos" onChange={addPhoto} accept="image/*"></input>
                    <div style={{display: largeImgErr, color: 'red'}}>Image too large, please upload smaller image file.</div>
                  </div>
                )
              }) : <div></div>}
            </StyledInput>

        {/* nicknames */}
        <StyledLabel htmlFor="reviewNickname" >Nickname*:</StyledLabel><br/>
        <input type="text" id="reviewNickname" name="reviewNickname" placeholder="Jackson11" required/>

        {/* emails */}
        <i>For privacy reasons, do not use your full name or email address</i>
        <StyledLabel htmlFor="reviewEmail" >Email*:</StyledLabel><br/>
        <input type="email" id="reviewEmail" name="reviewEmail" placeholder="Example: jack@email.com" maxLength="60"required/>
        <i>For authentication reasons, you will not be emailed</i>

        {/* submit button */}
        <button type="submit" style={{width: '33%', margin: 'auto'}}>Submit</button>
      </StyledForm>
    </StyledModal>
    </div>)
}