/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import QuestionSearch from './QuestionSearch.jsx';
import QuestionList from './QuestionList.jsx';
import axios from 'axios';
import API_KEY from '../../../../config.js';
import styled from 'styled-components';
import { Button } from '../reviews/sharedStyles/sharedStyledComponents.js';

const QandA = () => {

  //depending on what product is given as prop make api request and change state
  var product_id = 37314;
  var product_name = "Slacker's Slacks";
  const [questions, setQuestions] = useState([]);
  const [value, setValue] = useState('');
  const [masterList, setMasterList] = useState([]);


  useEffect(() => {
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions?product_id=${product_id}`,
      headers: {Authorization: API_KEY}
    })
    .then((response) => {
      console.log(response.data.results);
      setQuestions(response.data.results);
      setMasterList(response.data.results);
    })
    .catch((err) => {
      //console.log(err);
    })
  }, [])

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
    <div >
      <h4 style={{textAlign: 'left'}}>QUESTIONS &#38; ANSWERS</h4>
      <QuestionSearch handleChange={handleChange} value={value}/>
      <QuestionList productName={product_name} productID={product_id} questions={questions}/>
    </div>

  )
}

export default QandA;