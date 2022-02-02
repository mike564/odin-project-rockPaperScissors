//Random generation of computer's selection of rock, paper, or scissors
function computerPlay(){
    const rpsArray = ["Rock","Paper","Scissors"];
    let computerSelection = rpsArray[Math.floor(Math.random()*3)]
    return computerSelection;
}

//Prompt for user to enter their selection of rock, paper, or scissors. Checks whether user has typed correctly
function userPlay(){
    let playerSelection;
    //Using RegExp to make case insensitive
    while(!(/Rock/i.test(playerSelection) || /Paper/i.test(playerSelection) || /Scissors/i.test(playerSelection))){
        playerSelection = prompt('Enter "Rock", "Paper", or "Scissors": ');
        if(!(/Rock/i.test(playerSelection) || /Paper/i.test(playerSelection) || /Scissors/i.test(playerSelection))){
            alert('Please type either "Rock","Paper","Scissors".')
        }
    }
    return playerSelection;
}

//Evaluates winner depeinding on user's selection and computer's selection. Returns and prints result
function playRound(playerSelection,computerSelection){
    console.log(playerSelection);
    console.log(computerSelection);
    //Using RegExp to make case insensitive
    if (/Rock/i.test(playerSelection) && /Scissors/i.test(computerSelection)){
        //playerSelection[0].toUpperCase() + playerSelection.slice(1,playerSelection.length) makes first letter capitalized at output, regardless of how user entered their selection
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

//Execute the game, calling playRound() five times. Result of each round is returned by playRound() into "result" and adds to player's respective score. Player with highest score wins.
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
        alert("You have won the match!");
        console.log("You have won the match!")
    }
    else if(playerScore<computerScore){
        alert("You have lost the match.");
        console.log("You have lost the match.")
    }
    else{
        alert("The match has ended in a tie.")
        console.log("The match has ended in a tie.")
    }
}

//Exceute game at start
alert("Press ctrl+shift+J to see game status in console");
game()


