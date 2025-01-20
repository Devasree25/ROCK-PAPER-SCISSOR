const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const winsDisplay = document.getElementById('wins');
const lossesDisplay = document.getElementById('losses');
const tiesDisplay = document.getElementById('ties');

let userChoice;
let computerChoice;
let result;
let wins = 0;
let losses = 0;
let ties = 0;

// Load sound effects
const winSound = new Audio('./assets/win.mp3.wav');     // Replace with the path to your win sound file
const loseSound = new Audio('./assets/lose.mp3.mp3');   // Replace with the path to your lose sound file
const drawSound = new Audio('./assets/preview.mp3');   // Replace with the path to your draw sound file

possibleChoices.forEach(possibleChoice => 
  possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
    updateScoreboard();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; 
  if (randomNumber === 1) {
    computerChoice = 'rock';
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors';
  }
  if (randomNumber === 3) {
    computerChoice = 'paper';
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'It\'s a draw!';
    drawSound.play(); // Play draw sound
    ties++;
  } else if (
    (computerChoice === 'rock' && userChoice === 'paper') ||
    (computerChoice === 'paper' && userChoice === 'scissors') ||
    (computerChoice === 'scissors' && userChoice === 'rock')
  ) {
    result = 'You win!';
    winSound.play(); // Play win sound
    wins++;
  } else {
    result = 'You lose!';
    loseSound.play(); // Play lose sound
    losses++;
  }
  resultDisplay.innerHTML = `You chose <strong>${userChoice}</strong>. The computer chose <strong>${computerChoice}</strong>. ${result}`;
}

function updateScoreboard() {
  winsDisplay.innerText = wins;
  lossesDisplay.innerText = losses;
  tiesDisplay.innerText = ties;
}
