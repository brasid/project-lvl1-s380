import readlineSync from 'readline-sync';

// step two
const greeting = 'Welcome to the Brain Games!';

const hiName = () => {
  const askName = readlineSync.question('May I have your name? ');// function calls itself prime to any others if it's not inside other function
  return (`Hello, ${askName}!`);
};

// step four
const brainEven = () => {
  console.log('Answer "yes" if number even otherwise answer "no".');
  const askName = readlineSync.question('May I have your name? '); // function calls itself prime to any others if it's not inside other function

  const answerNum = (round, randomNumber) => {
    if (round === 0) {
      return (`Congratilations, ${askName}!`);
    }
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      return answerNum(round - 1, Math.floor(Math.random() * 100));
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${askName}`);
    return answerNum(round, Math.floor(Math.random() * 100));
  };
  return answerNum(3, Math.floor(Math.random() * 100));
};

export {
  greeting, hiName, brainEven,
};
