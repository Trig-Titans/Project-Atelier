/* eslint-disable react/prop-types */
import React from 'react';
import { Answer } from './Answer.jsx'

const AnswerList = ({ answers }) => {

  var id = 0;

  return (
    <div>
      {answers.map((answer) => {
        id++;
        return (
        <Answer answerData={answer} key={answer.id} id={id} />
        )})}
    </div>

  )
}


export default AnswerList;
