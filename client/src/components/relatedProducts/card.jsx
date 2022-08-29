/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TestStarIcon from '../stars/star.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

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
const PicContainer=styled.div`
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

  return (
    <Carta>
      <PicContainer >
      <FontAwesomeIcon icon={faStar} />
      <Pic src={props.picUrl} />

      </PicContainer>
      <Container>

      <CardParagraphs>{props.category}</CardParagraphs>
        <h5><b>{props.name}</b></h5>
        <CardParagraphs>{props.salePrice}</CardParagraphs>
        <CardParagraphs>${props.price}</CardParagraphs>
        <CardParagraphs>salePrice</CardParagraphs>
        <TestStarIcon/>
      </Container>
  </Carta>
  )
}

export default Card;