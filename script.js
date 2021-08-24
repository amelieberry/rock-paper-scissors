// computerPlay function to randomly return rock/paper/scissors
let tools = ["rock","paper","scissors"];
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

function computerPlay() {
    let randTools = tools[Math.floor(Math.random() * tools.length)];
    return randTools.toLowerCase();
}

function playRound(playerSelection) {
    roundNumber += 1;
    document.getElementById("roundNumber").innerHTML = roundNumber;
    let computerSelection = computerPlay();

    if (roundNumber == 1) {
        document.getElementById("finalResult").innerHTML = "";
    }

    document.getElementById("playerChoice").innerHTML = "<img class='innerImages' src=images/" + playerSelection + ".png>";
    document.getElementById("computerChoice").innerHTML = "<img class='innerImages' src=images/" + computerSelection + ".png>";

    if(computerSelection == playerSelection) {
        document.getElementById("result").innerHTML = "We have a tie";
    } else {
        switch (playerSelection) {
            case "rock":
                if(computerSelection == "scissors") {
                    document.getElementById("result").innerHTML = "You Win! Rock beats Scissors";
                    playerScore += 1;
                    document.getElementById("playerScore").innerHTML = playerScore;
                } else {
                    document.getElementById("result").innerHTML = "You Lose! Paper beats Rock";
                    computerScore += 1;
                    document.getElementById("computerScore").innerHTML = computerScore;
                }   
                break;
            case "scissors":    
                if(computerSelection == "paper") {
                    document.getElementById("result").innerHTML = "You Win! Scissors beats Paper";
                    playerScore += 1;
                    document.getElementById("playerScore").innerHTML = playerScore;
                } else {
                    document.getElementById("result").innerHTML = "You Lose! Rock beats Scissors";
                    computerScore += 1;
                    document.getElementById("computerScore").innerHTML = computerScore;
                } 
                break;
            case "paper":
                if(computerSelection == "rock") {
                    document.getElementById("result").innerHTML = "You Win! Paper beats Rock";
                    playerScore += 1;
                    document.getElementById("playerScore").innerHTML = playerScore;
                } else {
                    document.getElementById("result").innerHTML = "You Lose! Scissors beats Paper";
                    computerScore += 1;
                    document.getElementById("computerScore").innerHTML = computerScore;
                } 
            default:
                break;
        }
    }


    if (roundNumber == 5) {
        if(playerScore > computerScore) {
            document.getElementById("finalResult").innerHTML = "You have WON THE GAME!";
        } else if (playerScore < computerScore) {
            document.getElementById("finalResult").innerHTML = "You have LOST THE GAME!";
        } else {
            document.getElementById("finalResult").innerHTML = "You have TIED THE GAME!";
        }
        computerScore = 0;
        playerScore = 0;
        roundNumber = 0;    
    }
}