import React, {useState} from 'react';
import {StyledBackground, StyledModal, StyledTitle, StyledForm, StyledInput, StyledLabel, StyledAnswerBox} from '../questions/AnswerModal.jsx';
import styled from 'styled-components';

const StyledRadios = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: row;
  text-align: left;
  padding: 2.5vh 0;
`;

export const NewReview = ({setFormVisable, productName, submitReview}) => {
  let [reviewBodyCount, setReviewBodyCount] = useState(0);
  let bodyCount;
  if (reviewBodyCount < 50) {
    bodyCount = <p>Minimum required characters left: {reviewBodyCount}/50</p>
  } else {
    bodyCount = <p>Minimum count reached</p>
  }
  return (<div>
    <StyledBackground onClick={()=>{setFormVisable(false)}}></StyledBackground>
    <StyledModal>
      <StyledTitle>
      <h2>Write Your Review</h2>
      <h4>About the {productName}</h4>
      </StyledTitle>
      <StyledForm onSubmit={submitReview}>
        {/* onclick of star it displays the appropriate text next (poor, fair, average, good, great) */}
        <p>Star rating selector*</p>
        {/* Radio buttons for helpfulness rating */}
        <StyledRadios>
        <StyledLabel htmlFor="Helpfulness" >Do you recommend this product?*:</StyledLabel>
        <input type="radio" id="yesHelpful" name="Helpfulness" value="Yes" required/><label htmlFor="yesHelpful" style={{padding: '0 20px 0 5px'}}>Yes</label>
        <input type="radio" id="noHelpful" name="Helpfulness" value="No" required/><label htmlFor="noHelpful" style={{padding: '0 20px 0 5px'}}>No</label>
        </StyledRadios>
        <p>Characteristics*</p>
        <StyledLabel htmlFor="ReviewSummaryText">Review Summary:</StyledLabel>
        <input type="text" placeholder="Example: Best purchase EVER!!" name="ReviewSummaryText" />
        <StyledLabel htmlFor="ReviewBodyText">Why did you like/not like {productName}?* :</StyledLabel>
        <StyledAnswerBox name="ReviewBodyText" minLength="50" maxLength="1000" required onChange={(e)=>{setReviewBodyCount(e.target.value.length)}}></StyledAnswerBox>
        {bodyCount}
        <p>Photos (upload here)</p>
        <StyledLabel htmlFor="reviewNickname" >Nickname*:</StyledLabel><br/>
        <input type="text" id="reviewNickname" name="reviewNickname" placeholder="Jackson11" required/>
        <i>For privacy reasons, do not use your full name or email address</i>
        <StyledLabel htmlFor="reviewEmail" >Nickname*:</StyledLabel><br/>
        <input type="email" id="reviewEmail" name="reviewEmail" placeholder="Example: jack@email.com" maxLength="60"required/>
        <i>For authentication reasons, you will not be emailed</i>
        <input type="submit" value="Submit Review" style={{width: '33%', margin: 'auto'}}></input>
      </StyledForm>
    </StyledModal>
    </div>)
}