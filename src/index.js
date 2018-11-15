import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const playGame = (taskAndAnswer, gameRule) => {
  const doGreeting = () => {
    console.log(`Welcome to the Brain Games!\n${gameRule}`);
    const playerName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${playerName}!`);
    return (playerName);
  };

  const getRoundResult = (playerName) => {
    let isRoundPassed = true;
    const getTaskAndAnswer = taskAndAnswer();
    const gameTask = `Question ${car(getTaskAndAnswer)}  `;
    const correctAnswer = cdr(getTaskAndAnswer);
    const playerAnswer = readlineSync.question(gameTask);
    if (playerAnswer !== String(correctAnswer)) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}`);
      isRoundPassed = false;
    } else {
      console.log(`Your answer: ${playerAnswer}\nCorrect!`);
    }
    return isRoundPassed;
  };

  const isPlayerWin = (round, lastRound, playerName) => {
    if (round > lastRound) {
      return true;
    }
    return (getRoundResult(playerName)) ? isPlayerWin(round + 1, lastRound, playerName) : false;
  };

  const firstRound = 1;
  const lastRound = 3;

  const gameProcess = (playerName) => {
    if (isPlayerWin(firstRound, lastRound, playerName)) {
      console.log(`Congratulations, ${playerName}!\n`);
    } else {
      console.log('I\'m sorry, little one.');
    }
  };

  const playerName = doGreeting();
  gameProcess(playerName);
};

export default playGame;
