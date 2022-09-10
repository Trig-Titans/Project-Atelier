import styled from 'styled-components';
import React, { useState, createRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import API_KEY from '../../../../../config.js';



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
  background-color: #DBDBD6;
  border-radius: 3px;
  border: 2px solid teal;
  color: #006B6B;
  padding: 0.25em 1em;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #800000;
    color: #DBDBD6;
  }
`;

const StyledSubmit = styled.input`
  background-color: #DBDBD6;
  border-radius: 3px;
  border: 2px solid teal;
  color: #006B6B;
  padding: 0.25em 1em;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #800000;
    color: #DBDBD6;
  }

  ${props => props.primary && css`
    border: 2px solid #C4C4BA;
    background: #006B6B;
    color: #DBDBD6;
  `}
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
  const skus = Object.keys(styles.skus)
  var [selected, setSelected] = useState(false);
  var [sizeSelected, setSizeSelected] = useState(false);
  var [addedToBag, setAdded] = useState(false);
  var [currentSize, setSize] = useState(0);
  var [isFavorite, setFavorite] = useState(false);

  // create an array of numbers containing all of the quantities
  function createQuantArray(quantity) {
    var array = [];
    for (var i = 0; i < quantity; i ++) {
      array.push(i + 1);
    }
    return array.slice(0, 15);
  }

  // make a variable using the function above
  const quantArray = createQuantArray(sizeAndQuant[currentSize].quantity);

  // map out the sizes into the options bar
  const sizeList = sizeAndQuant.map((size, index) => {
    return (
      <option style={{color: 'teal'}} value={index} key={skus[index]} className={size.size}>{size.size}</option>
    )
  })

  // Map out the quantities into the options bar
  const quantList = quantArray.map((quantity, index) => {
    return (
      <option style={{color: 'teal'}} value={quantity} key={index}>{quantity}</option>
    )
  })

  // this is a function that changes the favortited value when clicked
  function handleFavorite(e) {
    e.preventDefault();
    setFavorite(isFavorite = !isFavorite);
  }

  // This uses createRef from React to make a reference point for the size selector to be accessed when the user clicks the add button
  const sizeSelectorRef = createRef()
  const quantRef = createRef();

  function handleSubmit(e) {
    e.preventDefault()
    if (sizeSelectorRef.current.value === '-- select a size --') {
      setSelected(selected = true);
      return;
    }
    var sku = skus[sizeSelectorRef.current.value];
    var quantity = quantRef.current.value;
    // here I could do a for loop for the quantity. But that would be slow and add a bunch of api calls, when normally and API would probaly accept a quantity as a parameter, so this wouldn't be an issue, I am opting out of doing that.
    axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/cart`,
      {
        sku_id: sku,
      },
      {
        headers: {
          'Authorization': API_KEY
        }
      }
    )
      .then((res) => {
        // console.log(res.statusText);
      })
      .catch((err) => {
        // console.log(err.statusText);
      })
    setSelected(selected = false);
    setAdded(addedToBag = !addedToBag);
  }

  return (
    <StyledOverviewOptionForm onSubmit={handleSubmit}>
      <label>
      {!selected ? <StyledSelect data-testid='size-options' ref={sizeSelectorRef} onChange={(e) => {
            setSizeSelected(true);
            setSize(currentSize = e.target.value);
          }}>
          <option disabled defaultValue>-- select a size --</option>
          {sizeList}
        </StyledSelect> :
        <StyledSelect data-testid='size-options' style={{backgroundColor: '#800000', color: '#9e9e9e'}} ref={sizeSelectorRef} onChange={(e) => {
            setSizeSelected(true);
            setSize(currentSize = e.target.value);
          }}>
            <option style={{color: 'black'}} disabled>-- select a size --</option>
            {sizeList}
        </StyledSelect>}
      </label>
      <label>
        {sizeSelected ? <StyledQuant ref={quantRef} data-testid='quant-options'>
          {quantList}
        </StyledQuant> :
        <StyledQuant data-testid='quant-options' disabled>
          <option>-</option>
        </StyledQuant>}
      </label> <br></br>
      {addedToBag ? <StyledSubmit type="submit" value="Added!"/> : <StyledSubmit data-testid='add-to-bag' type="submit" value="Add to Bag"/>}
      <StyledOverviewFavoriteStar name='star-button' data-testid='favorite-button'onClick={handleFavorite}>
        {isFavorite ?
        <FontAwesomeIcon data-testid='fav-star' icon={faStar} style={{color: 'yellow'}}/>  :
        <FontAwesomeIcon data-testid='fav-star' icon={faStar} style={{color: 'white'}}/>}
      </StyledOverviewFavoriteStar>
    </StyledOverviewOptionForm>
  );
}