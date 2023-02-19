
// Part 1 functions
function difference (a,b) //So any number minus the other will return the difference
{
    return a-b
}
// Part 2 Functions

function Product (a,b) //Input times the other input will equal the product of both
{
    return a*b
}

// Part 3 Functions

function printDay(Num)
{
    let dates = //setting up days to be called on later depending on what number is inputed 1-7
    {
        1: "Sunday",
        2: "Monday",
        3: "Tuesday",
        4: "Wednesday",
        5: "Thursday",
        6: "Friday",
        7: "Saturday",

    };
    return dates [Num]; //return the result of what number they input
}

// Part 4 Functions

function lastElement (arr)
{
    return arr[arr.length-1];

}
// Part 5 Functions

function numberCompare (a,b)
{
    if (a===b){
        return("Numbers are equal");
    }
    else if (a>b){
        return("First is greater");
    }
        return("Second is greater");
}

// Part 6 Function

function singleLetterCount(strl,letter)
{
let count = 0;
    for(let i=0; i< strl.length; i++)
    {
        if(strl[i].toLowerCase()=== letter.toLowerCase())
        {
            count++;
        }
    }
}
// Part 7 Function

function multipleLetterCount(str)
{
    str = str.toLowerCase();
    let Obj = {};
    for(let i = 0; i<str.length; i++) //increment number till criteria is met
    {
        if(Obj[str[i]]=== undefined)
        {
            Obj[str[i]] = 1;
        }
        else
        {
            Obj[str[i]]++;
        }
    }
    return Obj;
}

//Part 8 Function

function arrayManipulation(arr, command, position, val){
    if(command === 'remove'){
      if(position === 'end'){
        return arr.pop();
      }
        return arr.shift();
    }
    else if(command === 'add'){
      if(position === 'end'){
        arr.push(val)
        return arr;
      }
      arr.unshift(val)
      return arr;
    }
  }

  //Part 9 Function

  function isPalindrome(str){
    return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
  
    for(let i =0; i<str.length/2; i++){
 if(str[i].toLowerCase() !== str[str.length-1-i].toLowerCase()){
     return false;
    }
    }
     return true;
  }

  // Part 10 Function

  function RPS(){

    function determineComputer(num){
      if(num <= .33) return "rock";
      else if(num <= .66) return "paper";
      return "scissor";
    }
  
    let userChoice = prompt("Choose rock / paper or scissor").toLowerCase();
    let computerChoice = determineComputer(Math.random());
  
  
    let answers = ["rock", "paper", "scissor"];
  
    if(!userChoice || answers.indexOf(userChoice) === -1){
      return "Please select a valid option";
    }
  
    if(userChoice === computerChoice) return "Tie!";
  
    if(userChoice === "rock" && computerChoice === "paper") {
      return "You lose, computer picked " +  computerChoice;
    }
    if(userChoice === "paper" && computerChoice === "scissor") {
      return "You lose, computer picked " +  computerChoice;
    }
    if(userChoice === "scissor" && computerChoice === "rock") {
      return "You lose, computer picked " +  computerChoice;
    }
  
    return "You win! Computer picked " +  computerChoice;
  }