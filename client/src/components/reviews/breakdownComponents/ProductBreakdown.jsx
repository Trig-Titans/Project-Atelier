import React from 'react';
import {CharBarGraphContainer} from '../sharedStyles/sharedStyledComponents.js';

export const ProductBreakdown = ({characteristics}) => {

  // turn object into array so that you can map over the qualities
  let productBreakdownArray = [];
  for (let key in characteristics) {
    let item = []
    item.push(key);
    item.push(characteristics[key].id)
    // turn the string version into a number, and round to the tenths place
    item.push(Number(characteristics[key].value).toFixed(1))

    // item = [Name(ex: Size), Id, AverageRating(to tenths place)]
    productBreakdownArray.push(item);
  }

  // labels for the graphs
  let descriptions = {
    Size: ['Too Small', 'Perfect', 'Too Big'],
    Width: ['Too Narrow', 'Perfect', 'Too Wide'],
    Comfort: ['Awful', 'Ok', 'Perfect'],
    Quality: ['Poor', 'As Expected', 'Exceptional'],
    Length: ['Runs Short', 'Perfect', 'Runs Long'],
    Fit: ['Runs Tight', 'Perfect', 'Runs Loose']
  }

  // make the tiny triangle
  let imgStyling = {
    height:`10px`,
    width:`10px`,
    float: 'right'
  }

  return (productBreakdownArray.map( (individualCharacteristic) => {
    //for each characteristic, find the appropriate description
    let graphDescription = descriptions[individualCharacteristic[0]];

    //calculate the percent (which will end up being where the tiny triangle lies)
    let percent = individualCharacteristic[2];
    percent /= 5;
    percent *= 100;
    percent = Math.round(percent);

    //container to house the tiny triangle and place it at the appropriate spot
    let divStyling = {
      width: `${percent}%`,
      display: 'flex',
      justifyContent: 'flex-end'
    }

    //styling the description paragraph tags below the graphs
    let descriptionStyling = {
      fontSize: '8px',
      width: '30%',
      textAlign: 'center',
      wrap: 'auto'
    }

    return (<div key={individualCharacteristic[1]} style={{marginBottom: '3%'}}>
        <h3>{individualCharacteristic[0]}</h3>
        <div style={{ marginBottom: '2%', width: '70%', maxWidth: '140px', marginLeft: '10%'}}>
          <div style={divStyling}>
            <img src='https://www.citypng.com/public/uploads/preview/transparent-black-triangle-upside-down-31629765706xur3pxzdee.png' style={imgStyling}/>
          </div>
          <CharBarGraphContainer />
        </div>
        <div style={{width: '90%', maxWidth:'200px', display: 'flex', justifyContent: 'space-between'}}>
          <p style={descriptionStyling}>{graphDescription[0]}</p>
          <p style={descriptionStyling}>{graphDescription[1]}</p>
          <p style={descriptionStyling}>{graphDescription[2]}</p>
        </div>
      </div>)
  }))
};