import styled from 'styled-components';
import React, { useState } from "react";

const StyledOverviewPrice = styled.div`
  grid-area: OvPrice;
`;

export default function OverViewPrice({ price }) {
  console.log(price);
  return (
    <StyledOverviewPrice>
      <p>$65.00</p>
    </StyledOverviewPrice>
  );
}