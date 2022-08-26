import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

// All of the imports from component files
import OverviewCarousel from './overview-components/Carousel.jsx';
import OverViewStars from './overview-components/Stars.jsx';
import OverViewName from './overview-components/Name.jsx';
import OverViewPrice from './overview-components/Price.jsx';
import OverViewSelector from './overview-components/Selector.jsx';
import OverViewForm from './overview-components/Form.jsx';
import OverviewDescription from './overview-components/Description.jsx';
import OverviewFacts from './overview-components/Facts.jsx';
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

function Overview(props) {
  const [count, setCount] = useState(0);
  return (
    // The grid
    <StyledOverviewGrid>
      <OverviewCarousel/>
      <OverViewStars/>
      <OverViewName/>
      <OverViewPrice/>
      <OverViewSelector/>
      <OverViewForm/>
      <OverviewDescription/>
      <OverviewFacts/>
    </StyledOverviewGrid>
  )
}

export default Overview;