import { createRoot } from "react-dom/client";
import React from "react";
const root = createRoot(document.getElementById("root"));


const App = () => {
  return  <div>
            <h1>Front End Capstone Avatar Project</h1>
              <div>Overview Div</div>
              <div>Questions Div</div>
              <div>Related Div</div>
              <div>Reviews Div</div>
          </div>
}

root.render(<App />);