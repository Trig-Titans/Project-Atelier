import React, { useState } from "react";
import RelatedProducts from './components/relatedProducts/relatedProductsList.jsx'
import { Overview } from "./components/overview/GalleryView.jsx"
import Reviews from "./components/reviews/ReviewsMain.jsx"
import QandA from './components/questions/QandA.jsx'

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
  const [mainProductName, setMainProductName] = React.useState( "Slacker's Slacks" )
  var [currentStyleId, setCurrentStyleId] = useState('221014');

  const handleChangeProduct = (info) => {
    console.log(info.id.toString(), info.name)

      setMainProduct( info.id.toString() );
      setMainProductName ( info.name);
  }

  return  (
          <div>
            {/* this is the start of the navbar */}
            <div className="topnav">
              <h1>Omozan</h1>
              <div className="topnav-right">
                <a onClick={() => {
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
            <div id='overview'>
              <Overview mainProduct ={mainProduct} currentStyleId={currentStyleId} setCurrentStyleId={setCurrentStyleId}/>
            </div>
            <div id='related-products'>
              <RelatedProducts mainProduct = {mainProduct} handleChangeProduct = {handleChangeProduct}/>
            </div>
            <div id='q-and-a'>
              <QandA />
            </div>
            <div id='reviews'>
              <Reviews mainProductName={mainProductName} mainProduct={mainProduct}/>
            </div>
          </div>
  )
}
