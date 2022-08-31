import React, { useState } from "react"
import styled from 'styled-components';

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
    margin-top: 10px;
    margin-left: 55rem;
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
export default function Expanded({ photos, expanded, setView, imgIndex, setImgIndex }) {
  var [currentImg, setImg] = useState(0);
  const handleShrink = (e) => {
    e.preventDefault();
    setView(expanded = !expanded)
  }

  return (
    <StyledExpandedView className='detail-view' style={{backgroundImage: `url(${photos[imgIndex].url})`}}>
      <StyledShrinkButton onClick={handleShrink}>Shrink</StyledShrinkButton>
      <StyledIconSection>
        {
          photos.map((photo, index) => {
            return <StyledIcon onClick={() => {
              setImgIndex(imgIndex = index);
            }}
            value={index} key={index} style={{backgroundImage: `url(${photo.url})`}}></StyledIcon>
          })
        }
      </StyledIconSection>
    </StyledExpandedView>
  )
}