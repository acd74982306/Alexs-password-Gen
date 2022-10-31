// Assignment Code
var generateBtn = document.querySelector("#generate");

function generateRandomInt(ceil) {
  var rand = Math.random() * ceil;
  rand = Math.floor(rand);
  return rand;
}

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
  var includeNumber = window.confirm("Include numbers?");
  var includeSymbol = window.confirm("Include symbols?");

  // Verify user has selected at least one char set
  if (!includeLower && !includeUpper && !includeNumber && !includeSymbol) {
    window.alert("At least one character set is required!");
    return;
  }

  // Declare character set arrays
  var lowerList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numberList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var symbolList = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '='];

  // Initialize as empty array to start fresh each time function is called
  var selectedCriteriaList = [];
  // Add user selected criteria to full criteria list
  if (includeLower) { selectedCriteriaList = selectedCriteriaList.concat(lowerList); }
  if (includeUpper) { selectedCriteriaList = selectedCriteriaList.concat(upperList); }
  if (includeNumber) { selectedCriteriaList = selectedCriteriaList.concat(numberList); }
  if (includeSymbol) { selectedCriteriaList = selectedCriteriaList.concat(symbolList); }

  // Initialize as empty string to fill with chars
  var newPassword = '';
  // Randomly generate password chars until set password length is reached
  for (var i = 0; i < passwordLength; i++) {
    newPassword = newPassword.concat(selectedCriteriaList[generateRandomInt(selectedCriteriaList.length)]);
  }

  return newPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
