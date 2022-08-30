import styled from 'styled-components';
import React, { useState } from "react";

const StyledOverviewStars = styled.div`
grid-area: OvStar;
margin-top: 50px
`;

export default function OverviewStars({ stars }) {
  return (
    <StyledOverviewStars>
        <p>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
      </StyledOverviewStars>
  );
}