const materials = ["rock", "paper", "scissors"];

function computerPlay() {
    const randomElement = materials[Math.floor(Math.random() * materials.length)];
    return randomElement;
}

function playRound(playerSelection, computerPlay) {
    if (playerSelection.toLowerCase() === computerPlay) {
        console.log("Tie!");
    }
    else if (playerSelection.toLowerCase() == "rock" && computerPlay == "paper") {
        console.log("You lose! Paper beats rock!");
        return false;
    }
    else if (playerSelection.toLowerCase() == "rock" && computerPlay == "scissors"){
        console.log("You win! Rock beats scissors!");
        return true;
    }
    else if (playerSelection.toLowerCase() == "paper" && computerPlay == "rock"){
        console.log("You win! Paper beats rock!");
        return true;
    }
    else if (playerSelection.toLowerCase() == "paper" && computerPlay == "scissors"){
        console.log("You lose! Scissors beats paper!")
        return false;
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerPlay == "rock"){
        console.log("You lose! Rock beats scissors!")
        return false;
    }
    else {
        console.log("You win! Scissors beat paper!")
        return true;
    }
}

function game() {
    let wins = 0;
    let losses = 0;

    for (let i = 0; i < 5; i++)
    {
        const playerSelection = prompt("Rock Paper Scissors?");
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection)

        if (result == true) {
            wins++;
        }
        else if (result == false){
            losses++;
        }
    }

    if (wins > losses) {
        console.log("You won! Congratulations!");
    }
    else if (wins < losses) {
        console.log("You lost! :(");
    }
    else {
        console.log("Tie!");
    }
}
