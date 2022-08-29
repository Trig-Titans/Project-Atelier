const {findAverageRating} = require('../client/src/components/overview/GalleryView.jsx')

test('log function to console', ()=> {
  expect (findAverageRating({1: '16', 2: '12', 3: '58', 4: '45', 5: '58'}))
  .toBe("3.50");
});