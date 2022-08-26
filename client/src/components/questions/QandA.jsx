import React, { useState, useEffect } from 'react';
import QuestionSearch from './QuestionSearch.jsx';
import QuestionList from './QuestionList.jsx';
import axios from 'axios';
import API_KEY from '../../../../config.js';

const QandA = () => {

  //depending on what product is given as prop make api request and change state
  var product_id = 37314;
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions?product_id=${product_id}`,
      headers: {Authorization: API_KEY}
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    })
  })


  return (
    <div>
      <h4>QUESTIONS &#38; ANSWERS</h4>
      <QuestionSearch/>
      <QuestionList/>
      <div>More Answered Questions Button</div>
      <div>Add Question Button</div>
    </div>

  )
}

export default QandA;