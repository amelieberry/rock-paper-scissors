// computerPlay function to randomly return rock/paper/scissors
let tools = ["rock","paper","scissors"];


function computerPlay() {
    let randTools = tools[Math.floor(Math.random() * tools.length)];
    return randTools.toLowerCase();
}

// playRound function takes 2 paramenters:
// playerSelection and computerSelection
// then returns string that declares winner of the round
function playRound() {
    let playerSelection = '';
// Make sure player inputs correct string, keep prompting if not.
    while(tools.includes(playerSelection) != true) {
        playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    }
    let computerSelection = computerPlay();

    console.log("Computer got: " + computerSelection);
    console.log("Player Got: " + playerSelection);
// check if tie, else check for winner of round
    if (playerSelection == computerSelection) {
        alert("We have a tie");
        return 0;
    } else {
        switch (playerSelection) {
            case "rock":
                if(computerSelection == "scissors") {
                    alert("You Win! Rock beats Scissors");
                    return 1;
                } else {
                    alert("You Lose! Paper beats Rock");
                    return -1;
                }    
                break;
            case "scissors":
                if(computerSelection == "paper") {
                    alert("You Win! Scissors beats Paper");
                    return 1;
                } else {
                    alert("You Lose! Rock beats Scissors");
                    return -1;
                }
                break;
            case "paper":
                if(computerSelection == "rock") {
                    alert("You Win! Paper beats Rock");
                    return 1;
                } else {
                    alert("You Lose! Scissors beats Paper");
                    return -1;
                }
            default:
                break;
        }
    }   
}
// the game() function keeps score of 5 rounds and declares final winner
function game() {
    let totalWins = 0;
    for(let i = 0; i < 5; i++) {
        let wins = playRound();
        totalWins = totalWins + wins;
        console.log(i);
    }
    console.log("WinsIndex: " + totalWins);
    if(totalWins > 0) {
        alert("You have WON the game!");
    } else if(totalWins == 0) {
        alert("You have tied the game!");
    } else {
        alert("You have lost the game!");
    }
}

game();
