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
  top: 25vh; left: 25vw;
  z-index: 101;
  width: 65vw;
  height: 65vh;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const StyledTitle = styled.div`
  text-align: center;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 87.5%;
  padding-left: 12.5%;
`;

const StyledAnswerBox = styled.input`
  height: 10vh;
`;

const AnswerModal = ({ productName, questionBody }) => {

  const [photoCount, setPhotoCount] = useState(0);
  const [photoArray, setPhotoArray] = useState([]);
  const [imageLimit, setImageLimit] = useState('block');



  var addPhoto = (input) => {
    setPhotoCount(photoCount + 1);
    var reader = new FileReader();
    reader.onload = function (e) {
      setPhotoArray(photoArray => [...photoArray, e.target.result]);
    };
    reader.readAsDataURL(input.target.files[0]);

    if (photoCount === 5) {
      setImageLimit('none');
    }

  }

  return (
    <div>
      <StyledBackground/>
      <StyledModal>
          <StyledTitle>
          <h3>Submit your Answer</h3>
          <h4>{productName}: {questionBody}</h4>
          </StyledTitle>
          <StyledForm>
            <label htmlFor="answer">Your Answer* :</label>
            <StyledAnswerBox type="text" name="answer" maxLength="1000" required ></StyledAnswerBox>
            <label htmlFor="name">What is your nickname?* :</label>
            <input type="text" name="name" placeholder="Example: jack543!" maxLength="60" required></input>
            <i>For privacy reasons, do not use your full name or email address</i>
            <label htmlFor="email">Your email?* :</label>
            <input type="text" name="email" placeholder="Example: jack@email.com" maxLength="60" required></input>
            <i>For authentication reasons, you will not be emailed</i>
            <label htmlFor="photos">Upload your photos :</label>
            <input type="file" name="photos" onChange={addPhoto} style={{display: imageLimit}} multiple></input>
            {photoArray.length > 0 ? photoArray.map((photoURL) => (
              <img src={photoURL} key={photoURL}></img>
            )) : <div></div>}
          </StyledForm>
      </StyledModal>
    </div>

  )

}

export default AnswerModal;