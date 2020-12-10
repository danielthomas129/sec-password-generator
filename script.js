// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = "sample123"
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  //alert("Hello world")
  // User input variables:

  var passwordLengthAns = prompt("How many characters do you want for your password?");

  var addNumber =  confirm("Do you want numbers in your password?");

  var addUpper = confirm("Do you want uppercase letter's?")

  var addLower = confirm("Do you want lowercase letter's?")

  var addSymbol = confirm("Do you want any symbol's?")


  var numberPool = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  var lowerPool = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var upperPool = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var symbolPool = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

  var myPassword = '';

  // var randomNumber = numberPool[Math.floor(Math.random() * (numberPool.length-1))]

  // var randomUpper = upperPool[Math.floor(Math.random() * (upperPool.length-1))]

  // var randomLower = lowerPool[Math.floor(Math.random() * (lowerPool.length-1))]

  // var randomSymbol = symbolPool[Math.floor(Math.random() * (symbolPool.length-1))]

  // console.log(randomNumber);
  // console.log(randomLower);
  // console.log(randomUpper);
  // console.log(randomSymbol);



  var oneBigPool = []

  if(addNumber) {
    oneBigPool = oneBigPool.concat(numberPool);
  }
  if(addUpper) {
    oneBigPool = oneBigPool.concat(upperPool);
  }
  if(addLower) {
    oneBigPool = oneBigPool.concat(lowerPool);
  }
  if(addSymbol) {
    oneBigPool = oneBigPool.concat(symbolPool);
  }


  for (let index = 0; index < passwordLengthAns; index++) {


    var randomCharacter = oneBigPool[Math.floor(Math.random() * (oneBigPool.length-1))]
   

    myPassword = myPassword + randomCharacter;
  }

  console.log(myPassword);

  var passwordText = document.querySelector("#password");

  passwordText.value = myPassword;

  	// Doesn't have a selected type
	if(typesCount === 0) {
		return '';
	}
	
  ////////////// discussing for loop

  for (let index = 0;
     index < 128;
      index++) {

        // console.log("Hello number " + index);
  /* for (
    iterator initialization;
     conditional statement;
      iterator modifier)

    // Before entering the loop
    // set the starting count to 0
    // We only allow to enter the loop if index is less than the length of the array
    // At the end of the every loop, we change the value of index.. in this case add 1 to index

    // side note: index++ ----> index = index +1

    // First Loop
    // index = 0
    // 0 < 6 ---> TRUE! We allow to enter the loop
    // "Hello number 0"
    // index = 0 + 1 ----> index now has value of 1

    // Second Loop
    // index = 1
    // 1 < 3 ---> TRUE!
    // "Hello number 1"
    // index is now... 2

    // THird Loop
    // index = 2
    // 2 < 3 --> TRUE
    // "Hello number 2"
    // index is now... 3

    // Fourth Loop
    // index = 3
    // 3 < 3 ---> FALSE!
    // not allowed to enter the loop anymore!
    // EXIT
  */
    
  }

}
