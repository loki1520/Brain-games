import getRandomNumber from '../randomCount.js';
import gamesCore from '../index.js';

const descriptionOfGame = 'What is the result of the expression?';

const getRandomOperation = () => {
  const operators = ['+', '-', '*'];
  const choiceRandomOperatorIndex = getRandomNumber(0, 2);
  const choisedRandomOperator = operators[choiceRandomOperatorIndex];
  return choisedRandomOperator;
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

  const randomAsk = `${randomNumberOne} ${randomOperator} ${randomNumberTwo}`;
  const correctAnswer = getResultExpression(randomNumberOne, randomNumberTwo, randomOperator);

  return [randomAsk, correctAnswer];
};

const calc = () => {
  gamesCore(descriptionOfGame, roundGenerator);
};

export default calc;
