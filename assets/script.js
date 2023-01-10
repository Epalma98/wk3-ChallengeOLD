// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;

//The following variables contain all the characters available for the password criteria
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  passwordLength = prompt("How many characters would you like in your password? Between 8-128");
  console.log("Password length " + passwordLength);

  if(!passwordLength) {
    alert("Required value")
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128");
    console.log("Password Length" + passwordLength); 
  } else {
    confirmLower = confirm("Will this contain lowercase letters?");
    console.log("Lowercase "+ confirmLower);
    confirmUpper = confirm("Will this contain uppercase letters?");
    console.log("Uppercase " +confirmUpper);
    confirmNumber = confirm("Will this contain number?");
    console.log("Number " + confirmNumber);
    confirmSpecial = confirm("Will this contain special characters?");
    console.log("Special characters " + confirmSpecial);

  };
  // User did not check yes for any of the criteria
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    userChoices = alert("You must choose a criteria");
  // User chose to have all of the criteria for the password
  } else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, numbers, special);
    console.log(userChoices);
  } else if (confirmLower && confirmUpper && confirmNumber) {   // User chose lowercase, uppercase and number
    userChoices = lowerCase.concat(upperCase, numbers);
    console.log(userChoices);
  }
  else if (confirmLower && confirmUpper && confirmSpecial) {    // User chose lowercase, uppercase, and special
    userChoices = lowerCase.concat(upperCase, special);       
    console.log(userChoices);
  }
  else if (confirmLower && confirmNumber && confirmSpecial) {   //User chose lowercase, number, and special
    userChoices = lowerCase.concat(numbers, special);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmNumber && confirmSpecial) {   // User chose uppercase, number, and special
    userChoices = upperCase.concat(numbers, special);
    console.log(userChoices);
  }
  // User only chose 2 criteria for password
  else if (confirmLower && confirmUpper) {      // Lowercase and uppercase only
    userChoices = lowerCase.concat(upperCase);
    console.log(userChoices);
  }
  else if (confirmLower && confirmNumber) {     // Lowercase and number only
    userChoices = lowerCase.concat(numbers);
    console.log(userChoices);
  }
  else if (confirmLower && confirmSpecial) {    //Lowercase and special only
    userChoices = lowerCase.concat(special);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmNumber) {     //Uppercase and number only
    userChoices = upperCase.concat(numbers);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmSpecial) {    //Uppercase and special only
    userChoices = upperCase.concat(special);
    console.log(userChoices);
  }
  else if (confirmNumber && confirmSpecial) {   //Number and special only
    userChoices = numbers.concat(special);
    console.log(userChoices);
  }
  // User only chose 1 criteria for password
  else if (confirmLower) {
    userChoices = lowerCase;    //lowercase only
    console.log(userChoices);
  }
  else if (confirmUpper) {      //uppercase only
    userChoices = blankUpper.concat(upperCase);
    console.log(userChoices);
  }
  else if (confirmNumber) {     // number only
    userChoices = numbers;
    console.log(userChoices);
  }
  else if (confirmSpecial) {    //Special only
    userChoices = special;
    console.log(userChoices);
  };

  var passwordBlank = [];
  
  // Random loop set to randomize the chosen criteria
  for (var i = 0; i < passwordLength; i++) {
    var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  // Logs and returns the password in the box
  var password = passwordBlank.join("");
  console.log("Your Pasword is: " + password);
  return password;
  
};
