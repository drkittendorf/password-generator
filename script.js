// Assignment Code 
/*
var generateBtn = document.querySelector("#generate"); 
*/
 //GOTTA ADD SOMETHING TO THIS TO RESPOND TO NON NUMBER CHARACTERS
let numCar = prompt("How many characters would you like your password to have? Please enter a number between 8 and 128.");
  console.log(numCar); // establishes number of total characters
  //now lets validate
  while (numCar < 8 || numCar > 128) {
         numCar = prompt("How many characters would you like your password to have? Please enter a number between 8 and 128.")
   }   
    if (numCar > 7 && numCar) {
    console.log(numCar);   // move it on
   }

 // Confirming character inclusion starts here
  var cfLowr = confirm("Would you like to include lower case characters in your password?");
  var cfCaps = confirm("Would you like to include upper case characters in your password?");
  var cfNumb = confirm("Would you like to include numbers in your password?");
  var cfSpec = confirm("Would you like to include special characters in your password?");
  console.log(cfLowr); // logging values in console STILL NEED TO VALIDATE
  console.log(cfCaps);
  console.log(cfNumb);
  console.log(cfSpec);
  while (cfLowr == false && cfCaps == false && cfNumb == false && cfSpec == false) {
  alert("Please select at least one of the following for better security!");
       cfLowr = confirm("Would you like to include lower case characters in your password?");
       cfCaps = confirm("Would you like to include upper case characters in your password?");
       cfNumb = confirm("Would you like to include numbers in your password?");
       cfSpec = confirm("Would you like to include special characters in your password?");
       console.log(cfLowr); // logging validated values in console
       console.log(cfCaps);
       console.log(cfNumb);
       console.log(cfSpec);
    }     
  if (cfLowr == "true" || cfCaps == "true" || cfNumb == "true" || cfSpec == "true")  {
    console.log("hello...next step please");    
    }          

    //populate an array from which we can draw randomly from
let drawPool = [];
if (cfLowr == true) drawPool.push('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z')
/* console.log(drawPool); */
if (cfCaps == true) drawPool.push('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z')
/* console.log(drawPool);*/
if (cfNumb == true) drawPool.push('0','1','2','3','4','5','6','7','8','9')
/* console.log(drawPool);*/
if (cfSpec == true) drawPool.push('!','@','#','$','%','^','&','*','(',')','?','>','<','=','-','+','_',',','{','}','/',';',':','~')
 console.log(drawPool);

// selections have been made now lets randomize those digis
let passWord = []; // array to store randomized strings

 for (var i = 0; i < numCar; i++) { //loops according to the selected password length
   /*   console.log(drawPool[i]); */
  let num = Math.floor(Math.random() * (drawPool.length)); //generate a random index position for array of selected characters
      console.log(num);
  let x = parseInt (num);
      console.log(typeof x);
  let swOrd = drawPool.slice(x,x); ///gotta figure this part  out still
  let y = (swOrd.toString());
  passWord.push(y);
   } 
console.log(passWord)
/*

for (var i = 0; i < (numCar); i++) {  // Generate a random number between 1 and 10
  // Math.floor will round down, meaning we would get a number between 0 and 9, so we'll always add 1 to bump it up.
  var num = Math.floor(Math.random() * (10));

  // Display in console
  console.log(num);
}

/*
then writePassword(); using variables  

else return ' Please respond "Yes" to at least on type of character.'
charConfirm ();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
// Loop 10 times
      for (var i = 0; i < 10; i++) {
        // Generate a random number between 1 and 10
        // Math.floor will round down, meaning we would get a number between 0 and 9, so we'll always add 1 to bump it up.
        var num = Math.floor(Math.random() * 10) + 1;

        // Display in console
        console.log(num);
      }



}
//Arrays
const specChar = ['!','@','#','$','%','^','&','*','(',')','?','>','<','=','-','+','_',',','{','}','/',';',':','~'];


//Functions








// Add event listener to generate button
generateBtn.addEventListener("click", numChar); //original





//variation of this loop for password generation
var = 
        for (var i = 0; i < zooAnimals.length; i++) {
            console.log(zooAnimals[i]);
          }

          var num = Math.floor(Math.random() * 10) + 1;         
*/