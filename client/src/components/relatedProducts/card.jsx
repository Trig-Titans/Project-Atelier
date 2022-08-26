/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Carta = styled.div`
border: solid;
width: 200px;
height: 299px;
`



const Pic = styled.img`
width: 200px;
height: 195px;
`

const Container = styled.div`
 text-align: left;
 padding: 2px 16px;
 position: relative;
 bottom: 0;
`


const CardParagraphs = styled.p`
  font-size: 11px;
`

const Card = (props) => {
  axios

  return (
    <Carta>
    <Pic src="https://image.shutterstock.com/image-vector/colorful-illustration-test-word-260nw-1438324490.jpg" />
      <Container>
      <CardParagraphs>Category</CardParagraphs>
        <h5><b>John Doe</b></h5>
        <CardParagraphs>$123</CardParagraphs>
      </Container>
  </Carta>
  )
}

export default Card;