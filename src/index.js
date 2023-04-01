import readlineSync from 'readline-sync';

const numberOfRound = 3;
const theCoreOfGames = (brainRulls) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const [descriptionOfGame] = brainRulls();
  console.log(descriptionOfGame);
  for (let i = 0; i < numberOfRound; i += 1) {
    const [, randomNumber, correctAnswer] = brainRulls();
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
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

export default theCoreOfGames;
