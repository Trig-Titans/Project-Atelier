/* eslint-disable no-unused-vars */
import jest from 'jest';
import Question from '../client/src/components/questions/Question.jsx';

var questionData = {answers: {
  1: {answerer_name: "bob",
    body: "yes! anything goes well with black",
    date: "2022-07-22T00:00:00.000Z",
    helpfulness: 7,
    id: 5987025},
  2: {answerer_name: "sdasdc",
    body: "awefwafawevw",
    date: "2022-07-22T00:00:00.000Z",
    helpfulness: 0,
    id: 5987087}
  }
}

console.log(Question(questionData));

// test('date is rendering correctly', () => {
//   var questionData = {answers: {
//     1: {answerer_name: "bob",
//       body: "yes! anything goes well with black",
//       date: "2022-07-22T00:00:00.000Z",
//       helpfulness: 7,
//       id: 5987025},
//     2: {answerer_name: "sdasdc",
//       body: "awefwafawevw",
//       date: "2022-07-22T00:00:00.000Z",
//       helpfulness: 0,
//       id: 5987087}
//     }
//   }


// })