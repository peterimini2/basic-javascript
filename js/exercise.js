// //Exercise
// let name = 'Peter.';
// console.log(`My name is ${name}`);

// let cost = 5 + 3 + 3 + 9;
// console.log(`Cost of food: $${cost}.`);

// let tax = (5 + 3 + 3 + 9) * 0.1;
// console.log(`Tax(10%): $${tax}.`);

// let totalCost = cost + tax;
// console.log(`Total Cost: $${totalCost}.`);


// //Time exercise
// let hour = 18;
// let name = 'Peter';
// if (hour >= 6 && hour < 12) {
//   console.log(`Good morning, ${name}!`);
// } else if (hour >= 12 && hour < 17) {
//   console.log(`Good afternoon, ${name}!`);
// } else {
//   console.log(`Good night, ${name}!`);
// };

// //Amusement park exercise
// let age = 45;
// const isHoliday = true;
// if ((age <= 6 || age >= 65) && isHoliday) {
//   console.log('Discount!')
// } else {
//   console.log('No Discount!')
// };

// //Coin Flip Exercise
// const randomNumber = Math.random();
// const result = randomNumber < 0.5 ? 'heads' : 'tails';

// const guess = 'heads';
// console.log(guess === result ? 'You win!' : 'You lose!');

//Goal Exercise
const userInput = document.getElementById('input');
userInput.addEventListener("click", () => {
  console.log('');
});

const save = document.getElementById('save');
save.addEventListener("click", () => {
  const inputValue = userInput.value;
  
  if (!inputValue.trim()) {
    alert('Please enter your goal')
    console.log('No goal')
  } else {
    alert('Goal saved succesfully');
    console.log(inputValue);
  }
});

const clear = document.getElementById('clear');
clear.addEventListener("click", () => {
  alert('Goal cleared successfully')
});

const safe = document.getElementById('safe');
safe.addEventListener("click", () => {
  
});

// //Odd and even calculator
// let num = Number(prompt("Enter a number:"));

// if (num % 2 === 0) {
//   console.log("Even");
// } else if (!num) {
//   console.log('Not a number')
// } else {
//   console.log("Odd");
// }

//Pass/ Fail
const scoreText = document.querySelector('.score-text');
const checkBtn = document.querySelector('.check-btn');
const scoreResult = document.getElementById('scoreResult');

checkBtn.addEventListener("click", () => {
  gradeResult();
})

scoreText.addEventListener("keydown", () => {
  if (event.key === 'Enter') {
    gradeResult();
  }
})

function gradeResult() {
  const score = scoreText.value

  if (scoreText.value.trim() === "") {
    scoreResult.innerHTML = 'Please input score'
  } else if (score >= 50) {
    scoreResult.innerHTML = 'Pass.';
  } else {
    scoreResult.innerHTML = 'Fail.'
  }
}

// Age result
const ageText = document.querySelector('.age-text');
const ageBtn = document.querySelector('.age-btn');
const ageResult = document.getElementById('ageResult');

ageBtn.addEventListener("click", () => {
  ageFunction();
})

ageText.addEventListener("keydown", () => {
  if (event.key === 'Enter') {
    ageFunction();
  }
})

function ageFunction() {
  const age = ageText.value

  if (ageText.value.trim() === "") {
    ageResult.innerHTML = 'Please input age'
  } else if (age <= 12) {
    ageResult.innerHTML = 'Child.';
  } else if (age <= 17) {
    ageResult.innerHTML = 'Teenager.'
  } else {
    ageResult.innerHTML = 'Adult.'
  }
}

//Positive / Negative
const numText = document.querySelector('.num-text');
const numBtn = document.querySelector('.num-btn');
const numResult = document.getElementById('numResult');

numBtn.addEventListener("click", () => {
  const num = numText.value;

  if (numText.value.trim() === "") {
    numResult.innerHTML = 'Please input number'
  } else if (num > 0) {
    numResult.innerHTML = 'Positive.';
  } else if (num < 0) {
    numResult.innerHTML = 'Negative.'
  } else {
    numResult.innerHTML = 'Zero.'
  }
})

//Login 
const userName = document.querySelector('.username');
const password = document.querySelector('.password');
const loginBtn = document.querySelector('.login-btn');
const loginResult = document.getElementById('loginResult');

loginBtn.addEventListener("click", () => {

  if (userName.value.trim() === "" || password.value.trim() === "") {
    loginResult.innerHTML = "Please enter login details"
  } else if (userName.value === 'Peter' && password.value === '024118') {
    loginResult.innerHTML = 'Login Successful.'
  } else {
    loginResult.innerHTML = 'Invalid login details'
  }
})

// Largest Number
const largeNumber = document.querySelector('.large-num');
const smallNumber = document.querySelector('.small-num');
const checkNum = document.querySelector('.check-num');
const showResult = document.querySelector('.num-output')

checkNum.addEventListener("click", () => {

  if (largeNumber.value.trim() === "" || smallNumber.value.trim() === "" ) {
    showResult.innerHTML = 'Please enter number'
  } else if (Number(largeNumber.value > smallNumber.value)) {
    showResult.innerHTML =  `${largeNumber.value} is higher.`
  } else if (Number(largeNumber.value < smallNumber.value)) {
    showResult.innerHTML = `${ smallNumber.value } is higher.`
  } else if (Number.isNaN(large) || Number.isNaN(small)) {
    showResult.innerHTML = 'Please enter numbers only.'
  } else {
    showResult.innerHTML = 'They are equal.'
  }
})

// Grade Checker
const examScore = document.querySelector('#exam-score');
const gradeBtn = document.querySelector('.grade-btn');
const grade = document.querySelector('.grade-score')

gradeBtn.addEventListener("click", () => {
  if (examScore.value.trim() === "") {
    grade.innerHTML = 'Please enter your exam score.'
  } else if (examScore.value >= 70) {
    grade.innerHTML = "Your grade is 'A'."
  } else if (examScore.value >= 60 && examScore.value <= 69) {
    grade.innerHTML = "Your grade is 'B'."
  } else if (examScore.value >= 50 && examScore.value <= 59) {
    grade.innerHTML = "Your grade is 'C'."
  } else if (examScore.value >= 40 && examScore.value <= 49) {
    grade.innerHTML = "Your grade is 'D'."
  } else {
    grade.innerHTML = 'You failed the exam.'
  }
})

// Voting Eligibility
const ageInput = document.querySelector('.age-input');
const country = document.querySelector('.nationality');
const voteBtn = document.querySelector('.vote-btn');
const voteResult = document.querySelector('.vote-result');

voteBtn.addEventListener("click", () => {
  if (ageInput.value.trim() === "" || country.value.trim() === "") {
    voteResult.innerHTML = 'Please enter complete details.'
  } else if (ageInput.value >= 18 && (country.value === 'Nigerian' || country.value === 'Nigeria')) {
    voteResult.innerHTML = 'You are eligible to vote.'
  } else {
    voteResult.innerHTML = 'You are NOT eligible to vote.'
  }
})

// Simple Calculator
const num1 = document.getElementById('num-1');
const num2 = document.getElementById('num-2');
const operator = document.getElementById('operator');
const calcBtn = document.getElementById('calc-btn');
const calcResult = document.getElementById('calc-result');

calcBtn.addEventListener("click", () => {
  if (operator.value.trim() === "" || num1.value.trim() === "" || num2.value.trim() === "") {
    calcResult.innerHTML = 'Please enter correctly.'
  } else if (operator.value === '+') {
    calcResult.innerHTML = `${num1.value}` + `${num2.value}`
  } else if (operator.value === '-') {
    calcResult.innerHTML = `${num1.value}` - `${num2.value}`
  } else if (operator.value === '*') {
    calcResult.innerHTML = `${num1.value}` * `${num2.value}`
  } else if (operator.value === '/') {
    calcResult.innerHTML = `${num1.value}` / `${num2.value}`
  } else {
    calcResult.innerHTML = 'Invalid operation.'
  }
})