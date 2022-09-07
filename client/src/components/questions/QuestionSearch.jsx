/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSearchBar = styled.input`
  width: 100%;
  height: 7vh;

`;

const QuestionSearch = ({ handleChange, value }) => {

  return (
    <form style={{padding: '2vh 0'}}>
      <StyledSearchBar data-testid="Search" type='text' name='questionSearch' placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...' value={value} onChange={handleChange}></StyledSearchBar>
    </form>
  )
}

export default QuestionSearch;