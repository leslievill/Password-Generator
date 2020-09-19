// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppCase = ["A","B","C","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specChar = ["~","`", "!","@","#","$","%","^","&","*","(",")","-","_","+","="], 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//create prompt to select number of characters

//validate length of characters 8-128

//confirm for specChar, numbers, upper ,lower

//determine user choice for all four prompts one at a time

//validate user selections to determine if at least one character type was selected

//