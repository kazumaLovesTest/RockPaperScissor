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
    console.log(result);
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
    console.log(`The computer's selection: ${computerSelection}`);
    if (computerSelection === playerSelection)
        return "Tie";
    else if (computerSelection === "paper"){
        if (playerSelection === "rock")
            return "You lose. paper beats rock";
        else
            return "You Win. scissor beats paper";
    }
    else if (computerSelection === "rock"){
        if (playerSelection === "scissor")
            return "You lose. rock beats scissor";
        else
            return "You win. paper beats rock";
    }
    else{
        if (playerSelection === "paper")
            return "You lose. scissor beats paper";
        else
            return "You win. rock beats scissor";
    }   
}


