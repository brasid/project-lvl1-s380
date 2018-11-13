import readlineSync from 'readline-sync';

// step two
const greeting = () => console.log('Welcome to the Brain Games!');

const hiName = () => {
  const name = readlineSync.question('May I have your name? ');// function calls itself prime to any others if it's not inside other function
  return (`Hello, ${name}!`);
};

// step four
const isEven = number => (number % 2 === 0);

const getRandom = () => Math.floor(Math.random() * 100);

const brainEven = () => {
  console.log('Answer "yes" if number even, otherwise answer "no".');
  const name = readlineSync.question('May I have your name? '); // function calls itself prime to any others if it's not inside other function

  const attemptsCount = (attempt) => {
    if (attempt > 3) {
      return console.log(`Congratilations, ${name}!`);
    }
    const random = getRandom();
    console.log(`Question: ${random}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = (isEven(random)) ? 'yes' : 'no';
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      return attemptsCount(attempt + 1);
    }
    return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}`);
  };
  return attemptsCount(1);
};

export {
  greeting, hiName, brainEven,
};
