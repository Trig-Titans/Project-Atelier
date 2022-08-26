import styled from 'styled-components';
import React, { useState } from "react";

const StyledOverviewPrice = styled.div`
  grid-area: OvPrice;
`;

export default function OverViewPrice(props) {
  return (
    <StyledOverviewPrice>
      <p>$8,000</p>
    </StyledOverviewPrice>
  );
}