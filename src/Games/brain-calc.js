import getRandomNumber from '../randomCount.js';
import gamesCore from '../index.js';

const gameDescription = 'What is the result of the expression?';

const getRandomOperation = () => {
  const operators = ['+', '-', '*'];
  const choiceRandomOperatorIndex = getRandomNumber(0, 2);
  return operators[choiceRandomOperatorIndex];
};

const getResultExpression = (randomNumberOne, randomNumberTwo, randomOperator) => {
  let resultExpression;
  switch (randomOperator) {
    case '+':
      resultExpression = randomNumberOne + randomNumberTwo;
      break;
    case '-':
      resultExpression = randomNumberOne - randomNumberTwo;
      break;
    default:
      resultExpression = randomNumberOne * randomNumberTwo;
      break;
  }
  return String(resultExpression);
};

const roundGenerator = () => {
  const randomOperator = getRandomOperation();
  const randomNumberOne = getRandomNumber(1, 10);
  const randomNumberTwo = getRandomNumber(1, 10);

  const question = `${randomNumberOne} ${randomOperator} ${randomNumberTwo}`;
  const correctAnswer = getResultExpression(randomNumberOne, randomNumberTwo, randomOperator);

  return [question, correctAnswer];
};

const calc = () => {
  gamesCore(gameDescription, roundGenerator);
};

export default calc;
