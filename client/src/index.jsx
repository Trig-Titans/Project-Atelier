import { createRoot } from "react-dom/client";
import React from "react";
import RelatedProducts from './components/relatedProducts/relatedProductsList.jsx'
import { Overview } from "./components/overview/GalleryView.jsx"
import Reviews from "./components/reviews/ReviewsMain.jsx"
import QandA from './components/questions/QandA.jsx'



const root = createRoot(document.getElementById("root"));

const App = () => {
  return  <div id="page">
            <h1>Front End Capstone Avatar Project</h1>
              <Overview id="overview"/>
              <RelatedProducts id="relatedProducts"/>
              <QandA className="QandA"/>
              <Reviews id="reviews"/>
          </div>
}

root.render(<App />);