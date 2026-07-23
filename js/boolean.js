// const age = 15;

// if (age >= 16) {
//   console.log('You can drive');
// } else if (age >= 14) {
//   console.log('Soon enough!');
// } else {
//   console.log('You cannot drive');
// };

// Rock Paper Scissors
const rock = document.getElementById('rock');
rock.addEventListener("click", () => {
  const randomNumber = Math.random();
  let computerMove = '';
  let result = '';

  if (randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  };

  if (computerMove === 'rock') {
    result = 'Tie.';
  } else if (computerMove === 'paper') {
    result = 'You lose.'
  } else if (computerMove === 'scissors') {
    result = 'You win.'
  };

  alert(`You picked rock. Computer picked ${computerMove}. ${result}`);
});

const paper = document.getElementById('paper');
paper.addEventListener("click", () => {
  const randomNumber = Math.random();
  let computerMove = '';
  let result = '';

  if (randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  };

  if (computerMove === 'rock') {
    result = 'You win.';
  } else if (computerMove === 'paper') {
    result = 'Tie.'
  } else if (computerMove === 'scissors') {
    result = 'You lose.'
  };

  alert(`You picked paper. Computer picked ${computerMove}. ${result}`);
});

const scissors = document.getElementById('scissors');
scissors.addEventListener("click", () => {
  const randomNumber = Math.random();
  let computerMove = '';
  let result = '';

  if (randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  };

  if (computerMove === 'rock') {
    result = 'You lose.';
  } else if (computerMove === 'paper') {
    result = 'You win.'
  } else if (computerMove === 'scissors') {
    result = 'Tie.'
  };

  alert(`You picked scissors. Computer picked ${computerMove}. ${result}`);
});