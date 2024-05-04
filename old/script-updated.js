// Version 2 after some refactoring...
const getComputerChoice = function () {
  let rand = Math.floor(Math.random() * 3);
  // console.log(rand);
  if (rand === 0) {
    return "rock";
  } else if (rand === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

// let check = getComputerChoice();
// console.log(check);
const getHumanChoice = function () {
  const possibleChoices = ["rock", "paper", "scissors"];
  while (true) {
    let choice = prompt(
      "Enter your choice: rock, paper, or scissors."
    ).toLowerCase();
    for (let c of possibleChoices) {
      if (choice === c) {
        return choice;
      }
    }
    alert("Invalid Input! Enter again.");
  }
};

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(computerChoice, humanChoice) {
    if (humanChoice === computerChoice) {
      `It's a tie. Both chose ${humanChoice}`;
    } else if (
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      alert(
        `You chose ${humanChoice}. Computer chose ${computerChoice}. You win.`
      );
      humanScore++;
    } else {
      alert(
        `You chose ${humanChoice}. Computer chose ${computerChoice}. You lose.`
      );
      computerScore++;
    }
  }

  for (let i = 1; i <= 5; i++) {
    alert(`Round ${i}`);
    // playRound(getComputerChoice(), getHumanChoice());
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    playRound(computerChoice, humanChoice);
    alert(`Your Score: ${humanScore}. Computer Score: ${computerScore}`);
  }

  if (humanScore > computerScore) {
    alert("You Won the game!");
  } else if (humanScore < computerScore) {
    alert("You Lost the game!");
  } else {
    alert("The game was a tie!");
  }
}

playGame();
// console.log(playGame());
