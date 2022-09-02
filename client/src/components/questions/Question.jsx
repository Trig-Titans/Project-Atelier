/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import AnswerList from './AnswerList.jsx';
import { AnswerModal } from './AnswerModal.jsx';
import { StyledLinks } from './Answer.jsx';
import axios from 'axios';
import API_KEY from '../../../../config.js';


const StyledQandA = styled.div`
  text-align: left;
  padding: 0.7% 0;
`;
const StyledQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: .5vw;
  padding: 2vh 0 1vh;
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


const Question = ({ questionData, productName }) => {

  const [answerModal, setAnswerModal] = useState(false);

  const [checkUserClick, setCheckUserClick] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(questionData.question_helpfulness);

  var answerArray = sortAnswers(questionData.answers);
  const [answers, setAnswers] = useState(answerArray);

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

  var addAnswer = () => {
    setAnswerModal(true);
  }

  var submitAnswer = (e, photoArray) => {
    e.preventDefault();


    axios({
      method: 'post',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${questionData.question_id}/answers`,
      headers: {Authorization: API_KEY},
      data: {
        body: e.target[0].value,
        name: e.target[1].value,
        email: e.target[2].value,
        photos: photoArray
      }
    })
    .then((response) => {
      //console.log(response);
      setAnswerModal(false);
    })
    .catch((err) => {
      //console.log(err);
      setAnswerModal(false);
    })
  }

  return (
    <StyledQandA >
      <StyledQuestion >
        <h4>{'Q: ' + questionData.question_body}</h4>
        <StyledLinks>
          Helpful? <u onClick={helpfulClick} style={{cursor: 'pointer'}}>Yes</u> {`(${helpfulCount})`} &nbsp;&nbsp;|&nbsp;&nbsp; <u data-testid={questionData.question_id} onClick={addAnswer} style={{cursor: 'pointer'}}>Add Answer</u>
        </StyledLinks>
      </StyledQuestion>
      <AnswerList answers={answers}/>
      {answerModal ? <AnswerModal questionBody={questionData.question_body} productName={productName} submit={submitAnswer} setAnswerModal={setAnswerModal}/> : <div></div>}
    </StyledQandA>

  )
}

export default Question;

