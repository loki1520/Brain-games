import getRandomNumber from '../randomCount.js';
import gamesCore from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getMaximumDivisior = (one, two) => {
  const minimal = one <= two ? one : two;
  for (let i = minimal; i > 0; i -= 1) {
    if (two % i === 0 && one % i === 0) {
      return String(i);
    }
  }
  return '1';
};

const roundGenerator = () => {
  const randomNumberOne = getRandomNumber(1, 100);
  const randomNumberTwo = getRandomNumber(1, 100);

  const question = `${randomNumberOne} ${randomNumberTwo}`;
  const correctAnswer = getMaximumDivisior(randomNumberOne, randomNumberTwo);
  return [question, correctAnswer];
};

const gcd = () => {
  gamesCore(gameDescription, roundGenerator);
};

export default gcd;
