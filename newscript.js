


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



let playerWins = 0;
function win() {
  playerWinDiv.textContent = `player wins ${playerWins}`
  playerWins++;
  announceWinner();
}

let computerWins = 0;
function lose() {
  computerWinDiv.textContent = `computer wins ${computerWins}`
  computerWins++;
  announceWinner();
}
function announceWinner() {
if (playerWins + computerWins === 5) {
  if (playerWins < computerWins) {
    gameScore.textContent = 'you win';
  } else if (playerWins > computerWins) {
    gameScore.textContent = 'you lose';
  }
}
}

    function playRound(playerSelection, computerSelection) {
    
      console.log(computerSelection);
      console.log(playerSelection);
      if (playerSelection === "scissors" && computerSelection === "paper") {
        win()
        content.textContent = "You Win! Scissors beats Paper";
      } else if (playerSelection === "paper" && computerSelection === "rock") {
        win();
        content.textContent = "You Win! Paper beats Rock";
      } else if (
        playerSelection === "rock" &&
        computerSelection === "scissors"
      ) {
        win();
        content.textContent = "You Win! Rock beats Scissors";
      } else if (playerSelection === "rock" && computerSelection === "paper") {
        lose();
        content.textContent ="You Lose! Paper beats Rock";
      } else if (
        playerSelection === "paper" &&
        computerSelection === "scissors"
      ) {
        lose();
        content.textContent = "You Lose! Scissors beats Paper";
      } else if (
        playerSelection === "scissors" &&
        computerSelection === "rock"
      ) {
        lose();
        content.textContent = "You Lose! Rock beats Scissors";
      } else if (playerSelection === "rock" && computerSelection === "rock") {
        content.textContent = "Tie! You both chose Rock";
      } else if (playerSelection === "paper" && computerSelection === "paper") {

        content.textContent = "Tie! You both chose Paper";
      } else if (
        playerSelection === "scissors" &&
        computerSelection === "scissors"
      ) {
        content.textContent = "Tie! You both chose Scissors";
      } else {
        content.textContent = "error";
      }
    }
   
        const score = document.querySelector('#score-div');

        const gameScore = document.createElement('div');
        gameScore.classList.add('gameScore');
        gameScore.textContent = '';
        score.appendChild(gameScore);
    
    
        const computerWinDiv = document.createElement('div');
        computerWinDiv.classList.add('computerWinDiv');
        computerWinDiv.textContent = `computer wins ${computerWins}`;
        score.appendChild(computerWinDiv);
    
        const playerWinDiv = document.createElement('div');
        playerWinDiv.classList.add('playerWinDiv');
        playerWinDiv.textContent = `player wins ${playerWins}`;
        score.appendChild(playerWinDiv);
    
        
    
    
        const container = document.querySelector('#result-div');
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = '';
        container.appendChild(content);
    
    

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
  // we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = button.id;
    console.log(playRound(playerSelection, computerSelection));
  });
});