import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

// Here are all of the styled components
const StyledOverviewGrid = styled.div`
  margin-left: 20%;
  grid-gap: 10px;
  width: 60%;
  text-align: left;
  display: grid;
  color: black;
  grid-template-areas:
    'OvPicture OvStar'
    'OvPicture OvName'
    'OvPicture OvPrice'
    'OvPicture OvStyle'
    'OvPicture OvForm'
    'OvDesc OvMeta'
`;
const StyledOverviewCarousel = styled.div`
  margin: auto;
  grid-area: OvPicture;
`;
const StyledOverviewStars = styled.p`
  grid-area: OvStar;
  margin-bottom: 0px`;
const StyledOverviewName = styled.p`
  grid-area: OvName;
`;
const StyledOverviewPrice = styled.div`
  grid-area: OvPrice;
`;
const StyledOverviewStyleSelector = styled.div`
  grid-area: OvStyle;
`;
const StyledOverviewStylesTitle = styled.div`
`;
const StyledOverviewStylesCircle = styled.div`
`;
const StyledOverviewOptionForm = styled.div`
  grid-area: OvForm;
`;
const StyledOverviewFavoriteStar = styled.button`
`;
const StyledOverviewProductDescription = styled.div`
  margin-left: 30%;
  grid-area: OvDesc;
`;
const StyledOverviewProductFacts = styled.div`
  grid-area: OvMeta;
`;

function Overview(props) {
  const [count, setCount] = useState(0);
  return (
    // The grid
    <StyledOverviewGrid>
      {/* carousel */}
      <StyledOverviewCarousel>
        <img src="https://m.media-amazon.com/images/I/51NCiuMYKCL._AC_SS450_.jpg" />
      </StyledOverviewCarousel>
      {/* Starts section */}
      <StyledOverviewStars>
        <p>Stars</p>
      </StyledOverviewStars>
      {/* Product name section */}
      <StyledOverviewName>
        <p>Category</p>
        <h2>Avatar Stickers</h2>
      </StyledOverviewName>
      {/* Price section */}
      <StyledOverviewPrice>
        <p>$8,000</p>
      </StyledOverviewPrice>
      {/* Style selector section */}
      <StyledOverviewStyleSelector>
        <StyledOverviewStylesTitle>Style {'>'} selected style</StyledOverviewStylesTitle>
        {/* maybe make this one a flexbox? */}
        <StyledOverviewStylesCircle></StyledOverviewStylesCircle>
      </StyledOverviewStyleSelector>
      {/* size, number, add to bag and favorite section - this should be a grid as well*/}
      <StyledOverviewOptionForm>
        <form>
          <label>
            <select>
              <option value="air">air</option>
              <option value="earth">earth</option>
              <option value="fire">fire</option>
              <option value="water">water</option>
            </select>
          </label>
          <label>
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </label>
          <input type="submit" value="Add to Bag"/>
          {/* there needs to be a favorite button */}
          <StyledOverviewFavoriteStar>STAR!</StyledOverviewFavoriteStar>
        </form>
      </StyledOverviewOptionForm>
      <StyledOverviewProductDescription>
        <p>Buy these stickers, they are neat</p>
      </StyledOverviewProductDescription>
      <StyledOverviewProductFacts>
          <li>Super Fake</li>
          <li>Not Real</li>
          <li>Made up</li>
      </StyledOverviewProductFacts>
    </StyledOverviewGrid>
  )
}

export default Overview;