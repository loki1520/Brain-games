import getRandomNumber from '../randomCount.js';

const brainEven = () => {
  const descriptionOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  const randomNumber = getRandomNumber(1, 100);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return [descriptionOfGame, randomNumber, correctAnswer];
};

export default brainEven;
