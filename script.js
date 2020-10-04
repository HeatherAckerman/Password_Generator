
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
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];



function generatePassword() {
  var options = getPasswordParameters();
  var newArray = [];
  var result = [];
  var possibleChar = [];

  if (options.hasspecialChar === true) {
    possibleChar = possibleChar.concat(specialChar);
    
    newArray.push(getRandom(specialChar));

  }
  if (options.hasnumbers === true) {
    possibleChar = possibleChar.concat(number);
    
    newArray.push(getRandom(number));
  }
  if (options.haslowerCase === true) {
    possibleChar = possibleChar.concat(lowerCase);
    
    newArray.push(getRandom(lowerCase));
  }
  if (options.hasupperCase === true) {
    possibleChar = possibleChar.concat(upperCase);
    
    newArray.push(getRandom(upperCase));
  }



  for (var i = 0; i < options.passLength; i++) {
    var possibleCharacter = getRandom(possibleChar)
    result.push(possibleCharacter)
    
  }

  for (var i = 0; i < newArray.length; i++) {
    
    result[i] = newArray[i]
  }
  
console.log(result)
  return result.join("")
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function getPasswordParameters() {
  //Prompts are asking what variables the password should include then they are being pushed to the newArray

  var passLength = parseInt(prompt("How many characters (8-128) would you like your password to be?"));

  if (passLength < 7 || passLength > 129); {
    // alert("Please keep it between " + 8 + " and " + 128) *alert was showing everytime* 
  }
  alert(passLength + " characters included")

  var hasspecialChar = confirm("Do you want to include special characters? y or n")
 

  var hasnumbers = confirm("Do you want to include numbers? y or n")
 

  var haslowerCase = confirm("Do you want to include lowercase letters? y or n")
 

  var hasupperCase = confirm("Do you want to include uppercase letters? y or n")
 
  var passwordOptions = {
    passLength: passLength,
    hasspecialChar: hasspecialChar,
    hasnumbers: hasnumbers,
    haslowerCase: haslowerCase,
    hasupperCase: hasupperCase,
  }
  return passwordOptions;
}

