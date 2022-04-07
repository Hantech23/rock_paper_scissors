//VARIABLES
let rock = 'rock';
let paper = 'paper';
let scissors = 'scissors';

//COMPUTER PLAY
let array = [rock, paper, scissors];
function computerPlay() {
    return array[Math.floor(Math.random() * 3)];
}

//SCOREBOARD
let playerScore = 0;
let computerScore = 0;

//ROUND PLAY
function roundPlay(playerSelection, computerSelection) {    
    switch (playerSelection) {
        case rock:
            if (computerSelection == paper) {
                computerScore++;
            }
            else if (computerSelection == scissors) {
                playerScore++;
            }
            break;
        case paper:
            if (computerSelection == rock) {
                playerScore++;
            }
            else if (computerSelection == scissors) {
                computerScore++;
            }
            break;
        case scissors:
            if (computerSelection == rock) {
                computerScore++;
            }
            else if (computerSelection == paper) {
                playerScore++;
            }
            break;
    }
    scoreLeft.textContent = playerScore;
    scoreRight.textContent = computerScore;

    if (playerScore == 3) {
        playerScore = 0;
        computerScore = 0;
    }
    if (computerScore == 3) {
        playerScore = 0;
        computerScore = 0;
    }
}

//UI

//BUTTONS
const buttons = document.querySelector('.buttons');

const rockBtn = document.createElement('button');
rockBtn.textContent = 'Rock';
rockBtn.addEventListener('click', () => roundPlay(rock, computerPlay()));
rockBtn.setAttribute('style', 'color: greenyellow; font-size: 1.1vw; background-color: rgba(1, 1, 27, 0.788); border-radius: 15px;')

const paperBtn = document.createElement('button');
paperBtn.textContent = 'Paper';
paperBtn.addEventListener('click', () => roundPlay(paper, computerPlay()));
paperBtn.setAttribute('style', 'color: greenyellow; font-size: 1.1vw; background-color: rgba(1, 1, 27, 0.788); border-radius: 15px;')

const scissorsBtn = document.createElement('button');
scissorsBtn.textContent = 'Scissors';
scissorsBtn.addEventListener('click', () => roundPlay(scissors, computerPlay()));
scissorsBtn.setAttribute('style', 'color: greenyellow; font-size: 1.1vw; background-color: rgba(1, 1, 27, 0.788); border-radius: 15px;')

buttons.append(rockBtn, paperBtn, scissorsBtn);

//SCOREBOARD
const scoreLeft = document.querySelector('.score-left');
scoreLeft.textContent = playerScore;
scoreLeft.setAttribute('style', 'color: greenyellow');

const scoreRight = document.querySelector('.score-right');
scoreRight.textContent = computerScore;
scoreRight.setAttribute('style', 'color: greenyellow');