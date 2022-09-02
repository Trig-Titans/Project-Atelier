/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import TestStarIcon from '../stars/star.jsx'
//////////
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import {faStar} from '@fortawesome/free-solid-svg-icons'

let second= {
  color: 'cornflowerblue',
}

const Carta = styled.div`
  border: solid 1px;
  border-width: thin;
  border-color: lightgrey;
  width: 200px;
  height: 299px;
  position: relative;
`
const Layer = styled.div`
 width: 200px;
  height: 299px;
   position: absolute;
    border: solid;
    border-color: #fffb00;
    z-index: 5;

`

const PicContainer = styled.div`
  width: 200px;
  height: 195px;
  position: relative;
  z-index: 8;
`
const RelatedBtn = styled.div`
  float: right;
  position: absolute;
  right: 10px;
  top: 2px;
  color: cornflowerblue;
  z-index: 10;

`
const Pic = styled.img`
  width: 199px;
  height: 195px;
  z-index: 9;
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

  let urlIndex = 0;
  let intervalID;
  let url = props.picUrls[0]

  const hoverHandler = (event) => {

    intervalID = setInterval(() => {
      urlIndex++

      if (urlIndex === props.picUrls.length) {
        urlIndex = 0;
      }

      event.target.src = props.picUrls[urlIndex]

    }, 1000)

  }


  const exitHandler = (event) => {
    clearInterval(intervalID)
    event.target.src = props.picUrls[0]

  }


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

  const handleClick = (event) => {
    console.log(props.info)
    clearInterval(intervalID)
    props.handleChangeProduct(props.info, props.style)
  }

  return (
    <Carta >
      <RelatedBtn  onClick={()=>{
        console.log(`clicked ${props.btnStyle} button`)
        props.btnStyle === 'x' ? props.handleXClick() : props.setModalOpen(true)
        }}>
        {/* {props.button} */}
        {props.btnStyle === 'star' ? <FontAwesomeIcon  style={second} icon={faStar} />: <FontAwesomeIcon  style={second} icon={faCircleXmark} />}
        </RelatedBtn>
      <div onClick={handleClick} >
        <PicContainer >

          <Pic src={props.picUrls[0]}
            onMouseEnter={hoverHandler}
            onMouseLeave={exitHandler} />


        </PicContainer>

        <Container>
          <CategoryP>{props.category}</CategoryP>
          <h5><b>{props.name}</b></h5>
          {renderSale()}
          <TestStarIcon />
        </Container>

      </div>

    </Carta>
  )
}

export default Card;

