// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

var pw = "";
var nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lcase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var ucase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', Z]
var specialc = [!, ?, ~, #, $, %, ^, &, *, /]
  
  
  // WHEN prompted for character types to include in the password
  // THEN I choose lowercase, uppercase, numeric, and/or special characters
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page

do {
  var length = it ggm("Enter a number between 8 and 128 characters");

  if (length < 8 || length > 128 || is NaN(length))
  { alert(please enter a number between 8 and 128) }
  while (length < 8 || length > 128 || is NaN(length) }
} 


var lcase = confirm("would you like to include lower case?")

if (lcase) {
  alert ("I want lower case")
}

var ucase = confirm("would you like to include upper case?")

if (ucase) {
  alert ("I want upper case")
}

var specialc = confirm("would you like to special characters?")

if (ucase) {
  alert ("I want special characters")
}

for (var i = 0, i < length; i++){
  pw = pw + i
  console.log(pw);
}

return pw;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
