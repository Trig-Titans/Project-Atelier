import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-regular-svg-icons'

let first = {
  'verticalAlign': 'top',
  color: 'blue',
}

const OutlineStarIcon = ()=> <FontAwesomeIcon style= {first} icon={faStar} />

export default OutlineStarIcon;