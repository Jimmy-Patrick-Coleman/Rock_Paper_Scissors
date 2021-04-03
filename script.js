function computerPlay() {
    let computersChoise = getRandomInt(9);
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    if (computersChoise >= 3) {
        return "rock";
    } else if (computersChoise >= 6) {
        return "paper";
    } else {
        return "scissors";
    }
}
   
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
    
  if (playerSelection === "rock" && computerSelection === "rock") {
      return "Tie! You both chose Rock";
  } 
  else if (playerSelection === "paper" && computerSelection === "rock") {
      return "You win! Paper beats Rock";
  }
   else if (playerSelection === "scissors" && computerSelection === "rock") {
      return "You lose! Rock beats Scissors";
  }
   else if (playerSelection === "rock" && computerSelection === "paper") {
      return "You lose! Paper beats Rock";
  }
   else if (playerSelection === "paper" && computerSelection === "paper") {
      return "Tie! You both chose Paper";
  }
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beats paper";
} 
else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats Scissors";
}
 else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beats Paper";
}
else if (playerSelection === "scissors" && computerSelection === "scissors") {
  return "Tie! You both chose Paper";
}
}

let playerSelection = 'rock';
let computerSelection = computerPlay();
alert(playRound(playerSelection, computerSelection));
