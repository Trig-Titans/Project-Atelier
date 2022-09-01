import React from 'react';
import {StyledBackground, StyledModal} from '../questions/AnswerModal.jsx';

export const NewReview = ({setFormVisable}) => {
  return (<div>
    {console.log(setFormVisable)}
    <StyledBackground onClick={()=>{setFormVisable(false)}}></StyledBackground>
    <StyledModal>
      <p>Hello World</p>
    </StyledModal>
    </div>)
}