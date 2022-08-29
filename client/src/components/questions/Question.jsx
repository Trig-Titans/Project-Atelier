/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import AnswerList from './AnswerList.jsx';
import axios from 'axios';
import API_KEY from '../../../../config.js';


const StyledQandA = styled.div`
  text-align: left;
  padding: 0.7% 0;
`;
const StyledQuestion = styled.div`
  display: flex;
  justify-content: space-between;

`;
const StyledLinks = styled.div`

`;

// turns the answers object into an array and sorts it based on helpfulness and if the seller answered.
var sortAnswers = (answersObject) => {
  var answerArray = [];
  for (var key in answersObject) {
    answerArray.push(answersObject[key]);
  }
  answerArray.sort((a, b) => {
    if (a.helpfulness < b.helpfulness) {
      return 1;
    } else if (a.helpfulness > b.helpfulness) {
      return -1;
    } else {
      return 0;
    }
  })
  answerArray.sort((a, b) => {
    if (a.answerer_name == "Seller") {
      return -1;
    }
  })

  return answerArray;
}


const Question = ({ questionData }) => {

  const [checkUserClick, setCheckUserClick] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(questionData.question_helpfulness);

  var answerArray = sortAnswers(questionData.answers);

  var helpfulClick = () => {
    if (checkUserClick === true) {
      return;
    } else {
      setHelpfulCount(helpfulCount + 1);
      axios({
        method: 'put',
        url:`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${questionData.question_id}/helpful`,
        headers: {Authorization: API_KEY}
      })
      .then((response) => {
        setCheckUserClick(true);
      })
      .catch((err) => {
        //console.log(err);
      })
    }
  }

  return (
    <StyledQandA >
      <StyledQuestion >
        <strong>{'Q: ' + questionData.question_body}</strong>
        <StyledLinks>Helpful? <u onClick={helpfulClick}>Yes</u> {`(${helpfulCount})`}</StyledLinks>
      </StyledQuestion>
      <AnswerList answers={answerArray}/>
    </StyledQandA>

  )
}

export default Question;

