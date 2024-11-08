const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
let textDisplay = document.getElementById("textDisplay");

rockButton.addEventListener("click", () => playGame("Rock"));
paperButton.addEventListener("click", () => playGame("Paper"));
scissorsButton.addEventListener("click", () => playGame("Scissors"));

function playGame(playerChoice) {

    const gameChoices = ["Rock", "Paper", "Scissors"];
    const computerChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];

    if (playerChoice == computerChoice) { 
        textDisplay.textContent = "The game ends in a tie!";
    } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
        textDisplay.textContent = "Rock beats scissors, you've won!";
    } else if (playerChoice == "Paper" && computerChoice == "Rock") {
        textDisplay.textContent = "Paper beats rock, you've won!";
    } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
        textDisplay.textContent = "Scissors beats paper, you've won!";
    } else {
        textDisplay.textContent = "You've lost, " + computerChoice.toLowerCase() + " beats " + playerChoice.toLowerCase() + ".";
    }
}