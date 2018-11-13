import readlineSync from 'readline-sync';

const greeting = () => console.log('Welcome to the Brain Games!');

const yourName = () => {
  const gamerName = readlineSync.question('May I have your name? ');
  const hiName = console.log(`Hello, ${gamerName}!`);
  return (gamerName, hiName);
};

export { greeting, yourName };
