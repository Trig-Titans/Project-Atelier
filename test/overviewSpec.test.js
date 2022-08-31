const { findAverageRating } = require('../client/src/components/overview/GalleryView.jsx');
const jest = require('jest');
const { dateParser } = require('../client/src/components/questions/Answer.jsx');
const React = require('react');
require('@testing-library/jest-dom');
const {default: userEvent} = require('@testing-library/user-event');
const { render, screen, waitFor } = require('@testing-library/react');
const { App } = require('../client/src/app.jsx');

describe('Jest+RTL Workshop', function() {
  const user = userEvent.setup();
  test('takes in an object of ratings and the count of each rating and returns a value to the nearest quarter', () => {
    expect(findAverageRating({1: '16', 2: '12', 3: '58', 4: '45', 5: '58'})).toBe("3.50");
  })
  test('Ensure that stars do not have any text', () => {
    render(<App />);
    return waitFor(() => expect(screen.queryByText(/I'll tell you how great they are after I nap for a bit/)).toBeInTheDocument())
      .then(() => {
        expect(screen.getByTestId('stars')).toHaveTextContent('');
      }).then(() => {
        expect(screen.getByDisplayValue("Add to Bag")).toHaveTextContent('');
      })
  })
})