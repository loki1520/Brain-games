import getRandomNumber from '../randomCount.js';
import theCoreOfGames from '../index.js';

const brainRulls = () => {
  const descriptionOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  const randomNumber = getRandomNumber(1, 100);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return [descriptionOfGame, randomNumber, correctAnswer];
};

const preparedGame = () => {
  theCoreOfGames(brainRulls);
};

export default preparedGame; // если просто экспортировать theCoreOfGames(brainRulls),
// то при вызове из запускного файла bin/brai-even.js - выдавалась ошибка что theCoreOfGames
// не функция, в итоге создал функцию preparedGame и экспортировал ее, так и не понял
// что не так, но ошибка исправилась...
