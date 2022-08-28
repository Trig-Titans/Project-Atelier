/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Carta = styled.div`
border: solid;
border-width: thin;
border-color: #f2f2f2;
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
    <Pic src={props.picUrl} />
      <Container>
      <CardParagraphs>{props.category}</CardParagraphs>
        <h5><b>{props.name}</b></h5>
        <CardParagraphs>${props.price}</CardParagraphs>
      </Container>
  </Carta>
  )
}

export default Card;