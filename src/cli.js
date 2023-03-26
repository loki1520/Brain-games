import readlineSync from "readline-sync";

console.log('Welcome to the Brain Games!');

let userName = readlineSync.question('May I have your name? ');

export default userName;

