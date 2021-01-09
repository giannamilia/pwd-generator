var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var pw = "";
  var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var lcase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var ucase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var specialc = ["!", "?", "~", "#", "$", "%", "^", "&", "*", "/"];
  var wantedChars = [];

  do {
    var length = prompt("Enter a number between 8 and 128 characters");

    if (length < 8 || length > 128 || isNaN(length)) {
      alert("please enter a number between 8 and 128");
    }
  } while (length < 8 || length > 128 || isNaN(length));

  var lower = confirm("would you like to include lower case?");

  if (lower) {
  
    wantedChars = wantedChars.concat(lcase)

    console.log(wantedChars)
  }
  
  var upper = confirm("would you like to include upper case?");

  if (upper) {
    
    wantedChars = wantedChars.concat(ucase)

    console.log(wantedChars)

  }

  var spec = confirm("would you like to include special characters?");

  if (spec) {
    
    wantedChars = wantedChars.concat(specialc)

    console.log(wantedChars)


  }

  var numbs = confirm("would you like to include numbers?");

  if (numbs) {
    
    wantedChars = wantedChars.concat(nums)

    console.log(wantedChars)
  }

  for (var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * wantedChars.length);
    console.log(random);
    var newchars = wantedChars[random];
    pw = pw + newchars;
    console.log(pw);
  }

  return pw;}

  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)