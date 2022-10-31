// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var userInput = window.prompt("Choose password length between 8 & 128 characters");
  var passwordLength = Number(userInput);

  // Test and reprompt user if password length is an invalid value
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    if (isNaN(passwordLength)) {window.alert("That is not a number!")}
    else {window.alert("Length must be between 8 and 128")}
    return;
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
