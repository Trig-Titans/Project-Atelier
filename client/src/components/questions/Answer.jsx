/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import ImageModal from './ImageModal.jsx';
import axios from 'axios';
import API_KEY from '../../../../config.js';

const StyledAnswer = styled.div`
  padding: 0 0 0.7% 0;
  margin-right: .5vw;
`;

const StyledAnswerImage = styled.img`
  padding: 1vh 0;
  width: auto;
  height: 15vh;
  cursor: pointer;
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

  const [reportText, setReportText] = useState(<u>Report</u>);

  const [checkHelpfulClick, setCheckHelpfulClick] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(answerData.helpfulness);

  const [imageModal, setImageModal] = useState(false);
  const [modalURL, setModalURL] = useState('');

  const dateStr = dateParser(answerData.date);
  let user = answerData.answerer_name;

  if (answerData.answerer_name === 'Seller') {
    user = <strong>Seller</strong>;
  }

  var helpfulClick = () => {
    if (checkHelpfulClick === true) {
      return;
    } else {
      setHelpfulCount(helpfulCount + 1);
      axios({
        method: 'put',
        url:`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${answerData.id}/helpful`,
        headers: {Authorization: API_KEY}
      })
      .then((response) => {
        setCheckHelpfulClick(true);
      })
      .catch((err) => {
        //console.log(err);
      })
    }
  }

  var reportClick = () => {
    if (reportText == <span>Reported</span>) {
      return;
    } else {
      axios({
        method: 'put',
        url:`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${answerData.id}/report`,
        headers: {Authorization: API_KEY}
      })
      .then((response) => {
        setReportText(<span>Reported</span>);
      })
      .catch((err) => {
        //console.log(err);
      })
    }
  }

  var imageClick = (e) => {
    setModalURL(e.target.src);
    setImageModal(true);
  }

  return (
    <StyledAnswer >
      <div>
        {answerData.body}
      </div>
      {answerData.photos.length > 0 ? answerData.photos.map((url) => (<StyledAnswerImage src={url} key={url} onClick={imageClick}></StyledAnswerImage>)) : <div></div>}
      {imageModal ? <ImageModal setImageModal={setImageModal} url={modalURL}/> : <div></div>}
      <div>
        by: {user}, {dateStr} &nbsp;&nbsp;|&nbsp;&nbsp; Helpful?&nbsp; <u onClick={helpfulClick} style={{cursor: 'pointer'}}>Yes</u>{`(${helpfulCount})`} &nbsp;&nbsp;|&nbsp;&nbsp; <span onClick={reportClick} style={{cursor: 'pointer'}}>{reportText}</span>
      </div>
    </StyledAnswer>
  )
}

export {Answer, dateParser};