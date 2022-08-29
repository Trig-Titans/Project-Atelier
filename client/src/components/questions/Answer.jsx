/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledAnswer = styled.div`
  padding: 0.7% 0;
`;


const dateParser = (rawDate) => {
  var date = new Date(rawDate.replace(/-/g, '/').replace(/T.+/, ''));
  var dateStr = date.toDateString();

  dateStr = dateStr.slice(dateStr.indexOf(' '));

  var secondSpaceIndex = dateStr.indexOf(' ', 5);

  dateStr = dateStr.slice(0, secondSpaceIndex) + ',' + dateStr.slice(secondSpaceIndex);

  return dateStr;
};

const Answer = ({ answerData }) => {

  let dateStr = dateParser(answerData.date);
  let user = answerData.answerer_name;

  if (answerData.answerer_name === 'Seller') {
    user = <strong>Seller</strong>;
  }

  return (
    <StyledAnswer >
      <div>
        {answerData.body}
      </div>
      <div>
        by: {user}, {dateStr}
      </div>
    </StyledAnswer>
  )
}

export {Answer, dateParser};