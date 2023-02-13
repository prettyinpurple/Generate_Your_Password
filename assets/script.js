// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = prompt("How many characters would you like the password to contain");
if (length < 8) {
  alert("please enter a number no less than 8 and not greater than 128");
} else {}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
