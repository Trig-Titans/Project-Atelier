/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TestStarIcon from '../stars/star.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Carta = styled.div`
  border: solid 1px;
  border-width: thin;
  border-color: lightgrey;
  width: 200px;
  height: 299px;
`
const PicContainer = styled.div`
  width: 200px;
  height: 195px;
  position: relative;
`
const StarBtn = styled.div`
  float: right;
  position: absolute;
  right: 10px;
  top: 2px;
  color: cornflowerblue;

`
const Pic = styled.img`
  width: 199px;
  height: 195px;
`
const Container = styled.div`
  text-align: left;
  padding: 2px 16px;
  position: relative;
  bottom: 0;
`
const CategoryP = styled.p`
  font-size: 11px;
`
const SaleP = styled.p`
  font-size: 11px;
  color: red;
`
const PriceP2 = styled.p`
  font-size: 11px;
  text-decoration: line-through;
`
const PriceP = styled.p`
font-size: 11px;
`

const Card = (props) => {
  // create hover handler for pic
  // on hover will call set interval
  // set interval will call hover handler
  // hover handler will change the pic src
  // when no longer hovering (mouse over) pic
  //src will return to 0 index url
  // '7327.00' test sale price

  //if props.id === related
  //set btn to faStar
  //if props.id === outfit
  //set bt to faAdd

  const renderSale = () => {
    if (props.salePrice !== null) {
      return (
        <div>
          <SaleP>{props.salePrice}</SaleP>
          <PriceP2>{props.price}</PriceP2>
        </div>
      )
    } else {
      return (<PriceP>{props.price}</PriceP>)
    }
  }

  return (
    <Carta>
      <PicContainer >
        <StarBtn><FontAwesomeIcon icon={faStar} /></StarBtn>
        <Pic src={props.picUrls[0]} />
      </PicContainer>
      <Container>

        <CategoryP>{props.category}</CategoryP>
        <h5><b>{props.name}</b></h5>
        {renderSale()}
        <TestStarIcon />
      </Container>
    </Carta>
  )
}

export default Card;