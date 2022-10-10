
import React from 'react';
import styled from 'styled-components';
import TestStarIcon from '../stars/star.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import StarRatings from 'react-star-ratings';

let fAColor = {
}

const ProductCard = styled.div`
  border: solid 1px;
  border-width: thin;
  border-color: lightgrey;
  width: 250px;
  height: 350px;
  position: relative;
  border-radius: 4%;
`
const PicContainer = styled.div`
  width: 249px;
  height: 245px;
  position: relative;
  z-index: 9;
  border-radius: 4%;
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
  width: 248px;
  height: 245px;
  z-index: 8;
  border-radius: 4% 4% 0px 0px;
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
  const [picUrl, setPicUrl] = React.useState(props.picUrls[0])
  const [intervalState, setIntervalState] = React.useState(null)

  React.useEffect(()=>{
    setPicUrl(props.picUrls[0])
  }, [props.picUrls[0]])

  const hoverHandler = (event) => {
      intervalID = setInterval(() => {
        urlIndex++
        if (urlIndex === props.picUrls.length) { urlIndex = 0 }
        setPicUrl(props.picUrls[urlIndex])
      }, 1000)

      setIntervalState(intervalID)
  }

  const exitHandler = (event) => {
    clearInterval(intervalState)
    setPicUrl(props.picUrls[0])
  }

  const handleClick = (event) => {
    props.handleChangeProduct(props.info, props.style)
    clearInterval(intervalState)
  }

  const starBtnHanlder = ()=>{
    props.setModalOpen(true)
    props.setProductCardClickedOn(props.info.id)
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

  return (
    <ProductCard>
      <RelatedBtn
        onClick={() => {
          props.btnStyle === 'x' ?
            props.handleXClick() :
            starBtnHanlder();
        }}>
        {
        props.btnStyle === 'star' ?
          <FontAwesomeIcon style={fAColor} icon={faStar} /> :
          <FontAwesomeIcon style={fAColor} icon={faCircleXmark} />
        }
      </RelatedBtn >

      <div
      data-testid = {props.btnStyle ==='x' ?  'outfit'+props.name : 'related'+ props.name}
      onClick={handleClick}
      onMouseEnter={hoverHandler}
      onMouseLeave={exitHandler}
      >
        <PicContainer >
          <Pic src= {picUrl}/>
        </PicContainer>

        <Container>
          <CategoryP>{props.category}</CategoryP>

          <h5><b>{props.name}</b></h5>

          {renderSale()}
        </Container>

      </div>

      {props.starCount > 0 ?
        (<StarRatings
        rating={parseFloat(props.starCount)}
        starRatedColor="gray"
        numberOfStars={5}
        starDimension="15px"
        starHoverColor="yellow"
        name='rating'
        />)
        :( <div></div> )
      }
    </ProductCard>
  )
}

export default Card;

