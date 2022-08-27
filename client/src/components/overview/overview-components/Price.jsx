import styled from 'styled-components';
import React, { useState } from "react";

const StyledOverviewPrice = styled.div`
  grid-area: OvPrice;
`;

export default function OverViewPrice({ price }) {
  return (
    <StyledOverviewPrice>
      <p>${price.original_price}</p>
    </StyledOverviewPrice>
  );
}