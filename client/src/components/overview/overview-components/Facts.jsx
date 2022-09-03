import styled from 'styled-components';
import React, { useState, useEffect } from "react";

const StyledOverviewProductFacts = styled.div`
  margin-top: 0px;
  grid-area: OvMeta;
  ul {
    margin-top: 10px;
    padding: 20px;
    padding-left: 40px;
    background-color: gray;
    color: white;
    border-radius: 5px;
    min-height: 90px;
  }
`;

export default function OverviewFacts({ facts }) {
  var factList = facts.map((fact) => {
    return <li key={fact.value}>{fact.value}</li>
  })
  return (
    <StyledOverviewProductFacts>
      <ul data-testid='facts'>
        {factList}
      </ul>
    </StyledOverviewProductFacts>
  );
}

