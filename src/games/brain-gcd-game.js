import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import playGame from '..';

const findGcd = (bigNum, smallNum) => {
  if (smallNum === 0) {
    return bigNum;
  }
  return findGcd(smallNum, bigNum % smallNum);
};

const taskAndAnswer = () => {
  const firstNum = getRandomNum(1, 100);
  const secondNum = getRandomNum(1, 100);
  const gameTask = `${firstNum} ${secondNum}`;
  const bigNum = Math.abs((firstNum >= secondNum) ? firstNum : secondNum);
  const smallNum = Math.abs((firstNum <= secondNum) ? firstNum : secondNum);
  const correctAnswer = findGcd(bigNum, smallNum);
  return cons(gameTask, correctAnswer);
};
const gameRule = 'Find the greatest common divisor of given numbers.';

export default () => playGame(taskAndAnswer, gameRule);
