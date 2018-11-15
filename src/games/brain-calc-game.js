import { cons } from 'hexlet-pairs';
import getRandomNum from '../math';
import playGame from '..';

const getRandomOperator = () => {
  const num = Math.floor(Math.random() * 3); // expect output 0, 1 or 2
  switch (num) {
    case (0):
      return '+';
    case (1):
      return '-';
    default:
      return '*';
  }
};

const doCalculation = (num1, num2, operator) => {
  switch (operator) {
    case ('+'):
      return num1 + num2;
    case ('-'):
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

const taskAndAnswer = () => {
  const firstNum = getRandomNum();
  const secondNum = getRandomNum();
  const randomOperator = getRandomOperator();
  const gameTask = `${firstNum} ${randomOperator} ${secondNum}`;
  const correctAnswer = doCalculation(firstNum, secondNum, randomOperator);
  return cons(gameTask, correctAnswer);
};

const gameRule = 'What is the result of the expression?';

export default () => playGame(taskAndAnswer, gameRule);
