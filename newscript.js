
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
/*a function that propmts the player to enter rock paper or scissors then assings the output to a var then returns it in a lower case form */
function playerPlay() {
  fix = prompt("Rock, Paper or Scissors?", "Paper");
  choise = fix.toLowerCase();
  return choise;
}

let moves = ["rock", "paper", "scissors"];

function game() {
  let playerWins = 0;
  let computerWins = 0;

  /*a function that takes the players choise and the generated choise and compares them returning a string and incrementing the winners score */
  function startRound() {
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    function playRound(playerSelection, computerSelection) {
      if (playerSelection === "scissors" && computerSelection === "paper") {
        playerWins++;
        return "You Win! Scissors beats Paper";
      } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerWins++;
        return "You Win! Paper beats Rock";
      } else if (
        playerSelection === "rock" &&
        computerSelection === "scissors"
      ) {
        playerWins++;
        return "You Win! Rock beats Scissors";
      } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerWins++;
        return "You Lose! Paper beats Rock";
      } else if (
        playerSelection === "paper" &&
        computerSelection === "scissors"
      ) {
        computerWins++;
        return "You Lose! Scissors beats Paper";
      } else if (
        playerSelection === "scissors" &&
        computerSelection === "rock"
      ) {
        computerWins++;
        return "You Lose! Rock beats Scissors";
      } else if (playerSelection === "rock" && computerSelection === "rock") {
        return "Tie! You both chose Rock";
      } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Tie! You both chose Paper";
      } else if (
        playerSelection === "scissors" &&
        computerSelection === "scissors"
      ) {
        return "Tie! You both chose Scissors";
      } else {
        return "error";
      }
    }

    return playRound(playerSelection, computerSelection);
  }

  /* a loop thar plays the round function five times and returns the scores*/
  for (let rounds = 0; rounds <= 5; rounds++) {
    console.log("The computer has won " + computerWins + " games.");
    console.log("You have won " + playerWins + " games.");

    console.log(startRound());
    if (rounds === 5 && playerWins > computerWins) {
      return console.log(
        "Victory You have won " +
          playerWins +
          " games whilst the computer won " +
          computerWins +
          " games."
      );
    } else if (rounds === 5 && playerWins < computerWins) {
      return console.log(
        "Defeat You have won " +
          playerWins +
          " games but the computer won " +
          computerWins +
          " games."
      );
    } else if (rounds === 5 && playerWins < computerWins) {
      return console.log("Tie You both won " + playerWins + " games.");
    }
  }
}
game();