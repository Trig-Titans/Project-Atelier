import styled from 'styled-components';
import React, { useState } from "react";

const StyledOverviewOptionForm = styled.div`
  grid-area: OvForm;
`;
const StyledOverviewFavoriteStar = styled.button`
`;

export default function OverViewForm({ styles }) {
  const sizeAndQuant = Object.values(styles.skus);
  var [currentSize, setSize] = useState(0);
  console.log(sizeAndQuant);
  // create an array of numbers containing all of the quantities
  function createQuantArray(quantity) {
    var array = [];
    for (var i = 0; i < quantity; i ++) {
      array.push(i + 1);
    }
    return array;
  }

  // make a variable using the function above
  const quantArray = createQuantArray(sizeAndQuant[currentSize].quantity);

  // map out the sizes into the options bar
  const sizeList = sizeAndQuant.map((size, index) => {
    return (
      <option value={index} key={index}>{size.size}</option>
    )
  })

  // Map out the quantities into the options bar
  const quantList = quantArray.map((quantity, index) => {
    return (
      <option value={quantity} key={index}>{quantity}</option>
    )
  })

  // const quantList = sizeAndQuant(currentSize).map

  return (
    <StyledOverviewOptionForm>
        <form>
          <label>
            <select onChange={(e) => {
                setSize(currentSize = e.target.value);
              }}>
              {sizeList}
            </select>
          </label>
          <label>
            <select>
              {quantList}
            </select>
          </label>
          <input type="submit" value="Add to Bag"/>
          {/* there needs to be a favorite button */}
          <StyledOverviewFavoriteStar>&#9733;</StyledOverviewFavoriteStar>
        </form>
      </StyledOverviewOptionForm>
  );
}