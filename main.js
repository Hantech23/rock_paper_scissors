let playerScore = 0;
let botScore = 0;
let r = 'r';
let p  = 'p';
let s = 's';
let array = [r, p, s];

console.log('Game Start')
scoreboard()


while (true) {
    //This is the rng for the bot's move
    let botMove = array[Math.floor(Math.random() * 3)];
    console.log(botMove)

    //user input
    let playerMove = prompt();
    console.log(playerMove)


    switch (playerMove) {
        case r:
            if (botMove == p) {
                botScore++;
            }
            else if (botMove == s) {
                playerScore++;
            }
            break;
        case p:
            if (botMove == r) {
                playerScore++;
            }
            else if (botMove == s) {
                botScore++;
            }
            break;
        case s:
            if (botMove == r) {
                botScore++;
            }
            else if (botMove == p) {
                playerScore++;
            }
            break;
        default:
            console.log('wtf just happened')
            break;
    }
    scoreboard()
    if(playerScore == 3) {
        console.log('You won')
        break;
    }
    if(botScore == 3) {
        console.log('You lose')
        break;
    }
}

function scoreboard(){
    console.log("player: " + playerScore + " bot: " + botScore)
}