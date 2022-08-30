import styled from 'styled-components';
import React, { useState, createRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'



const StyledOverviewOptionForm = styled.div`
  grid-area: OvForm;
`;
const StyledOverviewFavoriteStar = styled.button`
`;

export default function OverViewForm({ styles }) {
  const sizeAndQuant = Object.values(styles.skus);
  var [addedToBag, setAdded] = useState(false);
  var [currentSize, setSize] = useState(0);
  var [isFavorite, setFavorite] = useState(false);

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
      <option value={index} key={index} className={size.size}>{size.size}</option>
    )
  })

  // Map out the quantities into the options bar
  const quantList = quantArray.map((quantity, index) => {
    return (
      <option value={quantity} key={index}>{quantity}</option>
    )
  })

  // this is a function that changes the favortited value when clicked
  function handleFavorite(e) {
    e.preventDefault();
    setFavorite(isFavorite = !isFavorite);
  }

  // function to change if the item has been added to the bag or not
  function handleAdded(e) {
    e.preventDefault()
    setAdded(addedToBag = !addedToBag);
  }

  // This uses createRef from React to make a reference point for the size selector to be accessed when the user clicks the add button
  const sizeSelectorRef = createRef()

  function handleSubmit(e) {
    e.preventDefault()
    // if (sizeSelectorRef.current.value === 'select size') {
    //   sizeSelectorRef
    // }
    setAdded(addedToBag = !addedToBag);
  }

  return (
    <StyledOverviewOptionForm>
        <form onSubmit={handleSubmit}>
          <label>
            <select ref={sizeSelectorRef} onChange={(e) => {
                setSize(currentSize = e.target.value);
              }} required>
              <option>select size</option>
              {sizeList}
            </select>
          </label>
          <label>
            <select>
              {quantList}
            </select>
          </label>
          {addedToBag ? <input type="submit" value="Added! Remove?"/> : <input type="submit" value="Add to Bag"/>}
          <StyledOverviewFavoriteStar onClick={handleFavorite}>{isFavorite ? <FontAwesomeIcon icon={faStar} style={{color: 'yellow'}}/>  : <FontAwesomeIcon icon={faStar} style={{color: 'black'}}/>}</StyledOverviewFavoriteStar>
        </form>

      </StyledOverviewOptionForm>
  );
}