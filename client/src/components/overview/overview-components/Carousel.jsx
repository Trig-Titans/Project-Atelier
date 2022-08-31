import React, { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import { findAverageRating } from '../GalleryView.jsx'

const StyledOverviewCarousel = styled.div`
  grid-area: OvPicture;
  max-width: 200vw;
  max-height: 32rem;
  min-width: 20rem;
  min-height: 32rem;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  background-color: white;
`;

const ThumbnailSelector = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 2%;
  position: absolute;
  width: auto;
  height: 18rem;
  background-color: rgba(255,255,255,0.5);
  overflow: auto;
  direction: rtl;
  overflow-x: hidden;
  border-radius: 2px;
  &::-webkit-scrollbar {
    background: transparent;
    cursor: pointer;
    width: 0px;
  };
`

const Thumbnail = styled.div`
  margin: 5px;
  margin-top: 5px;
  max-height: 30px;
  border: 2px solid grey;
  width: 75px;
  border-radius: 2px;
  cursor: pointer;
  transition: 0.3s;
  overflow: hidden;
  &:hover {
    border: 2px solid black;
  }
`

// each photo has this class
const Slide = styled.div`
  min-width: 100%;
  transition: 0.5s;
  img {
    transition: 0.5s;
    border-radius: 2px;
  }
`
// left button for carousel
const LeftButton = styled.button`
  position: absolute;
  width: 10%;
  margin-left: 19%;
  height: 60%;
  border: none;
  background-color: transparent;
  color: black;
  cursor: pointer;
  transition: 0.5s;
  color: transparent;
  &:hover {
    background-color: rgba(255,255,255,0.3);
    border-radius: 10px;
    color: black;
  }
`
// right button for carousel
const RightButton = styled.button`
  position: absolute;
  right: 1%;
  width: 10%;
  height: 60%;
  border: none;
  background-color: transparent;
  color: black;
  cursor: pointer;
  transition: 0.5s;
  color: transparent;
  &:hover {
    background-color: rgba(255,255,255,0.3);
    border-radius: 10px;
    color: black;
  }
`

const DownButton = styled.button`
  position: absolute;
  bottom: 0%;
  color: gray;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: 0.3s;
  z-index: 1;
  &:hover {
    color: black;
  }
`
const UpButton = styled.button`
  position: absolute;
  top: 0%;
  color: gray;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: 0.3s;
  z-index: 1;
  &:hover {
    color: black;
  }
`

export default function OverviewCarousel({ photos }) {
  // this state is the viewpoint that the carousel is currently at, when the button is pressed, it increases the current viewpoint of the div by 100, thus changing the photo.
  // Here is a link to the carousel video I watched to get this down. Bad music but good video
    // https://www.youtube.com/watch?v=Tdpq-9XYoNM
  var [x, setx] = useState(0);
  var [y, sety] = useState(0);
  // on click function to move the carousel to the left
  const goLeft = () => {
    setx(x + 100);
  }
  // on click function to move the carousel to the right
  const goRight = () => {
    setx(x - 100);
  }

  const goUp = () => {
    sety(y + 135);
    console.log(y);
  }

  const goDown = () => {
    sety(y - 135);
    console.log(y);
  }

  const photoList = photos.map((photo, index) => {
    return (
      // This translate x transformation is given to the slide div because it allows the picture to be shown that correlates with the x axis vertex
      // i.e. the first picture is at x=0, the second is x=100, the third is x=200
      // updating the x value changes what picture is shown
      <Slide key={index} style={{transform: `translateX(${x}%)`}}>
        <img src={photo.url}/>
      </Slide>
    )
  })

  return (
  <StyledOverviewCarousel>
    {photoList}
    <ThumbnailSelector>
      {y !== 0 ? <UpButton onClick={goUp}>Up</UpButton> : <div></div>}
      {
        photos.map((photo, index) => {
          // if the thumbnail is selected, change the opacity of the image
          if (x === -100*index) {
            return (
              <Thumbnail key={index} style={{border: '2px solid white', transform: `translateY(${y}%)`}}onClick={() => {
                setx(x = -100*index)
              }}>
                <img src={photo.thumbnail_url}></img>
              </Thumbnail>
            )
          } else {
            return (
              <Thumbnail style={{transform: `translateY(${y}%)`}} key={index} onClick={() => {
                setx(x = -100*index)
              }}>
                <img src={photo.thumbnail_url}></img>
              </Thumbnail>
            )
          }
        })
      }
      {y >= ((photos.length * 135) - 800) ? <DownButton onClick={goDown}>Down</DownButton> : (<div></div>)}
    </ThumbnailSelector>
    {/* these two ternary statements are to render in either a button or nothing depending on what position the gallery is in */}
    {x === 0 ? (<div></div>) : (<LeftButton onClick={goLeft}>left</LeftButton>)}
    {x > (-100 * photos.length + 100) ? (<RightButton onClick={goRight}>right</RightButton>) : (<div></div>)}
  </StyledOverviewCarousel>
  )
}