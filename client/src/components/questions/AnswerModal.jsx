import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const StyledBackground = styled.div`
  background: rgba(0, 0, 0, .5);
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vw;
  z-index: 100;
  cursor: pointer;
`;

const StyledModal = styled.div`
  position: fixed;
  top: 25vh; left: 25vw;
  z-index: 101;
  width: 50vw;
  height: 50vh;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const StyledTitle = styled.div`
  text-align: center;
`;

const AnswerModal = () => {

  return (
    <div>
      <StyledBackground/>
      <StyledModal>
          <StyledTitle>
          <h3>Submit your Answer</h3>
          <h4>product name and question body</h4>
          </StyledTitle>
      </StyledModal>
    </div>

  )

}

export default AnswerModal;