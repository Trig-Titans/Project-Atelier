/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const jest = require('jest');
const { dateParser } = require('../client/src/components/questions/Answer.jsx');



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