
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

const reset = document.getElementById('reset');
reset.addEventListener("click", () => {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.setItem('score', JSON.stringify(score));

  updateScore();
  // alert('Score reset successfully.');
});

let score = JSON.parse(localStorage.getItem('score')) ||  {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScore();

function updateScore() {
  document.querySelector('.js-score').textContent =
    `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}

//document.querySelector('.js-score').innerHTML = `Wins: ${ score.wins } Loss: ${ score.losses } Ties: ${ score.ties }`;


function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
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

  if (result === 'You win.') {
    score.wins += 1
  } else if (result === 'You lose.') {
    score.losses += 1
  } else if (result === 'Tie.') {
    score.ties += 1
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScore();

  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `You: ${playerMove} - Computer: ${computerMove}`;


  // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
  // Wins: ${score.wins} Loss: ${score.losses} Ties: ${score.ties}`);
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
