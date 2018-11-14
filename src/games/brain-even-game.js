import { cons } from 'hexlet-pairs';
import { isEven, getRandomNum } from '../math';
import playGame from '..';

const taskAndAnswer = () => {
  const randomNum = getRandomNum();
  const gameTask = `Question: ${randomNum} `;
  const correctAnswer = (isEven(randomNum)) ? 'yes' : 'no';
  return cons(gameTask, correctAnswer);
};
const gameRule = 'Answer "yes" if number even, otherwise answer "no".';

export default () => playGame(taskAndAnswer, gameRule);
