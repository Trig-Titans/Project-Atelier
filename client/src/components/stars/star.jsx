import React from 'react';
import SolidStarIcon from './solidStar.jsx'
import OutlineStarIcon from './outlineStar.jsx'

let container = {
  position: 'relative',
  display: 'inline-block'
}

const TestStarIcon = (props) => (
  <div style={container}>
     <OutlineStarIcon />
    <SolidStarIcon />
    </div> )


export default TestStarIcon

