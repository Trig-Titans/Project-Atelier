/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const jest = require('jest');
const { dateParser } = require('../client/src/components/questions/Answer.jsx');
const React = require('react');
require('@testing-library/jest-dom');
const {default: userEvent} = require('@testing-library/user-event');
const { render, screen, waitFor } = require('@testing-library/react');
const { App } = require('../client/src/app.jsx');
import QuestionList from '../client/src/components/questions/QuestionList.jsx';

var questionData = [{
    asker_name: "black",
    question_body: "does this go well with black",
    question_date: "2022-07-18T00:00:00.000Z",
    question_helpfulness: 42,
    question_id: 642189,
    reported: false,
    answers: [
      {answerer_name: "bob",
        body: "yes! anything goes well with black",
        date: "2022-07-22T00:00:00.000Z",
        helpfulness: 7,
        id: 5987025,
        photos: []},
      {answerer_name: "sdasdc",
        body: "awefwafawevw",
        date: "2022-07-22T00:00:00.000Z",
        helpfulness: 0,
        id: 5987087,
        photos: []},
      {answerer_name: "dcdcdc",
        body: "jdjdjdjdjdjdjdjdjd",
        date: "2022-07-23T00:00:00.000Z",
        helpfulness: 7,
        id: 5987140,
        photos: ["http://res.cloudinary.com/dl9zxpaoq/image/upload/v1658586930/duw3xpuh9ieugapjyrub.jpg"]}
    ]
  }];
  var mainProduct = "37314";
  var mainProductName = "Slacker's Slacks";


test('date is rendering correctly', () => {

  let date = dateParser(questionData[0].answers[1].date);
  expect(date).toBe(' Jul 22, 2022');

})


describe('FEC - omozan Q & A tests', () => {
  const user = userEvent.setup();

  test('if add answer modal is rendering correctly', () => {

    render(<QuestionList productName={mainProductName} productID={mainProduct} questions={questionData}/>);

    user.click(screen.getByTestId(101))
    .then(() => {
      expect(screen.queryByText(/Submit your Answer/)).toBeInTheDocument();
    })

  })

  test('if add question modal is rendering correctly', () => {

    render(<QuestionList productName={mainProductName} productID={mainProduct} questions={questionData}/>);

    user.click(screen.getByTestId("AddQuestion"))
    .then(() => {
      expect(screen.queryByText(/Submit Question/)).toBeInTheDocument();
    })

  })

  test('if add answer modal previews image uploads', () => {

    render(<QuestionList productName={mainProductName} productID={mainProduct} questions={questionData}/>);

    user.click(screen.getByTestId(101))
    .then(() => {
      var file = new File(['hello'], 'hello.png', {type: 'image/png'});
      return user.upload(screen.getByTestId('upload'), file);
    })
    .then(() => {
      expect(screen.queryByRole('img')).toBeInTheDocument();
    })

  })

  test('if question search bar is filtering questions correctly', () => {

    render(<App />);

    return waitFor(() => expect(screen.queryByText(/LOADING/)).toHaveStyle('display:none'))
    .then(() => {
      return user.type(screen.getByTestId('Search'), 'zzzzzzzzzzxxxxxzzzxxzxzxzxzxzxzx');
    })
    .then(() => {
      expect(screen.queryByText(/Add Answer/)).not.toBeInTheDocument();
    })

  })

  test('if question search bar is removing filter once search field is cleared', () => {

    render(<App />);

    return waitFor(() => expect(screen.queryByText(/LOADING/)).toHaveStyle('display:none'))
    .then(() => {
      return user.type(screen.getByTestId('Search'), 'zzzzzzzzzzxxxxxzzzxxzxzxzxzxzxzx');
    })
    .then(() => {
      return user.clear(screen.getByTestId('Search'));
    })
    .then(() => {
      expect(screen.queryAllByText(/Add Answer/)).not.toBe([]);
    })

  })

  test('if helpful count increases only once after yes is pressed', () => {

    render(<QuestionList productName={mainProductName} productID={mainProduct} questions={questionData}/>);

    var count = screen.getByTestId("101helpful").nextElementSibling.innerHTML.slice(1,3);

    user.click(screen.getByTestId("101helpful")).then(() => {
      expect(screen.getByTestId("101helpful").nextElementSibling.innerHTML.slice(1,3)).toBe((parseInt(count) + 1) + '');
      user.click(screen.getByTestId("101helpful")).then(() => {
        expect(screen.getByTestId("101helpful").nextElementSibling.innerHTML.slice(1,3)).toBe((parseInt(count) + 1) + '');
      })
    })
  })




})
