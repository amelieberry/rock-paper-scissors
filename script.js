let tools = ["rock","paper","scissors"];
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;
window.devicePixelRatio = 1;

// computerPlay function to randomly return rock/paper/scissors
function computerPlay() {
    let randTools = tools[Math.floor(Math.random() * tools.length)];
    return randTools.toLowerCase();
}
// Play round of Rock Paper Scissors
function playRound(playerSelection) {
    // Count and display number of rounds
    roundNumber += 1;
    document.getElementById("roundNumber").innerHTML = roundNumber + " of 5";

    // Select for Computer
    let computerSelection = computerPlay();

    // Assign images based on choices
    document.getElementById("playerChoice").innerHTML = "<img class='innerImages' src=images/" + playerSelection + ".png>";
    document.getElementById("vs").innerHTML = "<h2>VS</h2>";
    document.getElementById("computerChoice").innerHTML = "<img class='innerImages' src=images/" + computerSelection + ".png>";

    // assess if tie/win/lose based on both choices per round and add to score counter
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

    // when 5 rounds played, end game and announce winner
    if (roundNumber == 5) {
        if(playerScore > computerScore) {
            document.getElementById("finalResult").innerHTML = "You have WON THE GAME!";
        } else if (playerScore < computerScore) {
            document.getElementById("finalResult").innerHTML = "You have LOST THE GAME!";
        } else {
            document.getElementById("finalResult").innerHTML = "You have TIED THE GAME!";
        }
        // remove choice buttons and add replay buttons    
        document.getElementById("rps-btns").classList.add("btns-visibility");
        document.getElementById("replay-btn").classList.remove("btns-visibility");
    }
}

function resetBoard() {
    // Reset counters
    computerScore = 0;
    playerScore = 0;
    roundNumber = 0;  
    // Toggle buttons visibility
    document.getElementById("rps-btns").classList.remove("btns-visibility");
    document.getElementById("replay-btn").classList.add("btns-visibility");
    // Reset roundNumber
    document.getElementById("roundNumber").innerHTML = roundNumber + " of 5";
    // Reset scoreBoard
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
    // Reset choices
    document.getElementById("playerChoice").innerHTML = "";
    document.getElementById("vs").innerHTML = "";
    document.getElementById("computerChoice").innerHTML = "";
    // Reset callouts
    document.getElementById("finalResult").innerHTML = "";
    document.getElementById("result").innerHTML = "";
}
