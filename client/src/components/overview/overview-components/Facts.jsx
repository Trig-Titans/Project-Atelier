import styled from 'styled-components';
import React, { useState } from "react";

const StyledOverviewProductFacts = styled.div`
  grid-area: OvMeta;
`;

export default function OverviewFacts(props) {
  return (
    <StyledOverviewProductFacts>
      <ul>
        <li>Super Fake</li>
        <li>Not Real</li>
        <li>Made up</li>
      </ul>
    </StyledOverviewProductFacts>
  );
}

