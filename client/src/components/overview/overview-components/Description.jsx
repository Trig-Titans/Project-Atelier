import styled from 'styled-components';
import React, { useState } from "react";

const StyledOverviewProductDescription = styled.div`
  margin: auto;
  grid-area: OvDesc;
  width: 100%;
  p {
    margin-top: 10px;
    padding: 20px;
    background-color: #DBDBD6;
    color: #006B6B;
    border-radius: 5px;
    min-height: 90px;
    line-height: 45px;
  }
`;

export default function OverviewDescription({ description }) {
  return (
    <StyledOverviewProductDescription>
      <p data-testid="description">{description}</p>
    </StyledOverviewProductDescription>
  );
}