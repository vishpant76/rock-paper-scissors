// Initial version.
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
    if (humanChoice === "paper") {
      if (computerChoice === "rock") {
        alert(`You win. ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
      } else if (computerChoice === "scissors") {
        alert(`You Lose. ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
      } else {
        alert(
          `You chose ${humanChoice} and computer chose ${computerChoice}, so it's a tie.`
        );
        humanScore++;
        computerScore++;
      }
    } else if (humanChoice === "rock") {
      if (computerChoice === "paper") {
        alert(`You Lose. ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
      } else if (computerChoice === "scissors") {
        alert(`You win. ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
      } else {
        alert(
          `You chose ${humanChoice} and computer chose ${computerChoice}, so it's a tie.`
        );
        humanScore++;
        computerScore++;
      }
    } else if (humanChoice === "scissors") {
      if (computerChoice === "paper") {
        alert(`You win. ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
      } else if (computerChoice === "rock") {
        alert(`You Lose. ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
      } else {
        alert(
          `You chose ${humanChoice} and computer chose ${computerChoice}, so it's a tie.`
        );
      }
      humanScore++;
      computerScore++;
    }
  }

  for (let i = 1; i <= 5; i++) {
    alert(`Round ${i}`);
    playRound(getComputerChoice(), getHumanChoice());
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

console.log(playGame());
