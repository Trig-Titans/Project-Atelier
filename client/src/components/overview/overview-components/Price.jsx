import styled from 'styled-components';
import React, { useState } from "react";

const StyledOverviewPrice = styled.div`
  grid-area: OvPrice;
`;

export default function OverViewPrice({ price }) {
  if (price.sale_price) {
    return (
      <StyledOverviewPrice>
        <span style={{textDecoration: 'line-through'}}>${price.original_price}</span><br></br>
        <span style={{color: 'red'}}>${price.sale_price}</span>
      </StyledOverviewPrice>
    );
  } else {
    return (
      <StyledOverviewPrice>
        <p>${price.original_price}</p>
      </StyledOverviewPrice>
    );
  }
}