import { createRoot } from "react-dom/client";
import React from "react";
import Card from './components/relatedProducts/card.jsx'
import Overview from "./components/overview/GalleryView.jsx"
import Reviews from "./components/reviews/ReviewsMain.jsx"
import QuestionSearch from './components/questions/QuestionSearch.jsx'


const root = createRoot(document.getElementById("root"));

const App = () => {
  return  <div>
            <h1>Front End Capstone Avatar Project</h1>
              <div>Overview Div</div>
              <div>Questions Div</div>
              <div>
                <p>related Div</p>
                <Card/>
              </div>
              <Reviews />
          </div>
}

root.render(<App />);