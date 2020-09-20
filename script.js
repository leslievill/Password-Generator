// Assignment Code
var generateBtn = document.querySelector("#generate");

//4 Arrays
var lowCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upCase = ["A","B","C","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specChar = ["~","`", "!","@","#","$","%","^","&","*","(",")","-","_","+","="]; 
var number = [0,1,2,3,4,5,6,7,8,9];

//create prompt to select number of characters and Validate once entered
function generatePassword() {

  var confirmLength = prompt("How many characters would you like your password to be? Password must be between 8-128 characters.");
  
  confirmLength=parseInt(confirmLength);

//validate length of characters 8-128
  if(confirmLength < 8 || confirmLength > 128 || isNaN(confirmLength)) {
    
    return alert("Try entering a number between 8-128. Try again!");
    
  } 
  
//confirm for specChar, numbers, upper ,lower
  var confirmSpecChar = confirm("Click OK if you'd like to use special characters");
  var confirmNum = confirm("Click OK if you'd like to use numbers");    
  var confirmLowCase = confirm("Click OK if you'd like to use lowercase characters");
  var confirmUpCase = confirm("Click OK if you'd like to use uppercase characters");

  
// Loop if answer is outside the parameters 
  if(confirmUpCase === false && confirmLowCase === false && confirmSpecChar === false && confirmNum === false) {
    
    return alert("You must choose at least one parameter");
  
  } 
//determine user choice for all four prompts one at a time
  var userInput = [];
  var confirmPass = [];
  
  if(confirmLowCase) {
    userInput = userInput.concat(lowCase);
    
    var ranLow = Math.floor(Math.random() * lowCase.length);
    
    confirmPass += lowCase[ranLow];
  }

  if(confirmUpCase) {
    userInput = userInput.concat(upCase);
    
    var ranUp = Math.floor(Math.random() * upCase.length);
    
    confirmPass += upCase[ranUp];
  }

  if(confirmNum) {
    userInput = userInput.concat(number);
    
    var ranNumb = Math.floor(Math.random() * number.length);
    
    confirmPass += number[ranNumb];
  }

  if(confirmSpecChar) {
    userInput = userInput.concat(specChar);
   
    var ranspecChar = Math.floor(Math.random() * specChar.length);
    
    confirmPass += specChar[ranspecChar];
  }

  var newPassword = " ";
  
  newPassword = newPassword.concat(confirmPass);
  
  for (var i = 0; i < confirmLength - confirmPass.length; i++) {
    var ranNum = Math.floor(Math.random() * userInput.length);
    
    newPassword += userInput[ranNum]; 
  } 
  
  return newPassword;

}

function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");
     
  passwordText.value = password;
}

// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
