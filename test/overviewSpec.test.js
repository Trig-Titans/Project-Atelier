const { findAverageRating } = require('../client/src/components/overview/GalleryView.jsx');
// const jest = require('jest');
// const { dateParser } = require('../client/src/components/questions/Answer.jsx');
const React = require('react');
require('@testing-library/jest-dom');
const {default: userEvent} = require('@testing-library/user-event');
const { render, screen, waitFor } = require('@testing-library/react');
const { App } = require('../client/src/app.jsx');

describe('Jest+RTL Workshop', function() {
  const user = userEvent.setup();
  beforeEach(() => {
    render(<App />);
    console.log('brad is neat');
  })
  test('should take in an object of ratings and the count of each rating and returns a value to the nearest quarter', () => {
    expect(findAverageRating({1: '16', 2: '12', 3: '58', 4: '45', 5: '58'})).toBe("3.50");
  })

  test('Ensure that stars do not have any text', () => {
    return waitFor(() => expect(screen.queryByText(/I'll tell/)).toBeInTheDocument())
      .then(() => {
        expect(screen.getByTestId('stars')).toHaveTextContent('Read all');
      }).then(() => {
        expect(screen.getByDisplayValue("Add to Bag")).toHaveTextContent('');
      })
  })

  test('When rendered, there should be 6 photos for slacks product', () => {
    return waitFor(() => expect(screen.queryByText(/I'll tell/)).toBeInTheDocument())
    .then(() => {
      expect(screen.queryByTestId('carousel').children.length).toBe(8)
    })
  })

  it('should not have a size selected on render', () => {
    return waitFor(() => expect(screen.queryByText(/I'll tell/)).toBeInTheDocument())
    .then(() => {
      expect(screen.getByRole('option', { name: '-- select a size --' }).selected).toBe(true)
    })
  })
})