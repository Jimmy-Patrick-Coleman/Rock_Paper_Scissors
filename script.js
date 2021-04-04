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


const playerSelection = computerPlay();
const computerSelection = computerPlay();
function playRound(playerSelection, computerSelection) {
    const playerSelection = computerPlay();
    const computerSelection = computerPlay();
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "Tie! You both chose Rock";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerWins++;
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerWins++;
        return "You Win! Rock beats Scissors";
    }
    
    else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Tie! You both chose Paper";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerWins++;
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerWins++;
        return "You Win! Paper beats Rock";
    }

    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "Tie! You both chose Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerWins++;
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerWins++;
        return "You Win! Scissors beats Paper";
    }
  }
 



  function game(){

    const playerSelection = computerPlay();
    const computerSelection = computerPlay();
    function playRound(playerSelection, computerSelection) {
        const playerSelection = computerPlay();
        const computerSelection = computerPlay();
        if (playerSelection === "rock" && computerSelection === "rock") {
            return "Tie! You both chose Rock";
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            computerWins++;
            return "You Lose! Paper beats Rock";
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            playerWins++;
            return "You Win! Rock beats Scissors";
        }
        
        else if (playerSelection === "paper" && computerSelection === "paper") {
            return "Tie! You both chose Paper";
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            computerWins++;
            return "You Lose! Scissors beats Paper";
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            playerWins++;
            return "You Win! Paper beats Rock";
        }
    
        else if (playerSelection === "scissors" && computerSelection === "scissors") {
            return "Tie! You both chose Scissors";
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            computerWins++;
            return "You Lose! Rock beats Scissors";
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerWins++;
            return "You Win! Scissors beats Paper";
        }
      }
     


    let playerWins = 0;
    let computerWins = 0;

    for (let rounds = 0; rounds <= 5; rounds++) {
        if (rounds < 5){
            console.log()
        }
        else if (rounds === 5) {
            if (playerWins > computerWins) {
              return 'you win';
            } else if (playerWins < computerWins) {
              return 'you lose';
            } else if (playerWins === computerWins) {
              return 'tie';
            }
          }
    }
    return playRound(playerSelection, computerSelection);
  }
  game();
  console.log(game());
  console.log(game());