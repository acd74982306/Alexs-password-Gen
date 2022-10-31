// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var userInput = window.prompt("Choose password length: 8-128 characters");

  userInput = Number(userInput);

  // Test and reprompt user if password length is an invalid value
  while (isNaN(userInput) || userInput < 8 || userInput > 128) {
    userInput = window.prompt("Please enter a valid number between 8 and 128")
    userInput = Number(userInput);
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
