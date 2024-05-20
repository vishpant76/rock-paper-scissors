let humanScore = 0;
let computerScore = 0;

const body = document.querySelector("body");
const selections = document.querySelector(".selections");
const runningScores = document.querySelector(".running-scores");
const finalResult = document.querySelector(".final-result");
const buttons = document.querySelectorAll(".btn");

const choices = document.querySelector(".btn-options");
let playerChoice = "";
choices.addEventListener("click", (event) => {
  const target = event.target;
  switch (true) {
    case target.classList.contains("rock"):
      playerChoice = "rock";
      playRound(playerChoice, getComputerChoice());
      break;

    case target.classList.contains("paper"):
      playerChoice = "paper";
      playRound(playerChoice, getComputerChoice());
      break;

    case target.classList.contains("scissors"):
      playerChoice = "scissors";
      playRound(playerChoice, getComputerChoice());
      break;
  }
});

function getComputerChoice() {
  const rand = Math.floor(Math.random() * 3);
  const choices = ["rock", "paper", "scissors"];
  return choices[rand];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    selections.textContent = `You both chose ${humanChoice}. It's a tie so no points!`;
    runningScores.textContent = `Your score: ${humanScore}. Computer Score: ${computerScore}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    selections.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}.`;
    humanScore++;
    runningScores.textContent = `Your score: ${humanScore}. Computer Score: ${computerScore}.`;
    checkWinner();
  } else {
    selections.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}.`;
    computerScore++;
    runningScores.textContent = `Your score: ${humanScore}. Computer Score: ${computerScore}.`;
    checkWinner();
  }
}

function checkWinner() {
  if (humanScore === 5) {
    finalResult.textContent = "You won!";
    buttons.forEach((button) => (button.disabled = true));
    resetGame();
  } else if (computerScore === 5) {
    finalResult.textContent = "You lost!";
    buttons.forEach((button) => (button.disabled = true));
    resetGame();
  }
}

function resetGame() {
  const resetBtn = document.createElement("button");
  resetBtn.textContent = "RESET";
  // resetBtn.type = "button";
  resetBtn.className = "reset-btn";
  body.appendChild(resetBtn);
  resetBtn.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    selections.textContent = "";
    runningScores.textContent = "";
    resetBtn.remove();
    finalResult.textContent = "";
    buttons.forEach((button) => (button.disabled = false));
  });
}
