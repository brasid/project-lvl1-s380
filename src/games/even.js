import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import playGame from '..';

const isEven = number => (number % 2 === 0);

const taskAndAnswer = () => {
  const randomNum = getRandomNum(1, 100);
  const gameTask = `${randomNum}`;
  const correctAnswer = (isEven(randomNum)) ? 'yes' : 'no';
  return cons(gameTask, correctAnswer);
};
const gameRule = 'Answer "yes" if number even, otherwise answer "no".';

export default () => playGame(taskAndAnswer, gameRule);
