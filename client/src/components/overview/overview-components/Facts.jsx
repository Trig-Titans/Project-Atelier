import styled from 'styled-components';
import React, { useState, useEffect } from "react";

const StyledOverviewProductFacts = styled.div`
  margin-top: 0px;
  grid-area: OvMeta;
  ul {
    margin-top: 10px;
    padding: 20px;
    padding-left: 40px;
    background-color: #DBDBD6;
    color: #006B6B;
    border-radius: 5px;
    min-height: 90px;
    transition: 0.3s;
  }
  @media (max-width: 600px) {
    max-width: 15rem;
    margin-left: 1.1rem;
  }
`;

export default function OverviewFacts({ facts, dark }) {
  var factList = facts.map((fact) => {
    return <li key={fact.value}>{fact.value}</li>
  })
  if (!dark) {
    return (
      <StyledOverviewProductFacts>
        <ul data-testid='facts'>
          {factList}
        </ul>
      </StyledOverviewProductFacts>
    );
  } else {
    return (
      <StyledOverviewProductFacts>
        <ul data-testid='facts' style={{backgroundColor: 'black', color: '#DBDBD6'}}>
          {factList}
        </ul>
      </StyledOverviewProductFacts>
    );
  }
}

