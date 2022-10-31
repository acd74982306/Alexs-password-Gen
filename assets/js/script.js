// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var userInput = window.prompt("Choose password length between 8 & 128 characters");
  // Convert string to number
  var passwordLength = Number(userInput);

  // Test if password length is a valid value
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {

    if (isNaN(passwordLength)) { window.alert("That is not a number!") }
    else { window.alert("Length must be between 8 and 128") }
    // Exit generatePassword function because invalid input
    return;
  }

  window.alert("Choose your password criteria ... ")
  // Record user input to variables as boolean values
  var includeLower = window.confirm("Include lowercase letters?");
  var includeUpper = window.confirm("Include UPPERCASE letters?");
  var includeNumbers = window.confirm("Include numbers?");
  var includeSymbols = window.confirm("Include symbols?");

  // Verify user has selected at least one char set
  if (!includeLower && !includeUpper && !includeNumbers && !includeSymbols) {
    window.alert("At least one character set is required!");
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
