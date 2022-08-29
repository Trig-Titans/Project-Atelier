const { findAverageRating } = require('../client/src/components/overview/GalleryView.jsx');

test('takes in an object of ratings and the count of each rating and returns a value to the nearest quarter', () => {
  expect(findAverageRating({1: '16', 2: '12', 3: '58', 4: '45', 5: '58'})).toBe("3.50");
});