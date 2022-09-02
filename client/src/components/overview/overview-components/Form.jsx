import styled from 'styled-components';
import React, { useState, createRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'



const StyledOverviewOptionForm = styled.form`
  padding-top: 20px;
  padding-left: 10px;
  grid-area: OvForm;
  display: inline-flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 20px;
  justify-content: flex-start;
`;
const StyledOverviewFavoriteStar = styled.button`
  cursor: pointer;
  height: 40px;
  width: 40px;
  background-color: #white;
  border-radius: 5px;
  border: black;
  color: gray;
`;
const StyledSubmit = styled.input`
  cursor: pointer;
  height: 40px;
  min-width: 150px;
  background-color: #white;
  border-radius: 5px;
  border: black;
  color: gray;
`
const StyledSelect = styled.select`
  min-width: 150px;
  height: 40px;
  cursor: pointer;
  background-color: #white;
  border-radius: 5px;
  border: black;
  color: gray;
  align-text: center;
`
const StyledQuant = styled.select`
  min-width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: #white;
  border-radius: 5px;
  border: black;
  color: gray;
  align-text: center;
`

export default function OverViewForm({ styles }) {
  const sizeAndQuant = Object.values(styles.skus);
  var [selected, setSelected] = useState(false);
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

  // This uses createRef from React to make a reference point for the size selector to be accessed when the user clicks the add button
  const sizeSelectorRef = createRef()

  function handleSubmit(e) {
    e.preventDefault()
    if (sizeSelectorRef.current.value === '-- select a size --') {
      setSelected(selected = true);
      return;
    }
    setSelected(selected = false);
    setAdded(addedToBag = !addedToBag);
  }

  return (
    <StyledOverviewOptionForm onSubmit={handleSubmit}>
      <label>
      {!selected ? <StyledSelect ref={sizeSelectorRef} onChange={(e) => {
            setSize(currentSize = e.target.value);
          }}>
          <option>-- select a size --</option>
          {sizeList}
        </StyledSelect> :
        <StyledSelect style={{backgroundColor: '#d107079b'}}ref={sizeSelectorRef} onChange={(e) => {
            setSize(currentSize = e.target.value);
          }}>
            <option>-- select a size --</option>
            {sizeList}
        </StyledSelect>}
      </label>
      <label>
        <StyledQuant>
          {quantList}
        </StyledQuant>
      </label> <br></br>
      {addedToBag ? <StyledSubmit type="submit" value="Added! Remove?"/> : <StyledSubmit type="submit" value="Add to Bag"/>}
      <StyledOverviewFavoriteStar onClick={handleFavorite}>{isFavorite ? <FontAwesomeIcon icon={faStar} style={{color: 'yellow'}}/>  : <FontAwesomeIcon icon={faStar} style={{color: 'white'}}/>}</StyledOverviewFavoriteStar>
    </StyledOverviewOptionForm>
  );
}