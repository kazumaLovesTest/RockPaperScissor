const results = document.querySelector('#Results');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        selectChoice(e.target.id);
    });
    
});

function selectChoice(buttonId){
    const playerSelection = buttonId.toLowerCase();
    const computerSelection = computerPlay();
    const result = playRound(computerSelection,playerSelection);
    showResult(result)
}

function showResult (result){
    const resultDiv = document.createElement('div');
    resultDiv.textContent = result;
    results.append(resultDiv);    
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
    return `You win. ${playerSelection} beats ${computerSelection}.` ;
}
function lose (playerSelection,computerSelection){
    return `You lose. ${computerSelection} beats ${playerSelection}.`;
}

