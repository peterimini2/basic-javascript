//Exercise
let name = 'Peter.';
console.log(`My name is ${name}`);

let cost = 5 + 3 + 3 + 9;
console.log(`Cost of food: $${cost}.`);

let tax = (5 + 3 + 3 + 9) * 0.1;
console.log(`Tax(10%): $${tax}.`);

let totalCost = cost + tax;
console.log(`Total Cost: $${totalCost}.`);


//Time exercise
let hour = 18;
let name = 'Peter';
if (hour >= 6 && hour < 12) {
  console.log(`Good morning, ${name}!`);
} else if (hour >= 12 && hour < 17) {
  console.log(`Good afternoon, ${name}!`);
} else {
  console.log(`Good night, ${name}!`);
};

//Amusement park exercise
let age = 45;
const isHoliday = true;
if ((age <= 6 || age >= 65) && isHoliday) {
  console.log('Discount!')
} else {
  console.log('No Discount!')
};

//Coin Flip Exercise
const randomNumber = Math.random();
const result = randomNumber < 0.5 ? 'heads' : 'tails';

const guess = 'heads';
console.log(guess === result ? 'You win!' : 'You lose!');