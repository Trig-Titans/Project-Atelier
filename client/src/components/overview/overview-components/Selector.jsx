import styled from 'styled-components';
import React, { useState } from "react";

const StyledOverviewStyleSelector = styled.div`
  grid-area: OvStyle;
`;
const StyledOverviewStylesTitle = styled.div`
`;
const StyledOverviewStylesSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  max-width: 250px;
`;
const StyleCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:50px;
  height:50px;
  overflow: hidden;
  border-radius: 50%;
  img {
    flex-shrink: 0;
    min-width: 100%;
    min-height: auto
  }
`;


export default function OverViewSelector({ styles }) {
  console.log(styles[0]);
  return (
  <StyledOverviewStyleSelector>
    <StyledOverviewStylesTitle>Style {'>'} selected style</StyledOverviewStylesTitle>
    <StyledOverviewStylesSection>
      {
      styles.map((style, index) => {
        console.log(style);
        return (
          // This translate x transformation is given to the slide div because it allows the picture to be shown that correlates with the x axis vertex
          // i.e. the first picture is at x=0, the second is x=100, the third is x=200
          // updating the x value changes what picture is shown
          <StyleCircle key={index} style={{backgroundColor: 'white'}}>
            <img src={style.photos[0].thumbnail_url}></img>
          </StyleCircle>
        )
      })
    }
    </StyledOverviewStylesSection>
  </StyledOverviewStyleSelector>
  )
}