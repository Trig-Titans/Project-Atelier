import React, { useState } from 'react';
import QuestionSearch from './QuestionSearch.jsx';
import QuestionList from './QuestionList.jsx';

const QandA = (props) => {

  //depending on what product is given as prop make api request and change state

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