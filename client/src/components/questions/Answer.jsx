/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledAnswer = styled.div`
  padding: 0.7% 0;
  display: flex;
  justify-content: flex-start;
`;


const dateParser = (rawDate) => {
  var date = new Date(rawDate.replace(/-/g, '/').replace(/T.+/, ''));
  var dateStr = date.toDateString();

  dateStr = dateStr.slice(dateStr.indexOf(' '));

  var secondSpaceIndex = dateStr.indexOf(' ', 5);

  dateStr = dateStr.slice(0, secondSpaceIndex) + ',' + dateStr.slice(secondSpaceIndex);

  return dateStr;
};

const Answer = ({ answerData, id }) => {

  var A = 'hidden';

  if (id === 1) {
    A = 'visible';
  }

  let dateStr = dateParser(answerData.date);
  let user = answerData.answerer_name;

  if (answerData.answerer_name === 'Seller') {
    user = <strong>Seller</strong>;
  }

  return (
    <StyledAnswer >
      <div>
        <strong style={{visibility: A}}>A:&nbsp;   </strong>
      </div>
      <div>
        <div>
          {answerData.body}
        </div>
        <div>
          by: {user}, {dateStr}
        </div>
      </div>
    </StyledAnswer>
  )
}

export {Answer, dateParser};