const getRandomNumber = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum + 1)) + min; // Максимум и минимум включаются
};

export default getRandomNumber;
