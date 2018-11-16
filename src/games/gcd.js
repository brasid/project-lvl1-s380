import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import playGame from '..';

const findGcd = (first, second) => {
  const min = Math.min(first, second);
  const max = Math.max(first, second);
  if (min === 0) {
    return max;
  }
  return findGcd(min, max % min);
};

const taskAndAnswer = () => {
  const firstNum = getRandomNum(1, 100);
  const secondNum = getRandomNum(1, 100);
  const gameTask = `${firstNum} ${secondNum}`;
  const correctAnswer = `${findGcd(firstNum, secondNum)}`;
  return cons(gameTask, correctAnswer);
};
const gameRule = 'Find the greatest common divisor of given numbers.';

export default () => playGame(taskAndAnswer, gameRule);
