import React from 'react';

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

  return (productBreakdownArray.map( (nested) => {
    return (<h3 key={nested[1]}>{nested[0]}{nested[2]}</h3>)
  }))
};

export { ProductBreakdown };