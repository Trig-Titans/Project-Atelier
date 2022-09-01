/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Question from './Question.jsx';
import QuestionModal from './QuestionModal.jsx';
import styled from 'styled-components';
import { Button } from '../reviews/sharedStyles/sharedStyledComponents.js';
import axios from 'axios';
import API_KEY from '../../../../config.js';


const StyledQuestionList = styled.div`
  max-height: 60vh;
  overflow: auto;
`;

const StyledButtonList = styled.div`
  display: flex;

`;


const QuestionList = ({ questions, productName, productID }) => {

  const [visible, setVisible] = useState('none');
  const [list, setList] = useState(questions);
  const [questionModal, setQuestionModal] = useState(false);


  useEffect(() => {
    if (questions.length > 2) {
      setVisible('block');
      setList(questions.slice(0,2));
    } else {
      setVisible('none');
      setList(questions);
    }
  }, [questions])

  var loadQuestions = () => {
    if (list.length + 2 >= questions.length) {
      setVisible('none');
    }
    setList(questions.slice(0,list.length + 2));
  }

  var submitQuestion = (e) => {
    e.preventDefault();
    console.log(e);

    axios({
      method: 'post',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions`,
      headers: {Authorization: API_KEY},
      data: {
        body: e.target[0].value,
        name: e.target[1].value,
        email: e.target[2].value,
        product_id: productID
      }
    })
    .then((response) => {
      //console.log(response);
      setQuestionModal(false);
    })
    .catch((err) => {
      //console.log(err);
      setQuestionModal(false);
    })

  }

  return (
    <div>
      <StyledQuestionList>
        {list.map((q) => (
          <Question questionData={q} key={q.question_id} productName={productName}/>
        ))}
      </StyledQuestionList>
      <StyledButtonList>
        <Button style={{display: visible}} onClick={loadQuestions}>MORE ANSWERED QUESTIONS</Button>
        <Button onClick={() => {setQuestionModal(true)}} primary>ADD A QUESTION +</Button>
      </StyledButtonList>
      {questionModal ? <QuestionModal productName={productName} setQuestionModal={setQuestionModal} submit={submitQuestion}/> : <div></div>}
    </div>


  )
}

export default QuestionList;