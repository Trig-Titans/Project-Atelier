import React from 'react';

let AverageRating = () => {
  return(<div>
    <p>3.6</p>
    <p>ALL OF THE STARS</p>
    <p>Total Number of Reviews</p>
  </div>);
}

let RatingBreakdown = () => {
  return (<div>
    <p><a>5 Stars</a> Graph </p>
    <p><a>5 Stars</a> Graph </p>
  </div>);
}

let ProductBreakdown = () => {
  return (<div>
    <p>Qualities rating graph</p>
  </div>);
}

let Breakdown = ( {meta} ) => {
  return (<div>
    <p>{console.log(meta)}</p>
    <AverageRating />
    <RatingBreakdown />
    <ProductBreakdown />
    </div>);
}
export default Breakdown;