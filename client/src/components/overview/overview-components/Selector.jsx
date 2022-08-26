import styled from 'styled-components';
import React, { useState } from "react";

const StyledOverviewStyleSelector = styled.div`
  grid-area: OvStyle;
`;
const StyledOverviewStylesTitle = styled.div`
`;
const StyledOverviewStylesCircle = styled.div`
`;

export default function OverViewSelector(props) {
  <StyledOverviewStyleSelector>
    <StyledOverviewStylesTitle>Style {'>'} selected style</StyledOverviewStylesTitle>
    {/* maybe make this one a flexbox? */}
    <StyledOverviewStylesCircle></StyledOverviewStylesCircle>
  </StyledOverviewStyleSelector>
}