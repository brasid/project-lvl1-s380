import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import playGame from '..';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  let divisor = 2;
  while (divisor <= num / 2) {
    if (num % divisor === 0) {
      return false;
    }
    divisor += 1;
  }
  return true;
};

const taskAndAnswer = () => {
  const randomNum = getRandomNum(1, 100);
  const gameTask = `${randomNum}`;
  const correctAnswer = (isPrime(randomNum)) ? 'yes' : 'no';
  return cons(gameTask, correctAnswer);
};
const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => playGame(taskAndAnswer, gameRule);
