import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import playGame from '..';


const taskAndAnswer = () => {
  const firstNum = getRandomNum(1, 100);
  const secondNum = getRandomNum(1, 100);
  let randomOperator = '*';
  let correctAnswer = firstNum * secondNum;
  if (getRandomNum(0, 2) === 0) {
    randomOperator = '+';
    correctAnswer = firstNum + secondNum;
  } else if (getRandomNum(0, 2) === 1) {
    randomOperator = '-';
    correctAnswer = firstNum - secondNum;
  }
  const gameTask = `${firstNum} ${randomOperator} ${secondNum}`;
  return cons(gameTask, correctAnswer);
};

const gameRule = 'What is the result of the expression?';

export default () => playGame(taskAndAnswer, gameRule);
