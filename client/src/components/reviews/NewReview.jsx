import React from 'react';
import {StyledBackground, StyledModal} from '../questions/AnswerModal.jsx';

export const NewReview = ({setFormVisable}) => {
  return (<div>
    <StyledBackground onClick={()=>{setFormVisable(false)}}></StyledBackground>
    <StyledModal>
      <h2>Write Your Review</h2>
      <h4>About the [productName]</h4>
      <form>
        <p>Star rating selector*</p>
        {/* onclick of star it displays the appropriate text next (poor, fair, average, good, great) */}
        <p>Helpful* radio options Yes and No</p>
        <p>Characteristics*</p>
        <p>Review Summary Text</p>
        <p>Review Body* min 50 characters</p>
        <p>Review Body counter</p>
        <p>Photos (upload here)</p>
        <p>Nickname</p>
        <p>email</p>
        <p>submit button</p>
      </form>
    </StyledModal>
    </div>)
}