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
function scoreboard(){
    return "Player: " + playerScore + " Computer: " + computerScore;
}

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
    score.textContent = scoreboard();

    if (playerScore == 3) {
        score.textContent = scoreboard() + '\r\nYou won!';
        playerScore = 0;
        computerScore = 0;
    }
    if (computerScore == 3) {
        score.textContent = scoreboard() + '\r\nYou lose :(';
        playerScore = 0;
        computerScore = 0;
    }
    
}

//UI
const body = document.querySelector('body');

const rockBtn = document.createElement('button');
rockBtn.textContent = 'Rock';
rockBtn.addEventListener('click', () => roundPlay(rock, computerPlay()));

const paperBtn = document.createElement('button');
paperBtn.textContent = 'Paper';
paperBtn.addEventListener('click', () => roundPlay(paper, computerPlay()));

const scissorsBtn = document.createElement('button');
scissorsBtn.textContent = 'Scissors';
scissorsBtn.addEventListener('click', () => roundPlay(scissors, computerPlay()));

const score = document.createElement('div');
score.textContent = scoreboard();


body.append(rockBtn, paperBtn, scissorsBtn, score);