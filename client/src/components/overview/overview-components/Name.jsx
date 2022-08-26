import styled from 'styled-components';
import React, { useState } from "react";

const StyledOverviewName = styled.div`
  grid-area: OvName;
`;

const StyledOverviewCategory = styled.p`
  font-weight: light;
  font-size: small;
`;

const StyledOverviewTitle = styled.div`
  font-weight: bold;
  font-size: large;
`;

export default function OverViewName(props) {
  return (
    <StyledOverviewName>
      <StyledOverviewCategory>Category</StyledOverviewCategory>
      <StyledOverviewTitle>Avatar Stickers</StyledOverviewTitle>
    </StyledOverviewName>
  );
}