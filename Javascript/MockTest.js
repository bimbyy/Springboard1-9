//This function is a simple boolean logic flow. You are passed two boolean variables, then must return a value based off of those inputs.
//You must put the condition with two conditions first. You need to check if x & y meet their combined condition before checking them individually. 
//Otherwise, you could end up with the wrong return value.
//The rest of this code is just simple condiitonal logic, with a return statement specific to the condition. 
//You could use "if" statements in place of the "else if" statements and receive the same result. 
function logicalColors(x, y) {
    if (x === true && y === false) {
      return "Blue"
    } else if (x === true) {
      return "Red"
    } else if (y === false) {
      return "Yellow"
    } else {
      return "Purple"
    }
  }
  
  //The return value is set to 0. Assuming non-negative numbers, this will be lower than anything in the array.
  //In the for loop, you loop through the array of numbers. If any of the numbers are higher than "highest" currently stored value, highest will be reset to that value.
  //Once the array has been fully looped over, the highest value will be returned.
  function max(nums) {
    let highest = 0;
    for (let num of nums) {
      if (num > highest) {
        highest = num
      }
    }
    return highest
  }
  
  function removeNumbers(str) {
    let finalValues = []; //this is the return value
    for (let char of str) { //iterates through the input string
      let charToNum = +char //the '+' will cast the current character to an Integer if it is a number, or do nothing if it is Not a Number
      if (char === " " || isNaN(charToNum)) {// if the current character is Not a Number, or is a space...
        finalValues.push(char) //then it will be added to the return value array
      }
    }
    return finalValues.join('') //join will join every value in the array into string and return it. 
  }
  
  function onlyEvens(arr) {
    let result = []; //initialize return array
    for (let num of arr) { //iterate through the numbers in the array
      if (num % 2 === 0) { //modulo will return the remainder of the division. even numbers will divide with no remainder, so if the remainder is 0, they are even.
        result.push(num) //this will add even numbers to the return array
      }
    }
    return result; //the final returned array will have only even numbers
  }
  
  function containsEveryVowel(str) {
    let vowels = 'aeiou'; //this defines all vowels
    for (let vowel of vowels) { //this will iterate through the string of vowels
      if (str.includes(vowel) === false) {//this will check if the input string contains the current vowel
        return false //if it does not, then it returns false
      }
    }
    return true; //if it does, then it returns true
  }
  
  function vowelFrequency(str) {
    let result = {}; //initalizes a dictionary to store the result in.
    let vowels = "aeiou"; //this defines all vowels
    for (let char of str) { //this will iterate through all of the characters in the input string
      if (vowels.includes(char)) { // if it is a vowel...
        if (result[char] === undefined) { //and the vowel is not in the dictionary
          result[char] = 1 // it will be added to the dictionary, with an initialized value of one
        } else {
          result[char]++ //if it is in the dictionary, it will be incremented
        }
      }
    }
    //now, you need to convert the count in the dictionary into a return string
    let returnString = ""; //initialize an emptry string
    for (let key in result) { //iterate through the keys in the dictionary
      returnString += key + result[key] //add each  key and it's value into the return string
    }
    
    return returnString; // return the count of the vowel frequency. 
  }
