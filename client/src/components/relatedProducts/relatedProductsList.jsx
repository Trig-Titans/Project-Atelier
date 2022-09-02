/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from 'styled-components';
import Outfit from './outfitList.jsx'
import RelationModal from './relationModal.jsx'
import RelatedCarousel from './relatedCarousel.jsx'

const Lists = styled.div`
  margin-left: 23%;
  width:53%;
`

const RelatedProducts = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const product_id = props.mainProduct
  const product_style = props.currentStyleId
    const [modalOpen, setModalOpen] = React.useState(false);
  console.log('RelatedProducts component called')


  return (
    <Lists>
      <br />
      <br />

            <RelatedCarousel
            product_id = {product_id}
            product_style={product_style}
            setModalOpen={setModalOpen}
            handleChangeProduct={props.handleChangeProduct}
            />
      <br />
      <br />
      <Outfit
      addProduct = {props.mainProduct}
      addStyle = {props.currentStyleId}
      handleChangeProduct ={props.handleChangeProduct}
      />
      {isOpen? <RelationModal setIsOpen= {setIsOpen}/> : <div></div>}
    </Lists>
  );
}

export default RelatedProducts;