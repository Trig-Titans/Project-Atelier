import styled from 'styled-components';
import React, { useState } from "react";

const StyledOverviewProductDescription = styled.div`
  margin-left: 30%;
  grid-area: OvDesc;
`;

export default function OverviewDescription(props) {
  return (
    <StyledOverviewProductDescription>
      <p>Buy these stickers, they are neat</p>
    </StyledOverviewProductDescription>
  );
}