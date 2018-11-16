import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import playGame from '..';

const length = 10;

const taskAndAnswer = () => {
  const start = getRandomNum(1, 100);
  const step = getRandomNum(1, 10);
  const missingIndex = getRandomNum(1, 10);
  let gameTask = '';
  for (let index = 1; index <= length; index += 1) {
    if (index === missingIndex) {
      gameTask = `${gameTask} .. `;
    } else gameTask = `${gameTask} ${start + step * index} `;
  }
  const correctAnswer = start + step * missingIndex;
  return cons(gameTask, correctAnswer);
};
const gameRule = 'What number is missing in the progression?';

export default () => playGame(taskAndAnswer, gameRule);
