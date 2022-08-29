/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Answer } from './Answer.jsx';
import styled from 'styled-components';

const StyledAnswerList = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const AnswerList = ({ answers }) => {

  const [loadMore, setLoadMore] = useState('none');
  const [list, setList] = useState(answers);

  useEffect(() => {
    if (answers.length > 2) {
      setLoadMore('block');
      setList(list.slice(0,2));
    }
  }, [])

  var loadAnswers = () => {
    setList(answers);
    setLoadMore('none');
  }

  return (
    <StyledAnswerList>
      <div>
          <strong>A:&nbsp;   </strong>
      </div>
      <div>
        {list.map((answer) => {
          return (
          <Answer answerData={answer} key={answer.id} />
          )})}
        <strong style={{display: loadMore}} onClick={loadAnswers}>See more answers</strong>
      </div>
    </StyledAnswerList>
  )
}


export default AnswerList;
