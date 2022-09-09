import styled from 'styled-components';
import React, { useState, useContext } from "react";
import styleIndexContext from '../GalleryView.jsx';
const { Checkmark } = require('react-checkmark');

const StyledOverviewStyleSelector = styled.div`
  grid-area: OvStyle;
  padding-left: 10px;
  color: #006B6B;

`;
const StyledOverviewStylesTitle = styled.div`
`;
const StyledOverviewStylesSection = styled.div`
  margin-top: 10px;
  justify-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 270px;
  max-height: 175px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #9e9e9e;
    border-radius: 4px;
  }
`;
const StyleCircle = styled.div`
  align-items: center;
  width:50px;
  height:50px;
  overflow: hidden;
  border-radius: 50%;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 2px 2px 5px black;
  }
`;


export default function OverViewSelector({ styles, setStyles, styleIndex, currentStyleId, setCurrentStyleId }) {
  return (
  <StyledOverviewStyleSelector>
    <StyledOverviewStylesTitle data-testid='style-name'>Style {'>'} {styles[styleIndex].name}</StyledOverviewStylesTitle>
    <StyledOverviewStylesSection data-testid='styles-buttons'>
      {
      styles.map((style, index) => {
        if (styleIndex === index) {
          return (
            <span className='style-button' key={index}>
              <StyleCircle onClick={() => {
                  setStyles(styleIndex = index);
                }}
                style={{backgroundImage: `url(${style.photos[0].thumbnail_url})`, border: '3px solid lightgray'}}>
                  <Checkmark size='small' />
              </StyleCircle>
            </span>
          )
        } else {
          return (
            <StyleCircle onClick={() => {
              setStyles(styleIndex = index);
              setCurrentStyleId(currentStyleId = style.style_id)
            }}
            key={index} style={{backgroundImage: `url(${style.photos[0].thumbnail_url})`, border: '2px solid gray'}}>
            </StyleCircle>
          )
        }
      })
    }
    </StyledOverviewStylesSection>
  </StyledOverviewStyleSelector>
  )
}