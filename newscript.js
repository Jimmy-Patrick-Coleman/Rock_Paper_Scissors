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
        return moves[0];
    }
}
let moves = ["rock", "paper", 'scissors'];

function playerPlay() {
    let ps = prompt("Please enter rock, paper or scissors", "rock");
    ps.toUpperCase();
    if (ps === "ROCK") {
        return "rock";
    } else if (ps === "PAPER") {
        return "paper";
    } else if (ps === "SCISSORS" ) {
        return "scissors";
    } else {
        return 'error';
    }
}

function playRound(playerSelection, computerSelection) {
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
   if (playerSelection === "rock" && computerSelection === "rock") {
       return "Tie! You both chose Rock";
   } else if (playerSelection === "rock" && computerSelection === "paper") {
       return "You Lose! Paper beats Rock";
   } else if (playerSelection === "rock" && computerSelection === "scissors") {
       return "You Win! Rock beats Scissors";
   } else if (playerSelection === "paper" && computerSelection === "paper") {
       return "Tie! You both chose Paper";
   } else if (playerSelection === "paper" && computerSelection === "scissors") {
       return "You Lose! Scissors beats Paper";
   } else if (playerSelection === "paper" && computerSelection === "rock") {
       return "You Win! Paper beats Rock";
   } else if (playerSelection === "scissors" && computerSelection === "scissors") {
       return "Tie! You both chose Scissors";
   } else if (playerSelection === "scissors" && computerSelection === "rock") {
       return "You Lose! Rock beats Scissors";
   } else if (playerSelection === "scissors" && computerSelection === "paper") {
       return "You Win! Scissors beats Paper";
   }
 }
 playRound(playerSelection, computerSelection);