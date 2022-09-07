import React from 'react';
import {StyledLabel} from '../questions/AnswerModal.jsx';
import {RadioInputContainer, RadioContainer, RadioLabel} from './sharedStyles/sharedStyledComponents.js';

export const Characteristics = ({showSize, showWidth, showComfort, showQuality, showLength, showFit}) => {
  let size, width, comfort, quality, length, fit;

  if (showSize) {
    size = <div data-testid="FindingSizeCharacteristicInput"> <StyledLabel htmlFor="characteristicSize">How would you rate the SIZE of the product*:</StyledLabel>
      <RadioContainer>
        <RadioInputContainer>
        <input type="radio" id="size1Small" name="characteristicSize" value="1" />
        <label htmlFor="size1Small">A size too small</label>
        </RadioInputContainer>
        <RadioInputContainer>
        <input type="radio" id="size2Small" name="characteristicSize" value="2" />
        <label htmlFor="size1Small">1/2 a size too small</label>
        </RadioInputContainer>
        <RadioInputContainer>
        <input type="radio" id="sizePerfect" name="characteristicSize" value="3" />
        <label htmlFor="sizePerfect">Perfect</label>
        </RadioInputContainer>
        <RadioInputContainer>
        <input type="radio" id="size4Big" name="characteristicSize" value="4" />
        <label htmlFor="size4Big">1/2 a size too big</label>
        </RadioInputContainer>
        <RadioInputContainer>
        <input type="radio" id="size5Big" name="characteristicSize" value="5" />
        <label htmlFor="size5Big">A size too big</label>
        </RadioInputContainer>
      </RadioContainer>
      </div>
  } else {
    size = <div></div>
  }

  if (showWidth) {
    width = <div data-testid="FindingWidthCharacteristicInput">
      <StyledLabel htmlFor="characteristicWidth">How would you rate the WIDTH of the product*:</StyledLabel>
      <RadioContainer>
        <RadioInputContainer>
        <input type="radio" id="width1Narrow" name="characteristicWidth" value="1" />
        <label htmlFor="width1Narrow">Too narrow</label>
        </RadioInputContainer>
        <RadioInputContainer>
        <input type="radio" id="width2Narrow" name="characteristicWidth" value="2" />
        <label htmlFor="width2Narrow">Slightly narrow</label>
        </RadioInputContainer>
        <RadioInputContainer>
        <input type="radio" id="narrowPerfect" name="characteristicWidth" value="3" />
        <label htmlFor="narrowPerfect">Perfect</label>
        </RadioInputContainer>
        <RadioInputContainer>
        <input type="radio" id="width4Wide" name="characteristicWidth" value="4" />
        <label htmlFor="width4Wide">Slightly wide</label>
        </RadioInputContainer>
        <RadioInputContainer>
        <input type="radio" id="width5Wide" name="characteristicWidth" value="5" />
        <label htmlFor="width5Wide">Too wide</label>
        </RadioInputContainer>
      </RadioContainer>
    </div>
  } else {
    width = <div></div>
  }

  if (showComfort) {
    comfort = <div data-testid="FindingComfortCharacteristicInput">
      <StyledLabel htmlFor="characteristicComfort">How would you rate the COMFORT of the product*:</StyledLabel>
      <RadioContainer>
        <RadioInputContainer>
        <input type="radio" id="Uncomfortable1" name="characteristicComfort" value="1" />
        <RadioLabel htmlFor="Uncomfortable1">Uncomfortable</RadioLabel>
        </RadioInputContainer>

        <RadioInputContainer>
        <input type="radio" id="2Uncomfortable" name="characteristicComfort" value="2" />
        <RadioLabel htmlFor="2Uncomfortable">Slightly uncomfortable</RadioLabel>
        </RadioInputContainer>

        <RadioInputContainer>
        <input type="radio" id="comfortable3" name="characteristicComfort" value="3"/>
        <RadioLabel htmlFor="comfortable3">Ok</RadioLabel>
        </RadioInputContainer>

        <RadioInputContainer>
        <input type="radio" id="comfortable4" name="characteristicComfort" value="4" />
        <RadioLabel htmlFor="comfortable4">Comfortable</RadioLabel>
        </RadioInputContainer>

        <RadioInputContainer>
        <input type="radio" id="comfortable5" name="characteristicComfort" value="5" />
        <RadioLabel htmlFor="comfortable5">Perfect</RadioLabel>
        </RadioInputContainer>
      </RadioContainer>
      </div>
  } else {
    comfort = <div></div>
  }

  if (showQuality) {
    quality =<div data-testid="FindingQualityCharacteristicInput">
      <StyledLabel htmlFor="characteristicQuality">How would you rate the QUALITY of the product*:</StyledLabel>
      <RadioContainer>
        <RadioInputContainer>
        <input type="radio" id="Quality1" name="characteristicQuality" value="1" />
        <label htmlFor="Quality1">Poor</label>
        </RadioInputContainer>
        <RadioInputContainer>
        <input type="radio" id="Quality2" name="characteristicQuality" value="2" />
        <label htmlFor="Quality2">Below Average</label>
        </RadioInputContainer>
        <RadioInputContainer>
        <input type="radio" id="Quality3" name="characteristicQuality" value="3" />
        <label htmlFor="Quality3">What I expected</label>
        </RadioInputContainer>
        <RadioInputContainer>
        <input type="radio" id="Quality4" name="characteristicQuality" value="4" />
        <label htmlFor="Quality4">Pretty Great</label>
        </RadioInputContainer>
        <RadioInputContainer>
        <input type="radio" id="Quality5" name="characteristicQuality" value="5" />
        <label htmlFor="Quality5">Perfect</label>
        </RadioInputContainer>
      </RadioContainer>
      </div>
  } else {
    quality = <div></div>
  }

  if (showLength) {
    length =<div data-testid="FindingLengthCharacteristicInput">
      <StyledLabel htmlFor="characteristicLength">How would you rate the Length of the product*:</StyledLabel>
      <RadioContainer>
        <RadioInputContainer>
        <input type="radio" id="Length1" name="characteristicLength" value="1" />
        <label htmlFor="Length1">Runs Short</label>
        </RadioInputContainer>
        <RadioInputContainer>
        <input type="radio" id="Length2" name="characteristicLength" value="2" />
        <label htmlFor="Length2">Runs Slightly Short</label>
        </RadioInputContainer>
        <RadioInputContainer>
        <input type="radio" id="Length3" name="characteristicLength" value="3" />
        <label htmlFor="Length3">Perfect</label>
        </RadioInputContainer>
        <RadioInputContainer>
        <input type="radio" id="Length4" name="characteristicLength" value="4" />
        <label htmlFor="Length4">Runs Slightly Long</label>
        </RadioInputContainer>
        <RadioInputContainer>
        <input type="radio" id="Length5" name="characteristicLength" value="5" />
        <label htmlFor="Length5">Runs Long</label>
        </RadioInputContainer>
      </RadioContainer>
      </div>
  } else {
    length = <div></div>
  }

  if (showFit) {
    fit = <div data-testid="FindingFitCharacteristicInput">
      <StyledLabel htmlFor="characteristicFit">How would you rate the FIT of the product*:</StyledLabel>
      <RadioContainer>
        <RadioInputContainer>
        <input type="radio" id="Fit1" name="characteristicFit" value="1" />
        <label htmlFor="Fit1">Runs Tight</label>
        </RadioInputContainer>
        <RadioInputContainer>
        <input type="radio" id="Fit2" name="characteristicFit" value="2" />
        <label htmlFor="Fit2">Runs Slightly Tight</label>
        </RadioInputContainer>
        <RadioInputContainer>
        <input type="radio" id="Fit3" name="characteristicFit" value="3" />
        <label htmlFor="Fit3">Perfect</label>
        </RadioInputContainer>
        <RadioInputContainer>
        <input type="radio" id="Fit4" name="characteristicFit" value="4" />
        <label htmlFor="Fit4">Runs Slightly Loose</label>
        </RadioInputContainer>
        <RadioInputContainer>
        <input type="radio" id="Fit5" name="characteristicFit" value="5" />
        <label htmlFor="Fit5">Runs Loose</label>
        </RadioInputContainer>
      </RadioContainer>
      </div>
  } else {
    fit = <div></div>
  }

  return(<div>
    {size}
    {width}
    {comfort}
    {quality}
    {length}
    {fit}
    </div>
  )
}
