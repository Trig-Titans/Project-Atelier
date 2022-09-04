import React, { useState }from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FaCheck} from '@fortawesome/free-solid-svg-icons'

  const DarkBackGround = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  `
  const Centered = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  `
  const Modal = styled.div`
  width: 250px;
  height: 170px;
  background: white;
  color: teal;
  z-index: 15;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  `
const RelationModal = (props) => {
  return (
    <div>
       <DarkBackGround onClick={()=>{

        console.log('dark background clicked')
        props.setModalOpen(false) }
       }
        // props.setIsOpen(false) }
        />
    <Centered>
      <Modal>
        <span>{props.productData.info.name}</span>
        <span>{props.accumulatedProductData.filter(product => product.info.id === props.productCardClickedOn)[0].info.name}</span>
      </Modal>
    </Centered>
    </div>
  )
};

export default RelationModal;

