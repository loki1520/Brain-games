import readlineSync from 'readline-sync';
import getRandomNumber from '../randomCount.js';

const numberOfRound = 3;
const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < numberOfRound; i += 1) {
    const randomNumber = getRandomNumber(1, 100);
    console.log(`Question: ${randomNumber}`);

    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default brainEven;
