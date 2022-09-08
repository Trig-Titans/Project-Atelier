import React from 'react';

export const SorterBar = ({setSortFilter}) => {

  return (<div id='sorting-reviews' style={{textAlign: 'right'}}><label htmlFor="sortingReviews">Sort Reviews By:</label>
  <select onChange={(e)=> {setSortFilter(e.target.value)}} name="sortingReviews" id="dropdownSort">
    <option value="relevant">Most Relevant</option>
    <option value="newest">Newest</option>
    <option value="helpful">Most Helpful</option>
  </select></div>);
}