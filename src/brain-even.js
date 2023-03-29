import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

const brainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const numberOfRound = 3;
  for (let i = 0; i < numberOfRound; i += 1) {
    const getRandomNumber = () => Math.floor(Math.random() * 1000);
    const randomNumber = getRandomNumber();

    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== 'yes' && answer !== 'no') {
      console.log(`"${answer}" is wrong answer ;(.`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }

    if (answer === 'yes' && randomNumber % 2 !== 0) {
      console.log('"yes" is wrong answer ;(. Correct answer was "no".');
      console.log(`Let's try again, ${userName}!`);
      return false;
    }

    if (answer === 'no' && randomNumber % 2 !== 1) {
      console.log('"no" is wrong answer ;(. Correct answer was "yes".');
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default brainEven;
