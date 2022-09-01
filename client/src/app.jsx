import React from "react";
import RelatedProducts from './components/relatedProducts/relatedProductsList.jsx'
import { Overview } from "./components/overview/GalleryView.jsx"
import Reviews from "./components/reviews/ReviewsMain.jsx"
import QandA from './components/questions/QandA.jsx'


export const App = () => {

  const [mainProduct, setMainProduct] = React.useState("37314");
  const [mainProductName, setMainProductName] = React.useState( "Slacker's Slacks" )


  const handleChangeProduct = () => {
    return console.log('clicked')


      // setMainProduct( product );
      // setMainProductName ( productName);
  }


  return  <div >
           <h1>Front End Capstone Avatar Project</h1>
              <Overview />
              <RelatedProducts mainProduct = {mainProduct} handleChangeProduct = {handleChangeProduct}/>
              <QandA />
              <Reviews />
          </div>
}