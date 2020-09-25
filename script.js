
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Variables to choose from. The newArray is where the chosen variables will go
var specialChar = [",", "!", "@", "#", "$", "%", "-", "&", "-", "=", "_"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p",];
var upperCase = ["Q","W","E","R","T", "y", "U", "I", "o", "P"];
var newArray = [];


function generatePassword() {
//Prompts are asking what variables the password should include then they are being pushed to the newArray

var passLength = parseInt(prompt("How many characters (8-128) would you like your password to be?"));
if (passLength < 7 || passLength > 129); {
// alert("Please keep it between " + 8 + " and " + 128) *alert was showing everytime* 
}
alert(passLength + " characters included")

var prompt1 = prompt("Do you want to include special characters? y or n")
if (prompt1 === "y") {
  alert("Special characters included!");
  newArray.push(specialChar);
}

var prompt2 = prompt("Do you want to include numbers? y or n")
if (prompt2 === "y") {
  alert("Numbers included!");
  newArray.push(number);
}

var prompt3 = prompt("Do you want to include lowercase letters? y or n")
if (prompt3 === "y") {
  alert("Lowercase letters included!");
  newArray.push(lowerCase);
}

var prompt4 = prompt("Do you want to include uppercase letters? y or n")
if (prompt4 === "y") {
  alert("Uppercase letters included!");
  newArray.push(upperCase);
}
//For loop not working. I know it is bad practice to turn in half completed code, but time has simply run out and something is better than nothing
  for (var i = 0; i < passLength; i++) {
    //I was hoping the code below would take strings from the new array and scramble them into the password that would show in the html
   return newArray.charAt(Math.floor(Math.random()));
   
}
}
