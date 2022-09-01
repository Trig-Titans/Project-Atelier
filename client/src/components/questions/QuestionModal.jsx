import React, { useState } from 'react';
import { StyledBackground, StyledModal, StyledTitle, StyledForm, StyledInput, StyledLabel, StyledAnswerBox } from './AnswerModal.jsx';
import styled from 'styled-components';

const QuestionModal = ({ productName, setQuestionModal, submit }) => {

  return (
    <div>
      <StyledBackground onClick={() => {setQuestionModal(false)}}/>
      <StyledModal>
        <StyledTitle>
        <h3>Ask your Question</h3>
        <h4>About the {productName}</h4>
        </StyledTitle>
        <StyledForm onSubmit={submit}>
          <StyledInput>
            <StyledLabel htmlFor="question">Your Question* :</StyledLabel>
            <StyledAnswerBox name="question" maxLength="1000" required></StyledAnswerBox>
          </StyledInput>
          <StyledInput>
            <StyledLabel htmlFor="name">What is your nickname?* :</StyledLabel>
            <input type="text" name="name" placeholder="Example: jackson11!" maxLength="60" required></input>
            <i>For privacy reasons, do not use your full name or email address</i>
          </StyledInput>
          <StyledInput>
            <StyledLabel htmlFor="email">Your email* :</StyledLabel>
            <input type="email" name="email" placeholder="Example: jack@email.com" maxLength="60" required></input>
            <i>For authentication reasons, you will not be emailed</i>
          </StyledInput>
          <input type="submit" value="Submit Question" style={{width: '33%', margin: 'auto'}}></input>
        </StyledForm>
      </StyledModal>
    </div>
  )
}

export default QuestionModal;

