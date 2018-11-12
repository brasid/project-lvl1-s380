import readlineSync from 'readline-sync';

export const greeting = () =>  {
  const hello = console.log('Welcome to the Brain Games!');
  const gamerName = readlineSync.question('May I have your name? ');
  const hiName = console.log(`Hello, ${gamerName}!`);
  return (hello, gamerName, hiName);
};
