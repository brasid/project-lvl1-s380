import readlineSync from 'readline-sync';

const greeting = () => console.log('Welcome to the Brain Games!');

const userName = () => readlineSync.question('May I have your name? ');

const hiName = () => {
  const gamerName = userName();
  const hi = console.log(`Hello, ${gamerName}!`);
  return (gamerName, hi);
};

export { greeting, hiName };
