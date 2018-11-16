import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const isPlayerWin = (round, lastRound, taskAndAnswer) => {
  if (round > lastRound) {
    return true;
  }
  const getTaskAndAnswer = taskAndAnswer();
  const gameTask = `Question ${car(getTaskAndAnswer)}  `;
  const correctAnswer = cdr(getTaskAndAnswer);
  const playerAnswer = readlineSync.question(gameTask);
  if (playerAnswer !== String(correctAnswer)) {
    console.log(`\n'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n`);
    return false;
  }
  console.log(`\nYour answer: ${playerAnswer}\nCorrect!\n`);
  return isPlayerWin(round + 1, lastRound, taskAndAnswer);
};

const firstRound = 1;
const lastRound = 3;

const playGame = (taskAndAnswer, gameRule) => {
  console.log(`\nWelcome to the Brain Games!\n${gameRule}\n`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);
  if (isPlayerWin(firstRound, lastRound, taskAndAnswer)) {
    console.log(`Congratulations, ${playerName}!\n`);
  } else {
    console.log(`Let's try again, ${playerName}`);
    console.log('I\'m sorry, little one.\n');
  }
};

export default playGame;
