/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Answer } from './Answer.jsx';
import styled from 'styled-components';

const StyledAnswerContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  max-height: 50vh;
  width: max-content;
`;

const StyledAnswerList = styled.div`
  overflow: auto;
  max-width: 50vw;
`;


const AnswerList = ({ answers }) => {

  const [visible, setVisible] = useState('none');
  const [loadMore, setLoadMore] = useState('See more answers');
  const [list, setList] = useState(answers);

  useEffect(() => {
    if (answers.length > 2) {
      setVisible('block');
      setList(list.slice(0,2));
    }
  }, [])

  var loadAnswers = () => {
    if (loadMore == 'See more answers') {
      setList(answers);
      setLoadMore('Collapse answers');
    } else if (loadMore == 'Collapse answers') {
      setList(list.slice(0,2));
      setLoadMore('See more answers');
    }

  }

  return (
    <StyledAnswerContainer>
      <div>
          <h4>A:&nbsp;   </h4>
      </div>
      <StyledAnswerList>
        {list.map((answer) => {
          return (
          <Answer answerData={answer} key={answer.id} />
          )})}
        <strong style={{display: visible, cursor: 'pointer', fontSize: '13px'}} onClick={loadAnswers}>{loadMore}</strong>
      </StyledAnswerList>
    </StyledAnswerContainer>
  )
}


export default AnswerList;
