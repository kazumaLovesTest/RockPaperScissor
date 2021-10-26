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
    
    console.log(computerSelection);
    if (computerSelection === "rock" && playerSelection === "rock"){
        console.log("tie");
    }
    else if (computerSelection == "paper" && playerSelection === "rock"){
        console.log("You lose. paper beats rock");
    }
    else
        console.log("You win. rock beats scissor");;
}
const playerSelection = "rock";
let computerSelection = computerPlay();
playRound(computerSelection,playerSelection);