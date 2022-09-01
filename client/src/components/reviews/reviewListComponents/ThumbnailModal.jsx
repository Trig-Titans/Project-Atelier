import React from 'react';
import {StyledBackground} from '../../questions/AnswerModal.jsx';
import styled from 'styled-components';

const mystyle = {
  margin: '20px',
  padding: "10px",
  maxHeight: "80vh",
  maxWidth: "80vw"
};

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 101;

  /* max-width: 50vw;
  max-height: 75vh; */

  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  /* overflow: auto; */
`;

export const ThumbnailModel = ({thumbnailUrl, setThumbnailView}) => {
  return (<div>
    <StyledBackground onClick={()=>{setThumbnailView(false)}}></StyledBackground>
    <StyledModal><img style={mystyle} src={thumbnailUrl} /></StyledModal>
    </div>);
}

