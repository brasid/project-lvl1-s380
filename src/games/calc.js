import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import playGame from '..';

const taskAndAnswer = () => {
  const firstNum = getRandomNum(1, 100);
  const secondNum = getRandomNum(1, 100);
  const randomOperator = getRandomNum(0, 2);
  let gameTask;
  let correctAnswer;
  switch (randomOperator) {
    case 0:
      gameTask = `${firstNum} + ${secondNum}`;
      correctAnswer = `${firstNum + secondNum}`;
      break;
    case 1:
      gameTask = `${firstNum} - ${secondNum}`;
      correctAnswer = `${firstNum - secondNum}`;
      break;
    case 2:
      gameTask = `${firstNum} * ${secondNum}`;
      correctAnswer = `${firstNum * secondNum}`;
      break;
    default:
      break;
  }
  return cons(gameTask, correctAnswer);
};

const gameRule = 'What is the result of the expression?';

export default () => playGame(taskAndAnswer, gameRule);
