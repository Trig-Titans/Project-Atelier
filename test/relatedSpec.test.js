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

  test('it should render related carousel', () => {

    return waitFor(()=> expect(screen.queryByText(/RELATED PRODUCTS/)).toBeInTheDocument())
    .then(()=> expect(screen.getByTestId('relatedCarousel').children.length).toBeGreaterThan(0))
  })

  test('it should render an outfit carousel', () => {

  return waitFor(()=> expect(screen.queryByText(/OUTFIT/)).toBeInTheDocument())
  .then(()=> expect(screen.getByTestId('outfitCarousel').children.length).toBeGreaterThan(0))
  })

  // test('cards', ()=>{
  //   return waitFor(()=> expect(screen.queryByText(/OUTFIT/)).toBeInTheDocument())
  //   .then(()=> {
  //     let firstRelatedProduct =  document.getElementById('relatedProducts').children[0].name

  //     return user.click(firstRelatedProduct)
  //   })
  //   .then(()=>{
  //     expect(firstRelatedProduct).not.toBe(relatedProducts.children[0].name)
  //   })
  // })
})