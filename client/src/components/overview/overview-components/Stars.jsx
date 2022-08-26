import styled from 'styled-components';
import React, { useState } from "react";

const StyledOverviewStars = styled.p`
grid-area: OvStar;
margin-bottom: 0px
`;

export default function OverviewStars(props) {
  return (
    <StyledOverviewStars>
        <p>Stars</p>
      </StyledOverviewStars>
  );
}