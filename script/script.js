const results = document.querySelector('#results');
const buttons = document.querySelectorAll('button');
const score = document.querySelector('#score');
let playerScore = 0;
let computerScore = 0;
play();
function play(){
    playerScore = 0;
    computerScore = 0;
    buttons.forEach((button) => {
        button.addEventListener('click', _listener);
    });
    results.textContent = '';
    score.textContent = '';
    winMessage.textContent ='';
    
}
function _listener(e){
    selectChoice(e.target.id);
}

// buttons.forEach((button) => {
//     button.addEventListener('click', _listener);
// });

function selectChoice(buttonId){
    const playerSelection = buttonId.toLowerCase();
    const computerSelection = computerPlay();
    const result = playRound(computerSelection,playerSelection);
    showResult(result);
    gameEndCheck(playerScore,computerScore);
}

function showResult (result){
    results.textContent = result; 
    score.textContent = `playerScore = ${playerScore} computerScore = ${computerScore}`;
}

function computerPlay(){
   let choice = Math.floor(Math.random() * (4 - 1) + 1);
   if (choice === 1)
    return "rock";
   else if(choice === 2)
    return "paper";
   else
    return "scissor";
}

function playRound(computerSelection,playerSelection){ 
    if (computerSelection === playerSelection)
        return "Tie";
    else if (computerSelection === "paper"){
        if (playerSelection === "rock")
            return lose(playerSelection,computerSelection);
        else
            return win(playerSelection,computerSelection);
    }
    else if (computerSelection === "rock"){
        if (playerSelection === "scissor")
            return lose(playerSelection,computerSelection);
        else
            return win(playerSelection,computerSelection);
    }
    else{
        if (playerSelection === "paper")
            return lose (playerSelection,computerSelection);
        else
            return win(playerSelection,computerSelection);
    }   
}

function win(playerSelection,computerSelection){
    updateScore(true);
    return `You win. ${playerSelection} beats ${computerSelection}.` ;
}

function lose (playerSelection,computerSelection){
    updateScore(false);
    return `You lose. ${computerSelection} beats ${playerSelection}.`;
}

function updateScore(playerWin){
    if (playerWin === true)
        playerScore++;
    else
        computerScore++; 
}

function gameEndCheck(playerScore,computerScore){
    if (playerScore === 5 || computerScore === 5){
        buttons.forEach((button)=>{
            button.removeEventListener('click',_listener);
        })
    const winMessage = document.querySelector('#winMessage');
    const playAgain = document.createElement('button');
    
    
    if (playerScore === 5)
        winMessage.textContent = "congratualations you won the game";
    else
        winMessage.textContent = "Better luck next time buddy";

    playAgain.textContent = "playagain";
    playAgain.addEventListener('click', play);
    winMessage.append(playAgain);
    
    }
    
}


