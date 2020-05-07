// Assignment Code 
/*
var generateBtn = document.querySelector("#generate"); 
*/
wordNumbs (); // Calls 1st function

function wordNumbs (){
    let numCar = prompt("How many characters would you like your password to have? Please enter a number between 8 and 128.");
        console.log(numCar); // establishes number of total characters
  //now lets validate
  while (numCar < 8 || numCar > 128) {
         numCar = prompt("How many characters would you like your password to have? Please enter a number between 8 and 128.")
}   
    if (numCar > 7) {
    console.log(numCar);    
    canConfirm();  // move it on
}
}

function canConfirm () {  // Confirming character inclusion starts here
  var cfLowr = confirm("Would you like to include lower case characters in your password?");
  var cfCaps = confirm("Would you like to include upper case characters in your password?");
  var cfNumb = confirm("Would you like to include numbers in your password?");
  var cfSpec = confirm("Would you like to include special characters in your password?");
  console.log(cfLowr); // logging values in console STILL NEED TO VALIDATE
  console.log(cfCaps);
  console.log(cfNumb);
  console.log(cfSpec);
  /* while (cfLowr &&  && && && ) */


}
// selections have been made now lets randomize those digis








/*
if || cfLower || cfCaps || cfNumb  || cfSpec !=== true

then writePassword(); using variables  

else return ' Please respond "Yes" to at least on type of character.'
charConfirm ();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Arrays
const specChar = ['!','@','#','$','%','^','&','*','(',')','?','>','<','=','-','+','_',',','{','}','/',';',':','~'];


//Functions
function pwdChars () {
 if (<129 && 8>);
console.log ("OK");
else 
console.log ("nope");

}







// Add event listener to generate button
generateBtn.addEventListener("click", numChar); //original





//variation of this loop for password generation
var = 
        for (var i = 0; i < zooAnimals.length; i++) {
            console.log(zooAnimals[i]);
          }

          var num = Math.floor(Math.random() * 10) + 1;         
*/