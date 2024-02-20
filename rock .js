//create a function named getUserChoice that takes a single parameter userInput.
const  getUserChoice = userInput=>
{
  // Since a user can pass in a parameter, such as ‘Rock’ or ‘rock’ with different capitalizations, begin by utilizing JavaScript’s toLowerCase() function to make the userInput all lowercase.
userInput=userInput.toLowerCase();
//When getting the user’s choice, you should also check to make sure that the user typed a valid choice: ‘rock’, ‘paper’, or ‘scissors’.
if(userInput==='rock' || userInput==='paper' ||userInput==='scissors' || userInput==='bomb')
{
return userInput
}
else{
  return ("Error!");
}
}
/*console.log(getUserChoice('paper'))
console.log(getUserChoice('anny'))
console.log(getUserChoice('ROCK'))*/
//Now we need to have the computer make a choice
const getComputerChoice=()=>
{
  let randomNum=Math.floor(Math.random()*3) 
  console.log(randomNum)
  switch(randomNum) 
  {
    case 0:
        return 'rock';
        break;
        case 1:
            return 'paper'
            break;
            case 2:
                return 'scissors'
                break;
                default:
                    return 'Error'
                    break;
  }
}
//console.log(getComputerChoice())
//Now it’s time to determine a winner.
const determineWinner=function(userChoice,computerChoice)
{
  if(userChoice===computerChoice)
  {
    return 'The game is tie'}
 else if(userChoice==='bomb') 
 { return 'users won'}

else{
if(userChoice==='rock')
{
  if(computerChoice==='paper')
  {
    return 'computer won'
  }
  else{ return 'you won'}
}
if (userChoice==='paper')
{
  if(computerChoice==='scissor')
  {return 'computer won'}
  else
  {return 'you won'}
}
if(userChoice==='scissor')
{
  if(computerChoice==='rock')
  {return 'computer won'}
  else{return 'you win'}
}
}}

//If the game is not a tie, you’ll need to determine a winner.
/*checking working of determineWinner function 
console.log(determineWinner('scissor','rock'))
console.log(determineWinner('paper','scissor'))
console.log(determineWinner('rock','scissor'))*/
//Everything is set up. Now you need to start the game and log the results. Create a function named playGame.
const playGame=()=>
{
  let userChoice=getUserChoice('bomb')
  let computerChoice=getComputerChoice()
  console.log('you threw:'+userChoice)
  console.log('computer threw:'+computerChoice)
  console.log(determineWinner(userChoice,computerChoice))
}
playGame();
//Finally, let’s determine who won
