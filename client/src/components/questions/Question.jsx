/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

const StyledQuestion = styled.div`
  text-align: left;
  //padding: 0.7% 0;
`;
const StyledAnswer = styled.div`
  padding: 0.7% 0;
`;

const Question = ({ questionData }) => {

  // turns the answers object into an array for easy iteration
  var answerArray = [];
  for (var key in questionData.answers) {
    answerArray.push(questionData.answers[key]);
  }

  return (
    <StyledQuestion >
      <strong>{'Q: ' + questionData.question_body}</strong>
      <div>
        {answerArray.map((answer) => {
          if (answer === answerArray[0]) {
            return (
            <StyledAnswer key={answer.id}><strong>A: </strong>{answer.body}</StyledAnswer>
            )
          }
          return (
            <StyledAnswer key={answer.id}><strong style={{visibility: 'hidden'}}>A: </strong>{answer.body}</StyledAnswer>
          )
        })}
      </div>
    </StyledQuestion>

  )
}

export default Question;

