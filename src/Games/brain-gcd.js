import getRandomNumber from '../randomCount.js';
import theCoreOfGames from '../index.js';

const findedDivisior = (One, Two) => {
  const minimal = One < Two ? One : Two;
  for (let i = minimal; i > 0; i -= 1) {
    if (Two % i === 0 && One % i === 0) {
      return i;
    }
  }
  return 1;
};

const brainRulls = () => {
  const descriptionOfGame = 'Find the greatest common divisor of given numbers.';
  const randomNumberOne = getRandomNumber(1, 10);
  const randomNumberTwo = getRandomNumber(1, 10);
  const randomNumber = `${randomNumberOne} ${randomNumberTwo}`;

  const correctAnswer = String(findedDivisior(randomNumberOne, randomNumberTwo));
  return [descriptionOfGame, randomNumber, correctAnswer];
};

const preparedGame = () => {
  theCoreOfGames(brainRulls);
};

export default preparedGame;
