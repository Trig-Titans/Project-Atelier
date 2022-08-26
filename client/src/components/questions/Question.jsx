/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

const StyledQuestion = styled.div`
  text-align: left;
  padding: 0.7% 0;
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
          var date = new Date(answer.date);
          var dateStr = date.toDateString();
          dateStr = dateStr.slice(dateStr.indexOf(' '));
          var secondSpaceIndex = dateStr.indexOf(' ', 5);
          dateStr = dateStr.slice(0, secondSpaceIndex) + ',' + dateStr.slice(secondSpaceIndex);

          if (answer === answerArray[0]) {
            return (
            <StyledAnswer key={answer.id}>
              <div>
                <strong>A: </strong>{answer.body}
              </div>
              <div>
                by: {answer.answerer_name}, {dateStr}
              </div>
            </StyledAnswer>
            )
          }
          return (
            <StyledAnswer key={answer.id}>
              <div>
                {answer.body}
              </div>
              <div>
                by: {answer.answerer_name}, {dateStr}
              </div>
            </StyledAnswer>
          )
        })}
      </div>
    </StyledQuestion>

  )
}

export default Question;

