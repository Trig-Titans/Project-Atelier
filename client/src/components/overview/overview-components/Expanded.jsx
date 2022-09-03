import React, { useState, useContext } from "react"
import styled from 'styled-components';
import { faMinimize } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExpandedContext } from '../GalleryView.jsx';

const StyledExpandedView = styled.div`
    min-width:60rem;
    min-height: 40rem;
    display: flex;
    margin: auto;
    text-align: center;
    background-size: cover;
    border-radius: 5px;
  `;

const StyledShrinkButton = styled.button`
  position: absolute;
  z-index: 5;
  min-height: 40px;
  min-width: 40px;
  margin-top: 10px;
  margin-left: 57rem;
  background-color: #2525257f;
  color: white;
  border-radius: 5px;
  border: none;
  padding: 10px;
  cursor: zoom-out;
  transition: 0.3s;
  &:hover {
    background-color: rgba(255,255,255,0.5);
    border-radius: 5px;
    color: gray;
  }
`;

// export default function Expanded({ photos, expanded, setView, imgIndex, setImgIndex }) {
export default function Expanded(props) {
  // these are the props that are available using useContext
  const { photos, expandedVal, imgIndexVal } = useContext(ExpandedContext);
  // destructured state
  const [expanded, setView] = expandedVal;
  const [imgIndex, setImgIndex] = imgIndexVal
  var [currentImg, setImg] = useState(0);
  const handleShrink = (e) => {
    e.preventDefault();
    expandedVal[1](!expanded)
  }
  return (
    <StyledExpandedView data-testid='expanded-image' className='detail-view' style={{backgroundImage: `url(${photos[imgIndex].url})`}}>
      <StyledShrinkButton data-testid='shrink-button' onClick={handleShrink}><FontAwesomeIcon icon={faMinimize}/></StyledShrinkButton>
      {props.children}
    </StyledExpandedView>
  )
}