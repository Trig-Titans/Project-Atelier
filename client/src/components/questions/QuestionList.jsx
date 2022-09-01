/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Question from './Question.jsx';

const QuestionList = ({ questions, productName }) => {

  const [visible, setVisible] = useState('none');
  const [list, setList] = useState(questions)


  useEffect(() => {
    if (questions.length > 2) {
      setVisible('block');
      setList(questions.slice(0,2));
    } else {
      setList(questions);
    }
  }, [questions])

  var loadQuestions = () => {
    if (list.length + 2 >= questions.length) {
      setVisible('none');
    }
    setList(questions.slice(0,list.length + 2));
  }

  return (
   <div>
    {list.map((q) => (
      <Question questionData={q} key={q.question_id} productName={productName}/>
    ))}
    <strong style={{display: visible, cursor: 'pointer'}} onClick={loadQuestions}>More Answered Questions</strong>
   </div>
  )
}

export default QuestionList;