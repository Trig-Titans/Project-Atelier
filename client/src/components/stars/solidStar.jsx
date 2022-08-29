import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

let second= {
  // 'fontFamily': 'FontAwesome',
  // content: "\f005",
  color: 'black',
  position: 'absolute',
  left: '0',
  top: '0',
  width: '70%',
  overflow: 'hidden',
}

const SolidStarIcon = ()=> <FontAwesomeIcon style={second} icon={faStar} />

export default SolidStarIcon;