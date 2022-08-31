import React from 'react';
import {BarForGraph} from '../sharedStyles/sharedStyledComponents'

export const BarGraph = ({percent}) => {
  let starPercent = percent.toFixed(0);
  let styling = {
    width: `${starPercent}%`
  }
  console.log('percent is ', percent.toFixed(0))
  return (<BarForGraph style={styling} />);
}