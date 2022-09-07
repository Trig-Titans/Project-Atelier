import React from 'react';
import {render, screen} from '@testing-library/react';
const {default: userEvent} = require('@testing-library/user-event');
import data from '../../client/src/components/reviews/apiExample.js';

import {makeDate, makeBody, makeSummary} from '../../client/src/components/reviews/reviewListComponents/IndividualTile.jsx'
import {ReviewsList} from '../../client/src/components/reviews/reviewListComponents/ReviewsList.jsx';



// REVIEWSLIST
describe('ReviewsList rendering', () => {
  let productId = '37314';
  let productName = "Slacker's Slacks";
  let reviewsMeta = data.reviewsMeta;
  let starsToFilterReviews = [];
  beforeEach(() => {
    render(<ReviewsList productID={productId} productName={productName} characteristics={reviewsMeta.characteristics} starsToFilterReviews={starsToFilterReviews}/>);
  })
  it('should render the reviewList container to the DOM', () => {
    const input = screen.getByTestId('reviewListDivContainer');
    expect(input).toBeTruthy();

  })
  it('should display two tiles on initial render', () => {
    const tileCount = screen.getAllByTestId('reviewTileCounting');
    expect(tileCount).toHaveLength(2);

  });
  it('should render two additional tiles on click of MORE REVIEWS', () => {
    const user = userEvent.setup();

    return user.click(screen.getByRole('button', {name: /More Reviews/}))
      .then(() => {
        return screen.getAllByTestId('reviewTileCounting')
      })
      .then((arr) => {
        expect(arr).toHaveLength(4) //to have length of 4.
      })
  });
})
describe('Function Formatting in ReviewsList', () => {
  it('makeDate Function formats dates into Month, day, year format', () => {
    const mockDate = "2021-12-30T00:01:00.000Z";
    let testDate = makeDate(mockDate);
    expect(testDate).toBe('Dec 30, 2021');
  });
  it('makeReviewSummaryandBody should create an HTML div with summary and body contents', () => {
    let summaryText = makeSummary('summary', 'body');
    let bodyText = makeBody('summary', 'body')
    expect(summaryText).toEqual(<h4>summary</h4>);
    expect(bodyText).toEqual(<p style={{fontSize: '14px'}}>body</p>);
  });
  it('makeReviewSummaryandBody should limit the body to 250 characters', () => {
    let summary = `How do you solve a problem like a coder?`;
    let body = `I know I ran into the data not matching up from the api when I could not find any seller responses. I ended up taking the example data from Learn to mock up what WOULD happen if there ever was a response. However, on learn there is no example of what the data would look like coming back from the API. I think that this means even IF we could submit the emails with the POST request, we can't use them to verify on the way out. Do you think this means we don't code for that part?`;
    let summaryText = makeSummary(summary, body);
    let bodyText = makeBody(summary, body)
    expect(summaryText).toEqual(<h4>How do you solve a problem like a coder?</h4>);
    expect(bodyText).toEqual(<p style={{fontSize: '14px'}}>I know I ran into the data not matching up from the api when I could not find any seller responses. I ended up taking the example data from Learn to mock up what WOULD happen if there ever was a response. However, on learn there is no example of what...</p>);
  });
  test('makeReviewSummaryandBody should handle a missing summary', () => {
    let summary;
    let body = `I know I ran into the data not matching up from the api when I could not find any seller responses. I ended up taking the example data from Learn to mock up what WOULD happen if there ever was a response. However, on learn there is no example of what the data would look like coming back from the API. I think that this means even IF we could submit the emails with the POST request, we can't use them to verify on the way out. Do you think this means we don't code for that part?`
    let summaryText = makeSummary(summary, body);
    let bodyText = makeBody(summary, body)
    expect(summaryText).toEqual(<h4>I know I ran into the data not...</h4>)
    expect(bodyText).toEqual(<p style={{fontSize: '14px'}}> matching up from the api when I could not find any seller responses. I ended up taking the example data from Learn to mock up what WOULD happen if there ever was a response. However, on learn there is no example of what the data would look like comi...</p>)
  });
})

