import getRandomNumber from '../randomCount.js';
import gamesCore from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getMaximumDivisior = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getMaximumDivisior(num2, num1 % num2);
};

const roundGenerator = () => {
  const randomNumberOne = getRandomNumber(1, 100);
  const randomNumberTwo = getRandomNumber(1, 100);

  const question = `${randomNumberOne} ${randomNumberTwo}`;
  const correctAnswer = String(getMaximumDivisior(randomNumberOne, randomNumberTwo));
  return [question, correctAnswer];
};

const gcd = () => {
  gamesCore(gameDescription, roundGenerator);
};

export default gcd;
