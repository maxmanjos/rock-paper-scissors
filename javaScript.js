let cWins = 0;
let pWins = 0;

let playerSelection;

function play(string) {
  playerSelection = string;
  game();
}

function getComputerChoice() {
  let rand = Math.floor(Math.random() * 3 + 1);

  switch (rand) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
  }
}
function playRound(playerSelection, computerSelection) {
  player = playerSelection.toUpperCase();
  computer = computerSelection.toUpperCase();

  if (player === computer) {
    return "Tie!";
  }

  if (player === "ROCK" && computer === "PAPER") {
    return "Computer Wins!";
  }
  if (player === "PAPER" && computer === "SCISSORS") {
    return "Computer Wins!";
  }
  if (player === "SCISSORS" && computer === "ROCK") {
    return "Computer Wins!";
  }
  if (player === "ROCK" && computer === "SCISSORS") {
    return "Player Wins!";
  }

  if (player === "PAPER" && computer === "ROCK") {
    return "Player Wins!";
  }

  if (player === "SCISSORS" && computer === "PAPER") {
    return "Player Wins!";
  }
}

function game() {
  computerSelection = getComputerChoice();
  let result = playRound(playerSelection, computerSelection);
  console.log(result);
  printResult = document.getElementById("print-result");
  printResult.innerHTML =
    "You chose " +
    playerSelection +
    "," +
    " computer chose " +
    computerSelection;
  if (pWins < 5 && cWins < 5) {
    if (result === "Player Wins!") {
      if (pWins == 4) {
        document.getElementById("pScore").innerHTML = "";
        document.getElementById("cScore").innerHTML =
          "Player has won 5 games first, Congrats!";
        cWins = 0;
        pWins = 0;
      } else {
        pWins++;
        document.getElementById("cScore").innerHTML = "Computer: " + cWins;
        document.getElementById("pScore").innerHTML = "Player: " + pWins;
      }
    }
    if (result === "Computer Wins!") {
      if (cWins == 4) {
        document.getElementById("pScore").innerHTML = "";
        document.getElementById("cScore").innerHTML =
          "Computer has won 5 games first, try again!";
        cWins = 0;
        pWins = 0;
      } else {
        cWins++;
        document.getElementById("cScore").innerHTML = "Computer: " + cWins;
        document.getElementById("pScore").innerHTML = "Player: " + pWins;
      }
    }
  }
}
