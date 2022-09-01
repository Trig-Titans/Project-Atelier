import React, { useState } from "react";
import RelatedProducts from './components/relatedProducts/relatedProductsList.jsx'
import { Overview } from "./components/overview/GalleryView.jsx"
import Reviews from "./components/reviews/ReviewsMain.jsx"
import QandA from './components/questions/QandA.jsx'


export const App = () => {
  var [currentStyleId, setCurrentStyleId] = useState(0);
  return  <div >
           <h1>Front End Capstone Avatar Project</h1>
              <Overview currentStyleId={currentStyleId} setCurrentStyleId={setCurrentStyleId}/>
              <RelatedProducts />
              <QandA />
              <Reviews />
          </div>
}