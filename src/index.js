import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const playGame = (taskAndAnswer, gameRule) => {

  const doGreeting = () => {
    console.log('Welcome to the Brain Games!\n');
    console.log(`${gameRule}\n`);
    const playerName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${playerName}!\n`)
    return (playerName);
  };

  const isPlayerRight = (playerAnswer, correctAnswer) => (playerAnswer === String(correctAnswer));

  const replyToCorrectAnswer = (playerAnswer) => {
    console.log(`Your answer: ${playerAnswer}`);
    console.log('Correct!\n');
  };

  const replyToWrongAnswer = (playerAnswer, correctAnswer, playerName) => {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${playerName}\n`);
  };

  const replyToVictory = playerName => console.log(`Congratulations, ${playerName}!\n`);

  const gameProcess = (playerName) => {
    const firstRound = 1;
    const lastRound = 3;
    const endGame = (round, lastRound, playerName) => {
      if (round > lastRound) {
        return replyToVictory(playerName);
      }
      const getTaskAndAnswer = taskAndAnswer();
      const gameTask = car(getTaskAndAnswer);
      const correctAnswer = cdr(getTaskAndAnswer);
      const playerAnswer = readlineSync.question(gameTask);
      if (!isPlayerRight(playerAnswer, correctAnswer)) {
        return replyToWrongAnswer(playerAnswer, correctAnswer);
      }
      replyToCorrectAnswer(playerAnswer);
      return endGame(round + 1, lastRound, playerName);
    };
    return endGame(firstRound, lastRound, playerName);
  };

  const playerName = doGreeting();
  gameProcess(playerName);
};

export default playGame;
