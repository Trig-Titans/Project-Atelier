/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const jest = require('jest');
const { dateParser } = require('../client/src/components/questions/Answer.jsx');
const React = require('react');
require('@testing-library/jest-dom');
const {default: userEvent} = require('@testing-library/user-event');
const { render, screen, waitFor } = require('@testing-library/react');
const { App } = require('../client/src/app.jsx');



test('date is rendering correctly', () => {
  var questionData = {answers: [
    {answerer_name: "bob",
      body: "yes! anything goes well with black",
      date: "2022-07-22T00:00:00.000Z",
      helpfulness: 7,
      id: 5987025},
    {answerer_name: "sdasdc",
      body: "awefwafawevw",
      date: "2022-07-22T00:00:00.000Z",
      helpfulness: 0,
      id: 5987087}
    ]
  }

  let date = dateParser(questionData.answers[1].date);
  expect(date).toBe(' Jul 22, 2022');

})

test('add answer modal popping up correctly', () => {

  const user = userEvent.setup();
  render(<App />);

  return waitFor(() => expect(screen.queryByText(/LOADING/)).not.toBeInTheDocument())
  .then(() => {
    return user.click(screen.getByTestId(642189))
  })
  .then(() => {
    expect(screen.queryByText(/Submit your Answer/)).toBeInTheDocument();
  })

})

test('question search bar filtering questions correctly', () => {

  const user = userEvent.setup();
  render(<App />);

  return waitFor(() => expect(screen.queryByText(/LOADING/)).not.toBeInTheDocument())
  .then(() => {
    return user.click(screen.getByTestId(642189))
  })
  .then(() => {
    expect(screen.queryByText(/Submit your Answer/)).toBeInTheDocument();
  })

})