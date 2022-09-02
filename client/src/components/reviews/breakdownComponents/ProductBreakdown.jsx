import React from 'react';
import {BarGraphContainer} from '../sharedStyles/sharedStyledComponents.js';

let ProductBreakdown = ({characteristics}) => {

  // turn object into array so that you can map over the qualities
  let productBreakdownArray = [];
  for (let key in characteristics) {
    let item = []
    item.push(key);
    item.push(characteristics[key].id)
    // turn the string version into a number, and round to the tenths place
    item.push(Number(characteristics[key].value).toFixed(1))
    productBreakdownArray.push(item);
  }

  //product breakdown is an array of characteristics where:
  // index 0 -> name of characteristic
  // index 1 -> id of characteristic
  // index 2 -> rating to the tenths place out of 5


  let descriptions = {
    Size: ['Too Small', 'Perfect', 'Too Big'],
    Width: ['Too Narrow', 'Perfect', 'Too Wide'],
    Comfort: ['Uncomfortable', 'Ok', 'Perfect'],
    Quality: ['Poor', 'As Expected', 'Exceptional'],
    Length: ['Runs Short', 'Perfect', 'Runs Long'],
    Fit: ['Runs Tight', 'Perfect', 'Runs Tight']
  }

  return (productBreakdownArray.map( (nested) => {
    let graphDescription = descriptions[nested[0]];
    let percent = nested[2];
    return (<div key={nested[1]}>
      <h3>{nested[0]}</h3>
      <img src='https://www.citypng.com/public/uploads/preview/transparent-black-triangle-upside-down-31629765706xur3pxzdee.png' style={{height:`10px`, width:`10px`}}/>
      <BarGraphContainer></BarGraphContainer>
      <p style={{fontSize: '8px'}}>{graphDescription[0]} {graphDescription[1]} {graphDescription[2]}</p>
      </div>)
  }))
};

export { ProductBreakdown };