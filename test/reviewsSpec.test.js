// const { makeDate } = require('../client/src/components/reviews/reviewListComponents/ReviewTiles.jsx');
// const jest = require('jest');

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
// test('use jsdom in this test file', () => {
//   const element = document.createElement('div');
//   expect(element).not.toBeNull();
// });

describe('Function Formatting in Reviews', () => {
  test('makeDate Function formats dates into Month, day, year format', () => {
    const mockDate = "2021-12-30T00:01:00.000Z";
    let testDate = makeDate(mockDate);
    expect(testDate).toBe('Dec 30, 2021');
  })
})