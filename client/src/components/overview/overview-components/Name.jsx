import styled from 'styled-components';
import React, { useState } from "react";

const StyledOverviewName = styled.div`
  padding-left: 10px;
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

export default function OverViewName({ name, category }) {
  return (
    <StyledOverviewName>
      <StyledOverviewCategory data-testid='category'>{category}</StyledOverviewCategory>
      <StyledOverviewTitle data-testid='product-name'>{name}</StyledOverviewTitle>
    </StyledOverviewName>
  );
}