let moves = ["rock", "paper", "scissors"];
/*a function that generates a random number between one and three then asigns it to a corrisponding array to a variable the return the varible */
let computerPlay = () => {
  let computersChoise = getRandomInt(3);
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  if (computersChoise === 1) {
    return moves[0];
  } else if (computersChoise === 2) {
    return moves[1];
  } else if (computersChoise === 3) {
    return moves[2];
  } else {
    return moves[2];
  }
};
function restart() {
  location.reload();
}
let rounds = 0;
function roundOver() {
  rounds++;
}

function gameOver() {
  if (playerWins >= 6) {
    restart();
  } else if (computerWins >= 6) {
    restart();
  }
}

let playerWins = 0;
function win() {
  playerWins++;
  playerWinDiv.textContent = `The player has one ${playerWins} rounds.`;
  console.log(playerWins, "Player wins");
  announceWinner();
  gameOver();
}

let computerWins = 0;
function lose() {
  computerWins++;
  computerWinDiv.textContent = `The computer has one ${computerWins} rounds.`;
  console.log(computerWins, "Computer Wins");
  gameOver();
  announceWinner();
}
function announceWinner() {
  if (playerWins === 5 || computerWins === 5) {
    if (playerWins > computerWins) {
      gameScore.textContent = "VICTORY press any button to restart";
    } else if (playerWins < computerWins) {
      gameScore.textContent = "DEFEAT press any button to restart";
    }
  }
}

function playRound(playerSelection, computerSelection) {
  console.log(computerSelection);
  console.log(playerSelection);
  if (playerSelection === "scissors" && computerSelection === "paper") {
    win();
    roundOver();
    content.textContent = "You Win! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    win();
    roundOver();
    content.textContent = "You Win! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    win();
    roundOver();
    content.textContent = "You Win! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    lose();
    roundOver();
    content.textContent = "You Lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    lose();
    roundOver();
    content.textContent = "You Lose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    lose();
    roundOver();
    content.textContent = "You Lose! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    roundOver();
    content.textContent = "Tie! You both chose Rock";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    roundOver();
    content.textContent = "Tie! You both chose Paper";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    roundOver();
    content.textContent = "Tie! You both chose Scissors";
  } else {
    return "ERROR";
  }
}
const ending = document.querySelector("#ending");
const gameScore = document.createElement("div");
gameScore.classList.add("gameScore");
gameScore.textContent = "Play five rounds against the computer.";
ending.appendChild(gameScore);

const score = document.querySelector("#score-div");

const playerWinDiv = document.createElement("div");
playerWinDiv.classList.add("playerWinDiv");
playerWinDiv.textContent = `The player has won ${playerWins} rounds.`;
score.appendChild(playerWinDiv);

const roundsDiv = document.createElement("div");
roundsDiv.classList.add("roundsDiv");
roundsDiv.textContent = `You have played ${rounds} rounds.`;
score.appendChild(roundsDiv);

const computerWinDiv = document.createElement("div");
computerWinDiv.classList.add("computerWinDiv");
computerWinDiv.textContent = `The computer has won ${computerWins} rounds.`;
score.appendChild(computerWinDiv);

const container = document.querySelector("#result-div");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "Are you ready?";
container.appendChild(content);
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    const computerSelection = computerPlay();
    const playerSelection = button.id;
    console.log(playRound(playerSelection, computerSelection));
  });
});
