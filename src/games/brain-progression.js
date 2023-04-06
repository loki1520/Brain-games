import getRandomNumber from '../randomCount.js';
import gamesCore from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const getArifmeticProgression = (start, counter, step) => {
  const resultArr = [];
  for (let i = 0; i < counter; i += 1) {
    resultArr.push(start + step * i);
  }
  return resultArr;
};

const roundGenerator = () => {
  const start = getRandomNumber(1, 100);
  const counter = getRandomNumber(5, 10);
  const step = getRandomNumber(1, 5);
  const indexChangedElement = getRandomNumber(0, counter);
  const randomProgression = getArifmeticProgression(start, counter, step);
  const changedElement = randomProgression.splice(indexChangedElement - 1, 1, '..');

  const question = randomProgression.join(' ');
  const correctAnswer = changedElement.join();
  return [question, correctAnswer];
};

const progression = () => {
  gamesCore(gameDescription, roundGenerator);
};

export default progression;
