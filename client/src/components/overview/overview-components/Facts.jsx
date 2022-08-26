import styled from 'styled-components';
import React, { useState, useEffect } from "react";
import Fact from './Fact.jsx'

const StyledOverviewProductFacts = styled.div`
  grid-area: OvMeta;
`;

export default function OverviewFacts({ facts }) {
  console.log(facts);
  var factList = facts.map((fact) => {
    return <li>{fact.value}</li>
  })
  return (
    <StyledOverviewProductFacts>
      <ul>
        {factList}
      </ul>
    </StyledOverviewProductFacts>
  );
}

