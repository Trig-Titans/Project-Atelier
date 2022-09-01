import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

let second= {
  // 'fontFamily': 'FontAwesome',
  // content: "\f005",
  color: 'cornflowerblue',
}

const StarBtn = ()=> <FontAwesomeIcon style={second} icon={faStar} />

export default StarBtn;