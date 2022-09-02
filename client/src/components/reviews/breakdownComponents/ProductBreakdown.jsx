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

  // labels for the graphs
  let descriptions = {
    Size: ['Too Small', 'Perfect', 'Too Big'],
    Width: ['Too Narrow', 'Perfect', 'Too Wide'],
    Comfort: ['Uncomfortable', 'Ok', 'Perfect'],
    Quality: ['Poor', 'As Expected', 'Exceptional'],
    Length: ['Runs Short', 'Perfect', 'Runs Long'],
    Fit: ['Runs Tight', 'Perfect', 'Runs Tight']
  }

  // make the tiny triangle
  let imgStyling = {
    height:`10px`,
    width:`10px`,
    float: 'right'
  }

  return (productBreakdownArray.map( (nested) => {
    //for each characteristic, find the appropriate description
    let graphDescription = descriptions[nested[0]];

    //calculate the percent (which will end up being where the tiny triangle lies)
    let percent = nested[2];
    percent /= 5;
    percent *= 100;
    percent = Math.round(percent);

    //container to house the tiny triangle and place it at the appropriate spot
    let divStyling = {
      width: `${percent}px`,
      display: 'flex',
      justifyContent: 'flex-end'
    }

    return (<div key={nested[1]}>
      <h3>{nested[0]}</h3>
      <div style={divStyling}>
        <img src='https://www.citypng.com/public/uploads/preview/transparent-black-triangle-upside-down-31629765706xur3pxzdee.png' style={imgStyling}/>
      </div>
      <BarGraphContainer></BarGraphContainer>
      <p style={{fontSize: '8px'}}>{graphDescription[0]} {graphDescription[1]} {graphDescription[2]}</p>
      </div>)
  }))
};

export { ProductBreakdown };