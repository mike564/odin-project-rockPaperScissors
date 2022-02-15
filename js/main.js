
/*********************************************
CODE FLOW:

On user Click start button: startGame() -> updateScoreUI() + updateMessage() + updateIMG()*2

Upon clciking any rps button: userPlay() ->updateIMG() -> updateScore(evaluateRound(playerSelection,computerPlay()) START CALLBACK: computerPlay() -> updateIMG() -> evaulateRound -> updateMessage()] END CALLBACK -> updateScore() -> (score == 5)? resetGame() + declareWinner() -> updateMessage() : updateScoreUI + wait for next userPlay()

*********************************************/

function startGame(){
    console.clear();
    startButton.disabled=true;
    round = 1;
    playerScore = 0;
    computerScore = 0;
    updateScoreUI();
    updateMessage(null,null,'reset')
    updateIMG(userDisplay,"blank_user");
    updateIMG(computerDisplay,"computer");
    rpsButtons.forEach(function(thisObj){
        thisObj.disabled=false;
        thisObj.querySelector('img').classList.remove('dim');
        }
    )
}

function updateScoreUI(){
    scoreUI.forEach(function(thisObj){
        if(thisObj.classList.item(1)=='player'){
            thisObj.textContent = playerScore;
        }
        else{
            thisObj.textContent = computerScore;
        }
        }
    )
    roundUI.textContent = String(round);  
}

function updateMessage(playerSelection,computerSelection,result){

    if (result=='reset'){
        messageUI.textContent='BEGIN GAME! First to 5 wins the game';
        return;
    }

    if(result=='finish'){
        messageUI.textContent="Press start to play again";
        return;
    }

    if(result=='win'){
        messageUI.textContent = 'You win! ' + playerSelection + " beats " + computerSelection + ".";
    }
    
    else if(result=='draw'){
        messageUI.textContent = "Draw. You both chose " + playerSelection;
    }

    else{
        messageUI.textContent = 'You lose...' + computerSelection + " beats " + playerSelection + ".";
    }
    console.log(messageUI.textContent);
}


function updateIMG(player,img){
    player.src = "./images/"+img+".png";
}


//Stores user's button selection
function userPlay(e){
    
    console.log("Round " + round + ":");
    let playerSelection = this.classList.item(1);
    console.log("Player selected: " + playerSelection);
    updateIMG(userDisplay,playerSelection);
    updateScore(evaluateRound(playerSelection,computerPlay()));
}


//Random generation of computer's selection of rock, paper, or scissors
function computerPlay(){
    const rpsArray = ["Rock","Paper","Scissors"];
    let computerSelection = rpsArray[Math.floor(Math.random()*3)];
    updateIMG(computerDisplay,computerSelection);
    return computerSelection;
}


//Evaluates winner depeinding on user's selection and computer's selection. Returns and prints result
function evaluateRound(playerSelection,computerSelection){

    console.log("Opponent selected: " + computerSelection);
    let result;
    //RegExps carried over from console version, but not needed
    if ((/Rock/i.test(playerSelection) && /Scissors/i.test(computerSelection))
        ||(/Scissors/i.test(playerSelection) && /Paper/i.test(computerSelection))
        ||(/Paper/i.test(playerSelection) && /Rock/i.test(computerSelection))
        ){
        result = "win";
    }

    else if (playerSelection.toUpperCase()==computerSelection.toUpperCase()){
        result = "draw";
    }

    else{
        console.log()
        result = "lose"
    }

    updateMessage(playerSelection,computerSelection,result);
    return result;
}

function updateScore(result){
    round++;
    if (result == "win"){
        playerScore++;
    }

    if (result == "lose"){
        computerScore++
    }
    
    updateScoreUI();
    console.log("Your Score: " + playerScore +" Computer's Score: " + computerScore)

    if(playerScore==5 || computerScore==5){
        resetGame()
        setTimeout(declareWinner,1200,playerScore,computerScore);
    }
    
}

function resetGame(){
    rpsButtons.forEach(function(thisObj){
        thisObj.disabled=true;
        thisObj.querySelector('img').classList.add('dim');
        }
    ) 
    
    setTimeout(function(){startButton.disabled = false},1200);
}

function declareWinner(playerScore,computerScore){
    if(playerScore>computerScore){
        roundUI.textContent="You reached 5 points! You won the game!";   
    }

    else{
        roundUI.textContent="Opponent reached 5 points. You lost the game.";   
    }

    updateMessage(null,null,"finish")
    console.log(roundUI.textContent)
}

//GLOBAL VARIABLES
let round;
let playerScore;
let computerScore;


//OBJECTS
const rpsButtons = document.querySelectorAll('.rps-btn');
const startButton = document.querySelector('.start-btn');
const userDisplay = document.querySelector(".user-disp")
const computerDisplay = document.querySelector(".computer-disp")
const scoreUI = document.querySelectorAll('.score-cont');
const roundUI = document.querySelector('.round-cont');
const messageUI = document.querySelector('.message-box');


//EVENT LISTNERS
startButton.addEventListener('click',startGame); 
rpsButtons.forEach(function(thisObj){

    thisObj.addEventListener('click',userPlay)
    }
)







