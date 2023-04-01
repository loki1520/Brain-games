import getRandomNumber from '../randomCount.js';
import theCoreOfGames from '../index.js';

const brainRulls = () => {
  const descriptionOfGame = 'What is the result of the expression?';

  const randomNumberOne = getRandomNumber(1, 10);
  const randomNumberTwo = getRandomNumber(1, 10);
  const operator = ['+', '-', '*'];
  const randomOperator = getRandomNumber(0, 2);
  const randomNumber = `${randomNumberOne} ${operator[randomOperator]} ${randomNumberTwo}`;

  let correctAnswer;
  if (operator[randomOperator] === '+') {
    correctAnswer = randomNumberOne + randomNumberTwo;
  } else if (operator[randomOperator] === '-') {
    correctAnswer = randomNumberOne - randomNumberTwo;
  } else if (operator[randomOperator] === '*') {
    // как тут лучше: удалить эту часть? "if (operator[randomOperator] === '*')",
    // код тогда будет менее читабелен, но зато по канонам, с else..
    correctAnswer = randomNumberOne * randomNumberTwo;
  }
  correctAnswer = String(correctAnswer);
  return [descriptionOfGame, randomNumber, correctAnswer];
};

const preparedGame = () => {
  theCoreOfGames(brainRulls);
};

export default preparedGame;
