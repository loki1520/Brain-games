import getRandomNumber from '../randomCount.js';
import gamesCore from '../index.js';

const descriptionOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (checkNumber) => {
  const result = checkNumber % 2 === 0;
  return result;
};

const roundGenerator = () => {
  const randomAsk = getRandomNumber(1, 100);
  const correctAnswer = isEven(randomAsk) === true ? 'yes' : 'no';
  return [randomAsk, correctAnswer];
};

const even = () => {
  gamesCore(descriptionOfGame, roundGenerator);
};

export default even; // если просто экспортировать theCoreOfGames(roundGenerator),
// то при вызове из запускного файла bin/brai-even.js - выдавалась ошибка что theCoreOfGames
// не функция, в итоге создал функцию preparedGame и экспортировал ее, так и не понял
// что не так, но ошибка исправилась...
