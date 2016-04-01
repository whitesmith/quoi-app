'use strict';

import SocketIo from "socket.io";

import Server from "./server";

import Question, { QUESTION_TYPE } from "./question";

/* FIXME: mocked questions */
const questions = [
  new Question({
    id: 1,
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
    id: 2,
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
    id: 3,
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

const io = SocketIo(process.env.PORT || 3000);

new Server(io, questions);
