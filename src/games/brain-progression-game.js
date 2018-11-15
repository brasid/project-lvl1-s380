import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import playGame from '..';


const taskAndAnswer = () => {
  const progrFirst = getRandomNum(1, 100);
  const progrStep = getRandomNum(1, 10);
  const progrMissing = progrFirst + (progrStep * getRandomNum(0, 9));
  const progrLength = 10;
  const progrLast = progrFirst + (progrStep * (progrLength - 1));
  const makeProgression = (index, progrAsString) => {
    if (index === progrLast + progrStep) {
      return progrAsString;
    }
    return (index === progrMissing) ? makeProgression(index + progrStep, `${progrAsString} .. `) : makeProgression(index + progrStep, `${progrAsString} ${index} `);
  };
  const progrAsString = ' ';
  const gameTask = makeProgression(progrFirst, progrAsString);
  const correctAnswer = progrMissing;
  return cons(gameTask, correctAnswer);
};
const gameRule = 'What number is missing in the progression?.';

export default () => playGame(taskAndAnswer, gameRule);
