
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons'
//
const PlusCard = styled.div`
  border: solid 1px;
  border-width: thin;
  border-color: lightgrey;
  background-color: white;
  width: 250px;
  height: 350px;
  position: absolute;
  z-index: 5;
  border-radius: 4%;
`

 let centering= {
  padding: '50px',
  fontSize: '100px',
   color: 'lightgrey',
   zIndex: 5
}

const AddOutfit = (props) => {


  return (
    <PlusCard onClick= {props.handleClick}>
      <FontAwesomeIcon
      style={centering}
      icon={faCirclePlus} />
      <p >Add an Outfit</p>
    </PlusCard>
  )
}

export default AddOutfit;

