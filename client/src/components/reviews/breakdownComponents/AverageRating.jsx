import React from "react";
import {OverviewStars} from '../StarComponent.jsx';

export const AverageRating = ({averageStars, totalCount}) => {
  return(<div style={{display: 'flex', flexDirection: 'row', alignItems:'center', minWidth: '230px'}}>
    <h1>{averageStars}</h1>
    <OverviewStars stars={averageStars} starSizePx={'2vw'}/>
    <p>({totalCount})</p>
  </div>);
};
