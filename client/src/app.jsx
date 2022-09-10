import React, { useState } from "react";
import RelatedProducts from './components/relatedProducts/relatedProductsList.jsx'
import { Overview } from "./components/overview/GalleryView.jsx";
import Reviews from "./components/reviews/ReviewsMain.jsx";
import { QandA } from './components/questions/QandA.jsx';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import API_KEY from '../../config.js';

const StyledPageBackground = styled.img`
  z-index: -5;
  position: fixed;
  top: 0; left: 0;
  height: 100vh;
  width: 100vw;
  transition: 0.3s;
`;

const LightTheme = createGlobalStyle`
  body {
    color: #006B6B;
    background: #DBDBD6;
    transition: 0.3s;
  }
`
const DarkTheme = createGlobalStyle`
  body {
    color: #DBDBD6;
    background: #330000;
    transition: 0.3s;
  }
`
const ThemeToggle = styled.div`
  padding: 5px;
  position: fixed;
  right: 0;
  top: 0;
  transition: 0.3s;
  font-size: small;
  text-align: center;
`
const OuterToggle = styled.div`
  padding: 2px;
  width: 50px;
  height: 25px;
  border-radius: 30px;
  background: gray;
  transition: 0.3s;
  float: right;
  margin-left: 5px;
`

const InnerToggle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: 0.3s;
  float: left;
  background: #DBDBD6;
`

import {Container} from './components/reviews/sharedStyles/sharedStyledComponents'


export const App = () => {
  function handleScroll (e) {
    let offsetTop  = document.getElementById(e).offsetTop;
    window.scrollTo({
      top: offsetTop-100,
      behavior: "smooth"
    });
  }
  function handleHover (e) {
    e.target.style.background = '#006B6B';
  }

  function handleLeave (e) {
    e.target.style.background = 'black';
  }

  const [dark, setDark] = React.useState(false);
  const [mainProduct, setMainProduct] = React.useState("37314");
  const [mainProductName, setMainProductName] = React.useState( "Slacker's Slacks" );
  const [currentStyleId, setCurrentStyleId] = React.useState(221014);

  const handleChangeProduct = (info, style) => {
      setCurrentStyleId(style)
      setMainProduct( info.id.toString() );
      setMainProductName ( info.name);
  }

  const handleThemeToggle = (e) => {
    e.preventDefault();
    setDark(!dark);
  }
  const interactionPost = (element, widget, timeStamp) => {
    // axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/interactions`,
    //   {
    //     element: `${element}`,
    //     widget: `${widget}`,
    //     time: `${timeStamp}`,
    //   },
    //   {
    //     headers: {
    //       'Authorization': API_KEY
    //     }
    //   }
    // )
    //   .then((res) => {
    //     // console.log(res.statusText);
    //   })
    //   .catch((err) => {
    //     // console.log(err.statusText);
    //   })
    console.log('This element was clicked : ', element);
  }
  if (!dark) {
    return  (
        <div className='color-div' style={{backgroundColor: "white", transition: '0.3s'}}>
          {!dark ? <LightTheme/> : <DarkTheme/>}
          <ThemeToggle onClick={handleThemeToggle} style={{color: '#800000'}}>
            Dark Mode
            <OuterToggle><InnerToggle></InnerToggle></OuterToggle>
          </ThemeToggle>
          {/* this is the start of the navbar */}
          <div className="topnav" style={{backgroundColor: '#DBDBD6'}}>
            <h1 style={{color: '#006B6B'}}>Omozan</h1>
            <div className="topnav-right">
              <a data-testid='overview-click' onClick={() => {
                handleScroll("overview")
              }}>Overview</a>
              <a onClick={() => {
                handleScroll("related-products")
              }}>Related products</a>
              <a onClick={() => {
                handleScroll("q-and-a")
              }}>Q and A</a>
              <a onClick={() => {
                handleScroll("reviews")
              }}>Reviews</a>
            </div>
          </div>
          {/* this is the end of the navbar */}
          <h1>Front End Capstone Avatar Project</h1>
          <div onClick={(e) => {
            interactionPost(e.target.outerHTML, 'overview', Date.now());
          }}
          id='overview'>
            <Overview dark={dark} mainProduct ={mainProduct} currentStyleId={currentStyleId} setCurrentStyleId={setCurrentStyleId}/>
          </div >
          <div onClick={(e) => {
            interactionPost(e.target.outerHTML, 'related-products', Date.now());
          }}
          id='related-products'>
            <RelatedProducts mainProduct = {mainProduct} currentStyleId={currentStyleId} handleChangeProduct = {handleChangeProduct}/>
          </div>
          <div onClick={(e) => {
            interactionPost(e.target.outerHTML, 'q-and-a', Date.now());
          }}
          id='q-and-a'>
            <QandA mainProduct = {mainProduct} mainProductName={mainProductName}/>
          </div>
          <div onClick={(e) => {
            interactionPost(e.target.outerHTML, 'reviews', Date.now());
          }}
          id='reviews'>
            <Reviews mainProductName={mainProductName} mainProduct={mainProduct}/>
          </div>
          <div className='bottom-nav' style={{backgroundColor: '#DBDBD6'}}>
            <a style={{cursor: 'pointer'}} onClick={() => {
                  handleScroll("overview")
                }}>Back to top</a>
            </div>
          <StyledPageBackground src="https://www.respectability.org/wp-content/uploads/2018/02/New-York-City-skyline.jpg"/>
        </div>
    )
  } else {
    return  (
      <div className='color-div' style={{backgroundColor: "#181818", transition: '0.3s'}}>
        {!dark ? <LightTheme/> : <DarkTheme/>}
        <ThemeToggle onClick={handleThemeToggle}>
          Light Mode
          <OuterToggle style={{backgroundColor: '#2b2b2b'}}><InnerToggle style={{float: 'right', backgroundColor: '#006B6B'}}></InnerToggle></OuterToggle>
        </ThemeToggle>
        {/* this is the start of the navbar */}
        <div className="topnav" style={{backgroundColor: 'black'}}>
          <h1>Omozan</h1>
          <div className="topnav-right" style={{backgroundColor: 'black'}}>
            <a data-testid='overview-click'
              onClick={() => {
              handleScroll("overview")
            }}>Overview</a>
            <a
              onClick={() => {
              handleScroll("related-products")
            }}>Related products</a>
            <a
              onClick={() => {
              handleScroll("q-and-a")
            }}>Q and A</a>
            <a
              onClick={() => {
              handleScroll("reviews")
            }}>Reviews</a>
          </div>
        </div>
        {/* this is the end of the navbar */}
        <h1>Front End Capstone Avatar Project</h1>
        <div onClick={(e) => {
          interactionPost(e.target.outerHTML, 'overview', Date.now());
        }}
        id='overview'>
          <Overview dark={dark} mainProduct ={mainProduct} currentStyleId={currentStyleId} setCurrentStyleId={setCurrentStyleId}/>
        </div >
        <div onClick={(e) => {
          interactionPost(e.target.outerHTML, 'related-products', Date.now());
        }}
        id='related-products'>
          <RelatedProducts mainProduct = {mainProduct} currentStyleId={currentStyleId} handleChangeProduct = {handleChangeProduct}/>
        </div>
        <div onClick={(e) => {
          interactionPost(e.target.outerHTML, 'q-and-a', Date.now());
        }}
        id='q-and-a'>
          <QandA mainProduct = {mainProduct} mainProductName={mainProductName}/>
        </div>
        <div onClick={(e) => {
          interactionPost(e.target.outerHTML, 'reviews', Date.now());
        }}
        id='reviews'>
          <Reviews mainProductName={mainProductName} mainProduct={mainProduct}/>
        </div>
        <div className='bottom-nav' style={{backgroundColor: 'black', transition: '0.3s'}}>
          <a style={{cursor: 'pointer'}}
            onClick={() => {
                handleScroll("overview")
              }}>Back to top</a>
          </div>
        <StyledPageBackground src="https://wallpaperaccess.com/full/7099294.jpg"/>
      </div>
  )
  }
}
