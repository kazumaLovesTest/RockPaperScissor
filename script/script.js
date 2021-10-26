function computerPlay(){
   const choice = Math.floor(Math.random() * (4 - 1) + 1);
   console.log(choice);
   if (choice === 1)
    return "rock";
   else if(choice === 2)
    return "paper";
   else
    return "scissor"; 
}
