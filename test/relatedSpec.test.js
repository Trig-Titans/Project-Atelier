const {findAverageRating} = require('../client/src/components/overview/GalleryView.jsx')
const React = require('react');
require('@testing-library/jest-dom');
const {default: userEvent} = require('@testing-library/user-event');
const { render, screen, waitFor } = require('@testing-library/react');
const { App } = require('../client/src/app.jsx');

describe('FEC - Omozan Related/Outfit tests', function () {
  const user = userEvent.setup();
  beforeEach(()=> {
    render(<App/>)
  })

  // test('')
})