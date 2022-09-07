import React from 'react';
import {render, screen} from '@testing-library/react';
const {default: userEvent} = require('@testing-library/user-event');
import data from '../../client/src/components/reviews/apiExample.js';

import {Characteristics} from '../../client/src/components/reviews/CharacteristicsInputs.jsx';
import {ReviewButtons} from '../../client/src/components/reviews/reviewListComponents/AdditionalButtons.jsx';
import Reviews from '../../client/src/components/reviews/ReviewsMain.jsx';

// CHARACTERISTICS
describe('Characteristics for NewReview', () => {
  it('Given a product with Fit, Length, Comfort and Quality - It does NOT render size or width', () => {
    render(<Characteristics showSize={false} showWidth={false} showComfort={true} showQuality={true} showLength={true} showFit={true} />);
    const inputSize = screen.queryByTestId('FindingSizeCharacteristicInput');
    const inputWidth = screen.queryByTestId('FindingWidthCharacteristicInput');
    expect(inputSize).toBeNull();
    expect(inputWidth).toBeNull();
  })
  it ('Given a product with Fit, Length, Comfort and Quality - It DOES render the comfort, quality, length and fit', ()=> {
    render(<Characteristics showSize={false} showWidth={false} showComfort={true} showQuality={true} showLength={true} showFit={true} />);
    const inputComfort = screen.getByTestId('FindingComfortCharacteristicInput');
    const inputQuality = screen.getByTestId('FindingQualityCharacteristicInput');
    const inputLength = screen.getByTestId('FindingLengthCharacteristicInput');
    const inputFit = screen.getByTestId('FindingFitCharacteristicInput');

    expect(inputComfort).toBeTruthy();
    expect(inputQuality).toBeTruthy();
    expect(inputLength).toBeTruthy();
    expect(inputFit).toBeTruthy();
  })
  it('Given a product with size and width, it ignores the rest', () => {
    render(<Characteristics showSize={true} showWidth={true} showComfort={false} showQuality={false} showLength={false} showFit={false} />);
    const inputSize = screen.queryByTestId('FindingSizeCharacteristicInput');
    const inputWidth = screen.queryByTestId('FindingWidthCharacteristicInput');
    expect(inputSize).toBeTruthy();
    expect(inputWidth).toBeTruthy();
  })
  it ('Given a product with size and width, it renders the characteristics', ()=> {
    render(<Characteristics showSize={true} showWidth={true} showComfort={false} showQuality={false} showLength={false} showFit={false} />);
    const inputComfort = screen.queryByTestId('FindingComfortCharacteristicInput');
    const inputQuality = screen.queryByTestId('FindingQualityCharacteristicInput');
    const inputLength = screen.queryByTestId('FindingLengthCharacteristicInput');
    const inputFit = screen.queryByTestId('FindingFitCharacteristicInput');

    expect(inputComfort).toBeNull();
    expect(inputQuality).toBeNull();
    expect(inputLength).toBeNull();
    expect(inputFit).toBeNull();
  })
})

//NEW REVIEW
describe('NewReview Modal', () => {
  beforeEach(() => {
    render(<ReviewButtons wholeReviewList={data.reviews.results} setReviewIndex={()=>{}} reviewIndex={2} productName={'Slacker Slacks'} characteristics={data.reviewsMeta.characteristics} productID={'37314'} />);
  })
  it('OnClick of newReview, a modal should render to the screen', () => {
    const user = userEvent.setup();
    return user.click(screen.getByRole('button', {name: /Add Review +/}))
      .then(() => {
        let modalInput = screen.getByTestId('ModalPopUpCreateNewReview')
        expect(modalInput).toBeTruthy();
      })
  })
})

//RATING - STAR FILTER
describe('Star Filter Functionality', () => {
  beforeEach(() => {
    render(<Reviews mainProductName={'Slacker Slacks'} mainProduct={'37314'} />);
  })
  it('filters stars by clicking on 4-stars', () => {

    const user = userEvent.setup();
    return user.click(screen.getByRole('button', {name: /4 Stars/}))
      .then(() => {
        let filtered4Stars = screen.getByTestId('4-stars');
        let otherStars = screen.queryByTestId('5-stars');
        expect(otherStars).toBeNull();
        expect(filtered4Stars).toBeTruthy();
      })
  })
  it('filters stars function will remove filter if clicked twice', () => {

    const user = userEvent.setup();
    return user.click(screen.getByRole('button', {name: /4 Stars/}))
      .then(() => {
        let filtered4Stars = screen.getByTestId('4-stars');
        expect(filtered4Stars).toBeTruthy();
        return user.click(screen.getByRole('button', {name: /3 Stars/}))
      })
      .then(() => {
        return user.click(screen.getByRole('button', {name: /4 Stars/}))
      })
      .then(()=> {
        let NOTfiltered4Stars = screen.queryByTestId('4-stars');
        expect(NOTfiltered4Stars).toBeNull();
      })
  })
})