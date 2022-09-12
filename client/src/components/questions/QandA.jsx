/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import QuestionSearch from './QuestionSearch.jsx';
import QuestionList from './QuestionList.jsx';
import axios from 'axios';
import API_KEY from '../../../../config.js';
import styled from 'styled-components';
import { Button } from '../reviews/sharedStyles/sharedStyledComponents.js';

const StyledQandAContainer = styled.div`
  width: 80%;
  margin: auto;
  border-color: #006B6B;
  border-top-style: solid;
  border-bottom-style: solid;
`;

const StyledHeader = styled.p`
  text-align: left;
  margin-top: 5vh;
  font-size: 16px;
`;

const QandA = ({ mainProduct, mainProductName }) => {

  //depending on what product is given as prop make api request and change state
  const [questions, setQuestions] = useState([]);
  const [value, setValue] = useState('');
  const [masterList, setMasterList] = useState([]);
  const [loading, setLoading] = useState('block');


  useEffect(() => {
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions?product_id=${mainProduct}&count=35`,
      headers: {Authorization: API_KEY}
    })
    .then((response) => {
      setQuestions(response.data.results);
      console.log('pasta');
      console.log('pasta');
      console.log('pizza');
      setMasterList(response.data.results);
      setLoading('none');
    })
    .catch((err) => {
      //console.log(err);
    })
  }, [mainProduct])

  var handleChange = (e) => {
    setValue(e.target.value);
    if (e.target.value.length >= 3) {
      var filteredQuestions = [];
      for (var i = 0; i < masterList.length; i++) {
        if (masterList[i].question_body.indexOf(e.target.value) != -1) {
          filteredQuestions.push(masterList[i]);
        }
      }
      setQuestions(filteredQuestions);
    } else {
      setQuestions(masterList);
    }
  }

  return (
    <StyledQandAContainer >
      <div style={{display: loading}}>LOADING</div>
      <StyledHeader >QUESTIONS &#38; ANSWERS</StyledHeader>
      <QuestionSearch handleChange={handleChange} value={value}/>
      <QuestionList productName={mainProductName} productID={mainProduct} questions={questions}/>
    </StyledQandAContainer>

  )
}

export { QandA, StyledHeader };