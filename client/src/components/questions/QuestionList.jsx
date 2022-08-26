/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Question from './Question.jsx';

const QuestionList = ({ questions }) => {
  return (
   <ol>
    {questions.map((q) => (
      <Question questionData={q} key={q.question_id}/>
    ))}
   </ol>
  )
}

export default QuestionList;