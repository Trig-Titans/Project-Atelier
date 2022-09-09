import React from 'react';
import {StyledBackground} from '../../questions/AnswerModal.jsx';
import { Button } from '../sharedStyles/sharedStyledComponents.js';
import styled from 'styled-components';

const StyledCompleteModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
  width: 30vw;
  min-width: 250px;
  height: 20vh;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const CompletedFormModal = ({ setFormComplete }) => {

  return ( <div>
    <StyledBackground onClick={()=>{setFormComplete(false)}}></StyledBackground>
    <StyledCompleteModal>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '2%', textAlign: 'center', paddingTop: '8%'}}>
      <h3>Review Recorded!</h3>
      <p>Please continue browsing while our systems update.</p>
      <Button onClick={()=>{setFormComplete(false)}}>Continue</Button>
      </div>
    </StyledCompleteModal>
    </div>
  )
}

