
function computerPlay(){
    const rpsArray = ["Rock","Paper","Scissors"];
    let computerSelection = rpsArray[Math.floor(Math.random()*3)]
    return computerSelection;
}


function userPlay(){
    let playerSelection;
    while(!(/Rock/i.test(playerSelection) || /Paper/i.test(playerSelection) || /Scissors/i.test(playerSelection))){
        playerSelection = prompt('Enter "Rock", "Paper", or "Scissors": ');
        if(!(/Rock/i.test(playerSelection) || /Paper/i.test(playerSelection) || /Scissors/i.test(playerSelection))){
            alert('Please type either "Rock","Paper","Scissors".')
        }
    }
    return playerSelection;
}

function playRound(playerSelection,computerSelection){
    console.log(playerSelection);
    console.log(computerSelection);

    if (/Rock/i.test(playerSelection) && /Scissors/i.test(computerSelection)){
        console.log('You win! ' + playerSelection[0].toUpperCase() + playerSelection.slice(1,playerSelection.length) + " beats " + computerSelection + ".");
        return "player wins";
    }
    else if (/Scissors/i.test(playerSelection) && /Paper/i.test(computerSelection)){
        console.log('You win!' + playerSelection[0].toUpperCase() + playerSelection.slice(1,playerSelection.length) + " beats " + computerSelection + ".");
        return "player wins";
    }
    else if (/Paper/i.test(playerSelection) && /Rock/i.test(computerSelection)){
        console.log('You win!' + playerSelection[0].toUpperCase() + playerSelection.slice(1,playerSelection.length) + " beats " + computerSelection + ".");
        return "player wins";
    }
    else if (playerSelection.toUpperCase()==computerSelection.toUpperCase()){
        console.log("Draw. You both chose " + playerSelection[0].toUpperCase() + playerSelection.slice(1,playerSelection.length));
        return "draw";
    }
    else{
        console.log('You lose...' + computerSelection + " beats " + playerSelection[0].toUpperCase() + playerSelection.slice(1,playerSelection.length) + ".")
        return "player loses";
    }
}

function game(){
    let round = 1;
    let playerScore = 0;
    let computerScore = 0;
    let result;
    while(round<=5){
        console.log("Round " + round + ":");
        result = playRound(userPlay(),computerPlay());

        if (result == "player wins"){
            playerScore++;
        }

        if (result == "player loses"){
            computerScore++
        }
        round++
        console.log("Your Score: " + playerScore +" Computer's Score: " + computerScore)
    }
    if(playerScore>computerScore){
        console.log("You have won the match!");
    }
    else if(playerScore<computerScore){
        console.log("You have lost the match.");
    }
    else{
        console.log("The match has ended in a tie.")
    }
}

game()


