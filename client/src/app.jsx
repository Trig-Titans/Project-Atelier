import React, { useState } from "react";
import RelatedProducts from './components/relatedProducts/relatedProductsList.jsx'
import { Overview } from "./components/overview/GalleryView.jsx";
import Reviews from "./components/reviews/ReviewsMain.jsx";
import { QandA } from './components/questions/QandA.jsx';
import styled from 'styled-components';
import axios from 'axios';
import API_KEY from '../../config.js';

const StyledPageBackground = styled.img`
  z-index: -5;
  position: fixed;
  top: 0; left: 0;
  height: 100vh;
  width: 100vw;
`;

import {Container} from './components/reviews/sharedStyles/sharedStyledComponents'


export const App = () => {
  function handleScroll (e) {
    let offsetTop  = document.getElementById(e).offsetTop;
    window.scrollTo({
      top: offsetTop-100,
      behavior: "smooth"
    });
  }

  const [mainProduct, setMainProduct] = React.useState("37314");
  const [mainProductName, setMainProductName] = React.useState( "Slacker's Slacks" );
  const [currentStyleId, setCurrentStyleId] = React.useState(221014);

  const handleChangeProduct = (info, style) => {
    console.log(`-APP-
    ID: ${info.id.toString()},
    Name: ${info.name},
    Style: ${style}`)

      setCurrentStyleId(style)
      setMainProduct( info.id.toString() );
      setMainProductName ( info.name);
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
    console.log('it got clicked on');
  }

  return  (
          <div style={{background: "white"}}>
            {/* this is the start of the navbar */}
            <div className="topnav">
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
              <Overview mainProduct ={mainProduct} currentStyleId={currentStyleId} setCurrentStyleId={setCurrentStyleId}/>
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
            <StyledPageBackground src="https://www.respectability.org/wp-content/uploads/2018/02/New-York-City-skyline.jpg"/>
          </div>
  )
}
