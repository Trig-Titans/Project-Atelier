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
    z-index: 1;
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

  const StyledIconSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    width: 2%;
    position: absolute;
    width: auto;
  `;

  const StyledIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:40px;
    height:40px;
    overflow: hidden;
    border-radius: 50%;
    background-size: cover;
    margin: 5px;
    cursor: pointer;
    border: 2px solid gray;
    transition: 0.3s;
    &:hover {
      border: 2px solid white;
    }
  `;
// export default function Expanded({ photos, expanded, setView, imgIndex, setImgIndex }) {
export default function Expanded() {
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
    <StyledExpandedView className='detail-view' style={{backgroundImage: `url(${photos[imgIndex].url})`}}>
      <StyledShrinkButton onClick={handleShrink}><FontAwesomeIcon icon={faMinimize}/></StyledShrinkButton>
      <StyledIconSection>
        {
          photos.map((photo, index) => {
            return <StyledIcon onClick={() => {
              setImgIndex(index);
            }}
            value={index} key={index} style={{backgroundImage: `url(${photo.url})`}}></StyledIcon>
          })
        }
      </StyledIconSection>
    </StyledExpandedView>
  )
}