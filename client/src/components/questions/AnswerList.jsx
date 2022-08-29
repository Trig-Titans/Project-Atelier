/* eslint-disable react/prop-types */
import React from 'react';
import { Answer } from './Answer.jsx';
import styled from 'styled-components';

const StyledAnswerList = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const AnswerList = ({ answers }) => {

  return (
    <StyledAnswerList>
      <div>
          <strong>A:&nbsp;   </strong>
      </div>
      <div>
        {answers.map((answer) => {
          return (
          <Answer answerData={answer} key={answer.id} />
          )})}
      </div>
    </StyledAnswerList>
  )
}


export default AnswerList;
