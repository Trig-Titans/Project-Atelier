/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledBackground = styled.div`
  background: rgba(0, 0, 0, .5);
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vw;
  z-index: 100;
  cursor: pointer;
`;

const StyledModal = styled.div`
  position: fixed;
  top: 12.5vh; left: 25vw;
  z-index: 101;
  max-width: 50vw;
  width: 50vw;
  max-height: 75vh;
  height: 75vh;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: auto;
`;

const StyledTitle = styled.div`
  text-align: center;
  padding: 5vh 0;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 87.5%;
  padding-left: 12.5%;
  padding-bottom: 5vh;
`;

const StyledInput = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2.5vh 0;
`;

const StyledLabel = styled.label`
  padding-bottom: 1vh;
  font-weight: bold;
`;

const StyledAnswerBox = styled.textarea`
  max-width: 50vw;
  min-width: 20vw;
  max-height: 50vh;
  min-height: 10vh;
`;

const StyledPhoto = styled.img`
  height: 10vh;
  width: auto;
  margin: 2vh 0;
`;

const AnswerModal = ({ productName, questionBody, submit, setAnswerModal }) => {

  const [photoArray, setPhotoArray] = useState([]);
  const [largeImgErr, setLargeImgErr] = useState('none');


  var addPhoto = (input) => {

    // tests if the image being uploaded is too large
    if (input.target.files[0].size > 2097152) {
      setLargeImgErr('block');
      return;
    }

    var reader = new FileReader();

    reader.onload = function (e) {
      setPhotoArray(photoArray => [...photoArray, e.target.result]);
    };

    reader.readAsDataURL(input.target.files[0]);
    setLargeImgErr('none');
  }


  return (
    <div>
      <StyledBackground onClick={() => {setAnswerModal(false)}}/>
      <StyledModal>
          <StyledTitle>
          <h3>Submit your Answer</h3>
          <h4>{productName}: {questionBody}</h4>
          </StyledTitle>
          <StyledForm onSubmit={(e) => submit(e, photoArray)}>
            <StyledInput>
              <StyledLabel htmlFor="answer">Your Answer* :</StyledLabel>
              <StyledAnswerBox name="answer" maxLength="1000" required ></StyledAnswerBox>
            </StyledInput>
            <StyledInput>
              <StyledLabel htmlFor="name">What is your nickname?* :</StyledLabel>
              <input type="text" name="name" placeholder="Example: jack543!" maxLength="60" required></input>
              <i>For privacy reasons, do not use your full name or email address</i>
            </StyledInput>
            <StyledInput>
              <StyledLabel htmlFor="email">Your email* :</StyledLabel>
              <input type="email" name="email" placeholder="Example: jack@email.com" maxLength="60" required></input>
              <i>For authentication reasons, you will not be emailed</i>
            </StyledInput>
            <StyledInput>
              <StyledLabel htmlFor="photos">Upload your photos :</StyledLabel>
              <input type="file" name="photos" onChange={addPhoto} accept="image/*"></input>
              <div style={{display: largeImgErr, color: 'red'}}>Image too large, please upload smaller image file.</div>
              {photoArray.length > 0 ? photoArray.map((photoURL, index) => {
                if (index === 4) {
                  return (
                    <div key={photoURL}>
                      <StyledPhoto src={photoURL} ></StyledPhoto>
                    </div>
                  )
                }
                return (
                  <div key={photoURL}>
                    <StyledPhoto src={photoURL} ></StyledPhoto>
                    <input type="file" name="photos" onChange={addPhoto} accept="image/*"></input>
                    <div style={{display: largeImgErr, color: 'red'}}>Image too large, please upload smaller image file.</div>
                  </div>
                )
              }) : <div></div>}
            </StyledInput>
            <input type="submit" value="Submit Answer" style={{width: '33%', margin: 'auto'}}></input>
          </StyledForm>
      </StyledModal>
    </div>

  )

}

export default AnswerModal;