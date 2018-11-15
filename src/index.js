import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const playGame = (taskAndAnswer, gameRule) => {

    console.log(`Welcome to the Brain Games!\n${gameRule}`);
    const playerName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${playerName}!`);
    const firstRound = 1;
    const lastRound = 3;
    if (gameProcess(firstRound, lastRound, playerName)) {
      console.log(`Congratulations, ${playerName}!\n`);
    } else {
      console.log('I\'m sorry, little one.');
    }
    return (playerName);
};

const gameProcess = (round, lastRound, playerName) => {
  if (round > lastRound) {
      return true;
    }
    const getTaskAndAnswer = taskAndAnswer();
    const gameTask = `Question ${car(getTaskAndAnswer)}  `;
    const correctAnswer = cdr(getTaskAndAnswer);
    const playerAnswer = readlineSync.question(gameTask);
    if (playerAnswer !== String(correctAnswer)) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}`);
    } else {
      console.log(`Your answer: ${playerAnswer}\nCorrect!`);
      return gameProcess(round + 1, lastRound, playerName);
    }

  };


};

export default playGame;
