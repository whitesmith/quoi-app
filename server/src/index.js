'use strict';

import Config from "./config";
import Server from "./server";

import Question, { QUESTION_TYPE } from "./lib/question";

/* FIXME: mocked questions */
const questions = [
  new Question({
    id: 0,
    type: QUESTION_TYPE.SINGLE,
    question: 'Quem é o maior?',
    media: '',
    options: [
      'O Benfica.',
      'O Sporting.',
      'A grande Briosa!',
      '"Sou eu, o Ricardo!"',
      'Diogo Lucas!'
    ],
    answer: [3]
  }),
  new Question({
    id: 1,
    type: QUESTION_TYPE.SINGLE,
    question: 'Quem é o menor?',
    media: '',
    options: [
      'O Benfica.',
      'O Sporting.',
      'A grande Briosa!',
      '"Sou eu, o Ricardo!"',
      'Diogo Lucas!'
    ],
    answer: [1]
  }),
  new Question({
    id: 2,
    type: QUESTION_TYPE.SINGLE,
    question: 'Quem é o médio?',
    media: '',
    options: [
      'O Benfica.',
      'O Sporting.',
      'A grande Briosa!',
      '"Sou eu, o Ricardo!"',
      'Diogo Lucas!'
    ],
    answer: [4]
  })
];

let server = new Server(Config);
server.setQuestions(questions);
