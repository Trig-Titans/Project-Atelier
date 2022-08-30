import { createRoot } from "react-dom/client";
import React from "react";
import RelatedProducts from './components/relatedProducts/relatedProductsList.jsx'
import { Overview } from "./components/overview/GalleryView.jsx"
import Reviews from "./components/reviews/ReviewsMain.jsx"
import QandA from './components/questions/QandA.jsx'



const root = createRoot(document.getElementById("root"));

export const App = () => {
  return  <div >
           <h1>Front End Capstone Avatar Project</h1>
              <Overview />
              <RelatedProducts />
              <QandA />
              <Reviews />
          </div>
}

root.render(<App />);

