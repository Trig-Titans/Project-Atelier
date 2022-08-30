// const { makeDate } = require('../client/src/components/reviews/reviewListComponents/ReviewTiles.jsx');
// const jest = require('jest');
import React from 'react';

const makeDate = (dateData) => {
  // without these regular expressions at the end of the dateData, the date shows up as off by a day. Adding these filters fixed that issue
  // this line writes a date stamp into human legible dates ex: Mon Jul 12 2019.
  let formatedDate = new Date(dateData.replace(/-/g, '\/').replace(/T.+/, '')).toDateString();

  // need to take off the day of the week and add a comma between day# and year#
  formatedDate = formatedDate.split(' ');
  formatedDate.shift();
  formatedDate[1] = formatedDate[1] + ',';
  formatedDate = formatedDate.join(' ');
  return formatedDate;
};

const makeReviewSummaryandBody = (summary, body) => {
  let sumAndBod;
  if (summary === undefined) {
    let sum;
    let bod;
    // minimum length body from form submission is 50 characters, so summary will be first 30 characters and rest will be body
    sum = body.substring(0, 30);
    sum += '...';
    bod = body.substring(30, 280);
    if (body.length > 280) {
      bod += '...';
    }
    sumAndBod = <div><h4>{sum}</h4><p>{bod}</p></div>
  } else {
    if (body.length > 250) {
      body = body.substring(0,250);
      body += '...';
    }
    sumAndBod = <div><h4>{summary}</h4><p>{body}</p></div>
  }
  return sumAndBod;
};
// test('use jsdom in this test file', () => {
//   const element = document.createElement('div');
//   expect(element).not.toBeNull();
// });

describe('Function Formatting in Reviews', () => {
  test('makeDate Function formats dates into Month, day, year format', () => {
    const mockDate = "2021-12-30T00:01:00.000Z";
    let testDate = makeDate(mockDate);
    expect(testDate).toBe('Dec 30, 2021');
  });
  test('makeReviewSummaryandBody should create an HTML div with summary and body contents', () => {
    let testSummaryBody = makeReviewSummaryandBody('summary', 'body');
    expect(testSummaryBody).toEqual(<div><h4>summary</h4><p>body</p></div>)
  });
  test('makeReviewSummaryandBody should limit the body to 250 characters', () => {
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