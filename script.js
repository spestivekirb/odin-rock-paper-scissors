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

//Debug
console.log(getComputerChoice());

console.log(getHumanChoice());