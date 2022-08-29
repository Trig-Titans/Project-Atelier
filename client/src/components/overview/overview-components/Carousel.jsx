import React, { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import { findAverageRating } from '../GalleryView.jsx'

const StyledOverviewCarousel = styled.div`
  grid-area: OvPicture;
  max-width: 40vw;
  height: auto;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const ThumbnailSelector = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 10%;
  position: absolute;
  width: 20%;
  height: 100%
`

const Thumbnail = styled.div`
  padding: 5px;
`

// each photo has this class
const Slide = styled.div`
  min-width: 100%;
  transition: 0.5s;
`
// left button for carousel
const LeftButton = styled.button`
  position: absolute;
  width: 10%;
  margin-left: 20%;
  height: 60%;
  border: none;
  background-color: transparent;
  color: black;
  cursor: pointer;
  transition: 0.5s;
  color: transparent;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: white;
  }
`
// right button for carousel
const RightButton = styled.button`
  position: absolute;
  right: 0;
  width: 10%;
  height: 60%;
  border: none;
  background-color: transparent;
  color: black;
  cursor: pointer;
  transition: 0.5s;
  color: transparent;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: white;
  }
`

export default function OverviewCarousel({ photos }) {
  console.log(photos);
  // this state is the viewpoint that the carousel is currently at, when the button is pressed, it increases the current viewpoint of the div by 100, thus changing the photo.
  // Here is a link to the carousel video I watched to get this down. Bad music but good video
    // https://www.youtube.com/watch?v=Tdpq-9XYoNM
  const [x, setx] = useState(0);
  console.log(x);
  // on click function to move the carousel to the left
  const goLeft = () => {
    setx(x + 100);
  }
  // on click function to move the carousel to the right
  const goRight = () => {
    setx(x - 100);
  }

  return (
  <StyledOverviewCarousel>
    {
      photos.map((photo, index) => {
        return (
          // This translate x transformation is given to the slide div because it allows the picture to be shown that correlates with the x axis vertex
          // i.e. the first picture is at x=0, the second is x=100, the third is x=200
          // updating the x value changes what picture is shown
          <Slide key={index} style={{transform: `translateX(${x}%)`}}>
            <img src={photo.url}/>
          </Slide>
        )
      })
    }
    <ThumbnailSelector>
      {
        photos.map((photo, index) => {
          return (
            <Thumbnail key={index}>
              <img src={photo.thumbnail_url}></img>
            </Thumbnail>
          )
        })
      }
    </ThumbnailSelector>
    {/* these two ternary statements are to render in either a button or nothing depending on what position the gallery is in */}
    {x === 0 ? (<div></div>) : (<LeftButton onClick={goLeft}>left</LeftButton>)}
    {x > (-100 * photos.length + 100) ? (<RightButton onClick={goRight}>right</RightButton>) : (<div></div>)}
  </StyledOverviewCarousel>
  )
}