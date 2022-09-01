const { makeDate, makeReviewSummaryandBody } = require('../client/src/components/reviews/reviewListComponents/ReviewTiles.jsx');
import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import ReviewsList from '../client/src/components/reviews/reviewListComponents/ReviewsList.jsx';
const {default: userEvent} = require('@testing-library/user-event');

describe('ReviewsList rendering', () => {
  let productId = '37314';
  it('should render the reviewList container to the DOM', () => {
    // const user = userEvent.setup();
    render(<ReviewsList productID={productId}/>);
    const input = screen.getByTestId('reviewListDivContainer');
    expect(input).toBeTruthy();

  })
  it('should display two tiles on initial render', () => {
    // const user = userEvent.setup();
    render(<ReviewsList productID={productId}/>);
    expect(screen.getAllByTestId('reviewTileCounting')).toHaveLength(2);

  });
  it('should render two additional tiles on click of MORE REVIEWS', () => {
    const user = userEvent.setup();
    render(<ReviewsList productID={productId}/>);
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
    let testSummaryBody = makeReviewSummaryandBody('summary', 'body');
    expect(testSummaryBody).toEqual(<div><h4>summary</h4><p>body</p></div>)
  });
  it('makeReviewSummaryandBody should limit the body to 250 characters', () => {
    let summary = `How do you solve a problem like a coder?`;
    let body = `I know I ran into the data not matching up from the api when I could not find any seller responses. I ended up taking the example data from Learn to mock up what WOULD happen if there ever was a response. However, on learn there is no example of what the data would look like coming back from the API. I think that this means even IF we could submit the emails with the POST request, we can't use them to verify on the way out. Do you think this means we don't code for that part?`;
    let testSummaryBody = makeReviewSummaryandBody(summary, body);
    expect(testSummaryBody).toEqual(<div><h4>How do you solve a problem like a coder?</h4><p>I know I ran into the data not matching up from the api when I could not find any seller responses. I ended up taking the example data from Learn to mock up what WOULD happen if there ever was a response. However, on learn there is no example of what...</p></div>)
  });
  test('makeReviewSummaryandBody should handle a missing summary', () => {
    let summary;
    let body = `I know I ran into the data not matching up from the api when I could not find any seller responses. I ended up taking the example data from Learn to mock up what WOULD happen if there ever was a response. However, on learn there is no example of what the data would look like coming back from the API. I think that this means even IF we could submit the emails with the POST request, we can't use them to verify on the way out. Do you think this means we don't code for that part?`
    let testSummaryBody = makeReviewSummaryandBody(summary, body);
    expect(testSummaryBody).toEqual(<div><h4>I know I ran into the data not...</h4><p> matching up from the api when I could not find any seller responses. I ended up taking the example data from Learn to mock up what WOULD happen if there ever was a response. However, on learn there is no example of what the data would look like comi...</p></div>)
  });
})