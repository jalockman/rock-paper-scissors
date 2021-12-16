function computerPlay() {
    let computerPlay = Math.floor(Math.random()*3);
    switch (computerPlay) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function filterValidInput(playerInput) {
    const validInputs = ["Rock", "Paper", "Scissors", "Gun"];
    let filteredInput = playerInput[0].toUpperCase() + playerInput.slice(1).toLowerCase();

    if (validInputs.includes(filteredInput)) {
        return filteredInput;
    } else {
        return "invalid";
    }
}

function playRound(playerInput, computerSelection) {
    let playerSelection = filterValidInput(playerInput);

    if (playerSelection === "invalid") {
        console.log("Invalid input, please try again.");
        return "invalid";
    } else if (playerSelection === computerSelection) {
        console.log("It's a tie!");
        return "tie";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log("You win! Rock beats Scissors!");
        return "player win";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log("You win! Scissors beats Paper!");
        return "player win";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("You win! Paper beats Rock!");
        return "player win";
    } else if (playerSelection === "Gun") {
        console.log(`You win! Gun beats ${computerSelection}!`);
        return "player win";
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return "computer win";
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;

    for (let i=1; i<=5; i++) {
        console.log(i);
        let roundResult = playRound(prompt("What's your play?"), computerPlay());
        switch (roundResult) {
            case "invalid":
                i--;
                break;
            case "player win":
                playerWins++;
                break;
            case "computer win":
                computerWins++;
                break;
            case "tie":
                break;
            }   
        }

    console.log(`You won ${playerWins} times. The computer won ${computerWins} times.`)
    if (playerWins === computerWins) {
        console.log("It's a tie overall, nobody wins :(");
    } else if (playerWins > computerWins) {
        console.log("You win the game!");
    } else {
        console.log("You lose the game :,(")
    }
}

game();