import React, { useState }from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FaCheck} from '@fortawesome/free-solid-svg-icons'


  const DarkBackGround = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
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
  color: white;
  z-index: 15;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  `



const RelationModal = (props) => {
  return (
    <div>
       <DarkBackGround oncClick={ props.setIsOpen(false) } />
    <Centered>
      <Modal>
        <p>comparison modal</p>
      </Modal>
    </Centered>


    </div>

  )
};

export default RelationModal;