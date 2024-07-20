const choices = ["rock", "paper", "scissors"];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const scoreDisplay = document.getElementById("scoreDisplay");

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
const totalRounds = 5;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoice === computerChoice) {
    result = "IT'S A TIE!";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "paper":
        result = computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }

  if (result === "YOU WIN!") {
    playerScore++;
  } else if (result === "YOU LOSE!") {
    computerScore++;
  }

  roundCount++;
  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = result;
  resultDisplay.classList.remove("greentext", "redtext", "bluetext");
  switch (result) {
    case "YOU WIN!":
      resultDisplay.classList.add("greentext");
      break;
    case "YOU LOSE!":
      resultDisplay.classList.add("redtext");
      break;
  }

  scoreDisplay.textContent = `SCORE - Player: ${playerScore}, Computer: ${computerScore}`;

  if (roundCount === totalRounds) {
    let finalResult = "";
    resultDisplay.classList.remove("greentext", "redtext", "bluetext");
    if (playerScore > computerScore) {
      finalResult = "Overall Winner: YOU!";
      resultDisplay.classList.add("greentext");
    } else if (playerScore < computerScore) {
      finalResult = "Overall Winner: COMPUTER!";
      resultDisplay.classList.add("redtext");
    } else {
      finalResult = "Overall Result: IT'S A TIE!";
      resultDisplay.classList.add("bluetext");
    }

    resultDisplay.textContent = finalResult;
    setTimeout(resetGame, 3000);
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  roundCount = 0;
  playerDisplay.textContent = "PLAYER:";
  computerDisplay.textContent = "COMPUTER:";
  scoreDisplay.textContent = "SCORE - Player: 0, Computer: 0";
  resultDisplay.textContent = "IT'S A TIE!";
  resultDisplay.classList.remove("greentext", "redtext", "bluetext");
}
