import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const isPlayerWin = (round, lastRound, playerName, taskAndAnswer) => {
  if (round > lastRound) {
    return true;
  }
  const getTaskAndAnswer = taskAndAnswer();
  const gameTask = `Question ${car(getTaskAndAnswer)}  `;
  const correctAnswer = cdr(getTaskAndAnswer);
  const playerAnswer = readlineSync.question(gameTask);
  if (playerAnswer !== String(correctAnswer)) {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}`);
    return false;
  }
  console.log(`Your answer: ${playerAnswer}\nCorrect!`);
  return isPlayerWin(round + 1, lastRound, playerName, taskAndAnswer);
};

const playGame = (taskAndAnswer, gameRule) => {
  console.log(`Welcome to the Brain Games!\n${gameRule}`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  const firstRound = 1;
  const lastRound = 3;
  if (isPlayerWin(firstRound, lastRound, playerName, taskAndAnswer)) {
    console.log(`Congratulations, ${playerName}!\n`);
  } else {
    console.log('I\'m sorry, little one.');
  }
};

export default playGame;
