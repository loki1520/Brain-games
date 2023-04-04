import getRandomNumber from '../randomCount.js';
import gamesCore from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (checkNumber) => checkNumber % 2 === 0;

const roundGenerator = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const even = () => {
  gamesCore(gameDescription, roundGenerator);
};

export default even;
