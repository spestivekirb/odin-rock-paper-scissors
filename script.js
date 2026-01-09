// Step 2: Computer choice logic:

// Generate a random number [0, 1)
// Multiply number by 3
// IF number range [0, 1) return "rock"
// ELSE IF number range [1, 2) return "paper"
// ELSE return "scissors"

function getComputerChoice() {
    const random = Math.random() * 3;
    if (random < 1) {
        return "rock";
    } else if (random < 2) {
        return "paper";
    } else {
        return "scissors";
    }
}


// Step 3: Human choice logic:

// CALL prompt to receive human choice, between rock, paper, scissors.
// Return the choice.

function getHumanChoice() {
    let choice = prompt("Please enter your choice: 'rock', 'paper' or 'scissors'?");
    return choice.toLowerCase();
}




// Step 6: Full game code:

// Step 4 and 5 code moved in here

function playGame() {
    // Step 4: Score variables: Global and init to 0

    let humanScore = 0;
    let computerScore = 0;

    // Step 5: Single round logic:

    // Compare humanChoice and comptuerChoice.
    // IF humanChoice == X, THEN either WIN, DRAW, TIE.
    // IF win, 'You win! ${humanChoice} beats ${computerChoice}'
    // ditto for lose but invert order at end.
    // For tie, say 'Tie! The computer also chose ${computerChoice}'


    function playRound(humanChoice, computerChoice) {
        let result;
        switch(humanChoice) {
            
            case "rock":    
                switch(computerChoice) {
                    case "rock":
                        result = "tie";
                        break;
                    case "paper":
                        result = "lose";
                        break;
                    case "scissors":
                        result = "win";
                        break;
                }

                break;
            case "paper":
                    switch(computerChoice) {
                    case "rock":
                        result = "win";
                        break;
                    case "paper":
                        result = "tie";
                        break;
                    case "scissors":
                        result = "lose";
                        break;
                    }
                break;

            case "scissors":
                    switch(computerChoice) {
                    case "rock":
                        result = "lose";
                        break;
                    case "paper":
                        result = "win";
                        break;
                    case "scissors":
                        result = "tie";
                        break;
                break;
            }

        }



        if (result == "win") {
            console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
            humanScore++;
        } else if (result == "lose") {
            console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
            computerScore++;
        } else {
            console.log(`Tie! The computer also chose ${computerChoice}`);
        }
    }


// FOR i in range 5
//  Run round
//  Display current score
// ENDFOR
// Declare winner.

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Your score: ${humanScore}. Computer score: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log ("You lose the game!");
    } else {
        console.log("It's a tie!");
    }


}



//Debug
//console.log(getComputerChoice());

//console.log(getHumanChoice());

//console.log(playRound(getHumanChoice(), getComputerChoice()), humanScore, computerScore);