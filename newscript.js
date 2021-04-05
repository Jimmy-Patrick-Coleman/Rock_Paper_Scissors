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
  function playerPlay(){
    fix = prompt("rock paper or scissors", "Paper");
    choise = fix.toLowerCase();
    return choise;
}
  
  let moves = ["rock", "paper", "scissors"];
  function startRound() {
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    const playerWin =  0;
    const computerWin = 0;
    function playRound(playerSelection, computerSelection) {
      if (playerSelection === "rock" && computerSelection === "rock") {
        return "Tie! You both chose Rock";
      } else if (playerSelection === "rock" && computerSelection === "paper") {
          computerWin++;
        return "You Lose! Paper beats Rock";
      } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerWin++;
        return "You Win! Rock beats Scissors";
      } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Tie! You both chose Paper";
      } else if (
        playerSelection === "paper" &&
        computerSelection === "scissors"
      ) {
        computerWin++;
        return "You Lose! Scissors beats Paper";
      } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerWin++;
        return "You Win! Paper beats Rock";
      } else if (
        playerSelection === "scissors" &&
        computerSelection === "scissors"
      ) {
        return "Tie! You both chose Scissors";
      } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerWin++;
        return "You Lose! Rock beats Scissors";
      } else if (
        playerSelection === "scissors" &&
        computerSelection === "paper"
      ) {
        playerWin++;
        return "You Win! Scissors beats Paper";
      } else {
        return "error";
      }
    }
  
    return playRound(playerSelection, computerSelection);
  }
  
  function game() {
    for(let rounds = 0;rounds <= 5; rounds++) {
   
      console.log(startRound());
    }
  }
game();

  