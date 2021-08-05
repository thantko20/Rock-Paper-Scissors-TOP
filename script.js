const materials = ["rock", "paper", "scissors"];

const pcChoice = document.getElementById('pc');

const container = document.getElementById('container');
const gameContainer = document.querySelector('.choices');

const roundResult = document.getElementById('roundResult');
const finalResult = document.getElementById('finalResult');
const scores = document.getElementById('scores');
const roundCount = document.getElementById('roundCount');

const buttons = document.querySelectorAll('.buttons');

const playButton = document.createElement('div');

// Execute the game
game(buttons);

function computerPlay() {
    const randomElement = materials[Math.floor(Math.random() * materials.length)];
    return randomElement;
}

function playRound(playerSelection, computerPlay) {
    if (playerSelection.toLowerCase() === computerPlay) {
        roundResult.textContent = "Tie!";
    }
    else if (playerSelection.toLowerCase() == "rock" && computerPlay == "paper") {
        roundResult.textContent = "You lose! Paper beats rock!";
        return false;
    }
    else if (playerSelection.toLowerCase() == "rock" && computerPlay == "scissors"){
        roundResult.textContent = "You win! Rock beats scissors!";
        return true;
    }
    else if (playerSelection.toLowerCase() == "paper" && computerPlay == "rock"){
        roundResult.textContent = "You win! Paper beats rock!";
        return true;
    }
    else if (playerSelection.toLowerCase() == "paper" && computerPlay == "scissors"){
        roundResult.textContent = "You lose! Scissors beats paper!";
        return false;
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerPlay == "rock"){
        roundResult.textContent = "You lose! Rock beats scissors!";
        return false;
    }
    else {
        roundResult.textContent = "You win! Scissors beat paper!";
        return true;
    }
}

// Getting user input and play the game
function game(buttons) {
    let win = 0;
    let loss = 0;
    let count = 1;

    roundCount.textContent = count;

    buttons.forEach(choice => {
        /* Listen for user's desired button click and increment the count
        After round count, game is over.*/
        choice.addEventListener('click', () => {
            count++;
            roundCount.textContent = count;

            const computerSelection = computerPlay();
            const result = playRound(choice.value, computerSelection);

            if (result == true){
                roundResult.style.color = 'green';
                win++;
            }
            else if (result === false){
                roundResult.style.color = 'red';
                loss++;
            }
            else roundResult.style.color = 'blue';
            // Display scores
            scores.textContent = `You: ${win} | Computer: ${loss}`;
            // Display computer's choice
            pcChoice.textContent = computerSelection.toUpperCase();
            
            while(win == 5 || loss == 5){
                if (win == 5){
                    roundCount.textContent = '';                   
                    finalResult.innerHTML = 'You won! Congratulations!&#129395;';
                }
                else if(loss == 5) {
                    finalResult.innerHTML = 'You lost!&#128553;';
                }

                // If game is over, remove the controls.
                gameContainer.remove();
                // Play again button
                playButton.innerHTML = "<a id='again' href='#' onclick='location.reload()'>Play again</a>"
                container.appendChild(playButton);
                break;
            }
        })
    });
}
