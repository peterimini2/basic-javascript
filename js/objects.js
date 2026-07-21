
// Rock Paper Scissors

//Rock
const rock = document.getElementById('rock');
rock.addEventListener("click", () => {
  playGame('rock');
});

//Paper
const paper = document.getElementById('paper');
paper.addEventListener("click", () => {
  playGame('paper');
});

//Scissors
const scissors = document.getElementById('scissors');
scissors.addEventListener("click", () => {
  playGame('scissors');
});


function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scisssors') {
      if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.'
    } else if (computerMove === 'scissors') {
        result = 'Tie.'
    }

    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.'
    } else if (computerMove === 'scissors') {
      result = 'You lose.'
    }

    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.'
    } else if (computerMove === 'scissors') {
      result = 'You win.'
    };
  }

  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
};

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  };

  return computerMove;
};
