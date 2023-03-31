import readlineSync from 'readline-sync';
import getRandomNumber from '../randomCount.js';

const numberOfRound = 3;
const brainCals = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('What is the result of the expression?'); //
  for (let i = 0; i < numberOfRound; i += 1) {
    const randomNumberOne = getRandomNumber(1, 10);
    const randomNumberTwo = getRandomNumber(1, 10);
    const operator = ['+', '-', '*'];
    const randomOperator = getRandomNumber(0, 2);
    const generatedRandomExpression = `${randomNumberOne} ${operator[randomOperator]} ${randomNumberTwo}`;

    console.log(`Question: ${generatedRandomExpression}`);
    let correctAnswer;
    if (operator[randomOperator] === '+') {
      correctAnswer = randomNumberOne + randomNumberTwo;
    } else if (operator[randomOperator] === '-') {
      correctAnswer = randomNumberOne - randomNumberTwo;
    } else if (operator[randomOperator] === '*') { // как тут лучше: удалить эту часть? "if (operator[randomOperator] === '*')", будет менее читабельно, но зато по канонам, с else..
      correctAnswer = randomNumberOne * randomNumberTwo;
    }
    correctAnswer = String(correctAnswer);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default brainCals;
