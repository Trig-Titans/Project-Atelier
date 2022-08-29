/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Question from './Question.jsx';

const QuestionList = ({ questions }) => {
  return (
   <div>
    {questions.map((q) => (
      <Question questionData={q} key={q.question_id}/>
    ))}
   </div>
  )
}

export default QuestionList;