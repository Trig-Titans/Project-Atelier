import styled from 'styled-components';
import React, { useState } from "react";

const StyledOverviewStars = styled.div`
grid-area: OvStar;
margin-bottom: 0px
`;

export default function OverviewStars({ stars }) {
  return (
    <StyledOverviewStars>
        <p>{stars}</p>
      </StyledOverviewStars>
  );
}