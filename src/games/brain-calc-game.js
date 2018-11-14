import { cons } from 'hexlet-pairs';
import { getRandomNum, getRandomOperator, getResult } from '../math';
import playGame from '..';

const taskAndAnswer = () => {
  const firstNum = getRandomNum();
  const secondNum = getRandomNum();
  const randomOperator = getRandomOperator();
  const gameTask = `Question: ${firstNum} ${randomOperator} ${secondNum}  `;
  const correctAnswer = getResult(firstNum, secondNum, randomOperator);
  return cons(gameTask, correctAnswer);
};

const gameRule = 'What is the result of the expression?';

export default () => playGame(taskAndAnswer, gameRule);
