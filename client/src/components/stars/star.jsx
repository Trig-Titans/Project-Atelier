import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

let container = {
  position: 'relative',
  display: 'inlineBlock'
}

let first = {
  'verticalAlign': 'top',
  color: 'lightgrey',
}
let second= {
  color: 'white',
  position: 'absolute',
  left: '0',
  top: '0',
  // width: '10%',
  overflow: 'hidden',
}



const TestStarIcon = (props) => (
  <div style={container}>
    <FontAwesomeIcon style={first} icon={faStar}/>
    <FontAwesomeIcon style={second} icon={faStar} transform="shrink-6"/>
    </div> )


export default TestStarIcon

