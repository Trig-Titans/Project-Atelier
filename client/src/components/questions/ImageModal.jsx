import React from 'react';
import { StyledBackground } from './AnswerModal.jsx';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: auto;
  height: auto;
`;

const StyledExitButton = styled.button`
  position: absolute;
  top: 0; left: 0;
  height: 5vh;
  width: 5vw;
  cursor: pointer;
`;

const StyledImageModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
  max-width: 50vw;
  width: max-content;
  max-height: 75vh;
  height: max-content;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: auto;
`;

const ImageModal = ({ url, setImageModal }) => {

  return (
    <div>
      <StyledBackground onClick={() => {setImageModal(false)}} />
      <StyledImageModal>
        <StyledExitButton onClick={() => {setImageModal(false)}} > &#x2715; </StyledExitButton>
        <StyledImage src={url}></StyledImage>
      </StyledImageModal>
    </div>
  )
}

export default ImageModal;