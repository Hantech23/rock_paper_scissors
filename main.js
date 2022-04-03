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
    console.log("Player: " + playerScore + " Computer: " + computerScore);
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
    scoreboard();  
}
console.log('test game:');
roundPlay(rock, computerPlay());
console.log('end test');

//BUTTONS
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


body.append(rockBtn, paperBtn, scissorsBtn);

/*
const test = document.createElement('button');
test.textContent = 'Test Button';
test.addEventListener('click', )
*/