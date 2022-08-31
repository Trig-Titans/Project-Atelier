import React from 'react';
import {BarForGraph} from '../sharedStyles/sharedStyledComponents'

export const BarGraph = ({percent}) => {
  let starPercent = percent.toFixed(0);
  let styling = {
    width: `${starPercent}%`
  }
  return (<BarForGraph style={styling} />);
}