// Function that returns a randomly chosen choice.
function getComputerChoice() {
  const rand = Math.floor(Math.random() * 3);
  // console.log(rand);
  const choices = ["rock", "paper", "scissors"];
  return choices[rand];
}

// Function that returns the choice entered by the user in the input prompt. If the user enters an invalid input, they are prompted to renter until the input matches one of the valid options. If the input is not in lowercase, it is still accepted, but the function converts it to lowercase while returning.

function getHumanChoice() {
  const choices = ["rock", "paper", "scissors"];
  while (true) {
    const choice = prompt("Enter your choice: rock, paper, or scissors.");
    const choiceLower = choice.toLowerCase();
    for (c of choices) {
      if (c === choiceLower) {
        return c;
      }
    }
    alert("Invalid Input. Try again.");
  }
}

// This is the function containing the game logic. Inside this function, playRound() function will be called 5 times since our game is designed to play 5 rounds.
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // The playRound() function is a nested function inside playGame(). This contains the actual logic behind the winner/loser based on their respective choices.
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      alert(`You both chose ${humanChoice}, so it's a tie.`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
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
  // Play the game 5 times.
  for (let i = 1; i <= 5; i++) {
    alert(`Round ${i}. Get Ready!`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    alert(`Your score: ${humanScore}. Computer score: ${computerScore}.`);
  }
  if (humanScore > computerScore) {
    alert("You Won the game!");
  } else if (humanScore < computerScore) {
    alert("You lost the game!!");
  } else {
    alert("Too bad, the game was a tie...");
  }
}

playGame();