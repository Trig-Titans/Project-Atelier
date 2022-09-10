import React, { useState } from "react"
import styled from 'styled-components';
import { findAverageRating } from '../GalleryView.jsx'
import { faChevronLeft, faChevronRight, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledOverviewCarousel = styled.div`
  grid-area: OvPicture;
  max-height: 32rem;
  min-width: 20rem;
  min-height: 32rem;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  @media (max-width: 600px) {
    background-color: transparent;
    margin-bottom: -30%;
  }
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
  border-radius: 5px;
  &::-webkit-scrollbar {
    background: transparent;
    cursor: pointer;
    width: 0px;
  };
`

const Thumbnail = styled.div`
  margin: 5px;
  margin-top: 5px;
  min-height: 30px;
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
  cursor: zoom-in;
  img {
    transition: 0.5s;
    border-radius: 5px;
    @media (max-width: 600px) {
      width: 17rem;
      height: auto;
    }
  }
`
// left button for carousel
const LeftButton = styled.button`
  position: absolute;
  width: 10%;
  margin-left: 16%;
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
  @media (max-width: 600px) {
      right:30%;
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

export default function OverviewCarousel({ photos, expanded, setView, imgIndex, setImgIndex }) {
  // this state is the viewpoint that the carousel is currently at, when the button is pressed, it increases the current viewpoint of the div by 100, thus changing the photo.
  // Here is a link to the carousel video I watched to get this down. Bad music but good video
    // https://www.youtube.com/watch?v=Tdpq-9XYoNM
  var [x, setx] = useState(0);
  var [y, sety] = useState(0);
  // function for the image to expand on click
  // on click function to move the carousel to the left
  const goLeft = () => {
    setx(x + 100);
    if (x < - 600) {
      sety(y + 135);
    }
  }
  // on click function to move the carousel to the right
  const goRight = () => {
    setx(x - 100);
    if (x < -500) {
      sety(y - 135);
    }
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
      <Slide key={index} onClick={() => {
        setView(expanded = !expanded);
        setImgIndex(imgIndex += (index - imgIndex));
      }}
      style={{transform: `translateX(${x}%)`}}>
        <img src={photo.url} alt='style-photo'/>
      </Slide>
    )
  })

  return (
  <StyledOverviewCarousel data-testid='carousel'>
    {photoList}
    {x}
    {y}
    <ThumbnailSelector data-testid='vertical-carousel'>
      {y !== 0 ? <UpButton data-testid='up-arrow' onClick={goUp}><FontAwesomeIcon icon={faChevronUp} /></UpButton> : <div></div>}
      {
        photos.map((photo, index) => {
          // if the thumbnail is selected, change the opacity of the image
          if (x === -100*index) {
            return (
              <Thumbnail key={index} style={{border: '2px solid white', transform: `translateY(${y}%)`}}onClick={() => {
                setx(x = -100*index);
              }}>
                <img src={photo.thumbnail_url} alt='style-thumbnail-photo'></img>
              </Thumbnail>
            )
          } else {
            return (
              <Thumbnail style={{transform: `translateY(${y}%)`}} key={index} onClick={() => {
                setx(x = -100*index)
              }}>
                <img  src={photo.thumbnail_url} alt='style-thumbnail-photo'></img>
              </Thumbnail>
            )
          }
        })
      }
      {photos.length > 7 && y >= -(photos.length * 135) + 945 ? <DownButton data-testid='down-arrow' onClick={goDown}><FontAwesomeIcon icon={faChevronDown} /></DownButton> : (<div></div>)}
    </ThumbnailSelector>
    {/* these two ternary statements are to render in either a button or nothing depending on what position the gallery is in */}
    {x === 0 ? (<div></div>) : (<LeftButton data-testid='left-arrow' onClick={goLeft}><FontAwesomeIcon icon={faChevronLeft} /></LeftButton>)}
    {x > (-100 * photos.length + 100) ? (<RightButton data-testid='right-arrow' onClick={goRight}><FontAwesomeIcon icon={faChevronRight} /></RightButton>) : (<div></div>)}
  </StyledOverviewCarousel>
  )
}