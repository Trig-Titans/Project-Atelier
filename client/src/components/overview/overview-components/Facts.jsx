import styled from 'styled-components';
import React, { useState, useEffect } from "react";

const StyledOverviewProductFacts = styled.div`
  grid-area: OvMeta;
`;

export default function OverviewFacts({ facts }) {
  var factList = facts.map((fact) => {
    return <li key={fact.value}>{fact.value}</li>
  })
  return (
    <StyledOverviewProductFacts>
      <ul>
        {factList}
      </ul>
    </StyledOverviewProductFacts>
  );
}

