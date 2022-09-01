/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const QuestionSearch = ({ handleChange, value }) => {

  return (
    <form >
      <input type='text' name='questionSearch' placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...' value={value} onChange={handleChange}></input>
    </form>
  )
}

export default QuestionSearch;