import styled from 'styled-components';
import React, { useState } from "react";

const StyledOverviewName = styled.p`
  grid-area: OvName;
`;

export default function OverViewName(props) {
  return (
    <StyledOverviewName>
      <p>Category</p>
      <h2>Avatar Stickers</h2>
    </StyledOverviewName>
  );
}