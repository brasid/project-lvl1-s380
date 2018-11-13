import readlineSync from 'readline-sync';

// step two
const greeting = 'Welcome to the Brain Games!';

const hiName = () => {
  const askName = readlineSync.question('May I have your name? ');
  return (`Hello, ${askName}!`);
};

// step four (unfinished)
const rulesBrainEven = 'Answer "yes" if number even otherwise answer "no".';


const answerNum = (round) => {
  const askName = readlineSync.question('May I have your name? ');
  const randomNumber = Math.floor(Math.random() * 100);
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return (round - 1 > 0) ? answerNum(round - 1) : console.log(`Congratilations, ${askName}!`);
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${askName}`);
  return answerNum(round);
};


export {
  greeting, hiName, answerNum, rulesBrainEven,
};
