// Assignment Code 

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) //original

function writePassword() {
  var password = generatePassword();
   } 

function generatePassword() {
  let numCar = prompt("How many characters would you like your password to have? Please enter a number between 8 and 128.");
console.log(numCar);
  if (isNaN(numCar)){
  numCar = prompt("How many characters would you like your password to have? Please enter a NUMBER between 8 and 128.")
  }
  while (numCar < 8 || numCar > 128) {
  numCar = prompt("How many characters would you like your password to have? Please enter a number between 8 and 128.")
  }   
  if (numCar > 7 && numCar < 129) {
console.log(numCar);

      confirmCars();  
   }
        function confirmCars() {
        let array = [];
        let drawPool = [];
          var cfLowr = confirm("Would you like to include lower case characters in your password?");
          var cfCaps = confirm("Would you like to include UPPER case characters in your password?");
          var cfNumb = confirm("Would you like to include numbers in your password?");
          var cfSpec = confirm("Would you like to include SPECIAL characters in your password? Like &#$%?");
          while (cfLowr == false && cfCaps == false && cfNumb == false && cfSpec == false) { 
            alert("Please select at least one of the following in order to generate your password!");
              cfLowr = confirm("Would you like to include lower case characters in your password?");
              cfCaps = confirm("Would you like to include upper case characters in your password?");
              cfNumb = confirm("Would you like to include numbers in your password?");
              cfSpec = confirm("Would you like to include special characters in your password?");
          }  
          if (cfLowr == true) {
          drawPool.push('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'); 
          array.push("true");
          } else {
          array.push("false")
          } 
        console.log(array[0]);
          
          
          if (cfCaps == true) {
          drawPool.push('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
          array.push("true");
          } else {
          array.push("false")
          }
        console.log(array[1]);
          
          
          if (cfNumb == true) {
          drawPool.push('0','1','2','3','4','5','6','7','8','9');  
          array.push("true");
          } else {
          array.push("false")
          }
        console.log(array[2]);
          
          
          if (cfSpec == true) {
          drawPool.push('!','@','#','$','%','^','&','*','(',')','?','>','<','=','-','+','_','{','}','/',';',':','~');  
          array.push("true");
          } else {
          array.push("false")
          }
                     
        if (cfLowr == "true" || cfCaps == "true" || cfNumb == "true" || cfSpec == "true") {
  console.log(array[3]); 
  console.log(drawPool) }
            randOmizer();
   // end of confirm cars
  
                  function randOmizer() {
                    let passWord = []; // array to store randomized strings
                    for (var i = 0; i < numCar; i++) {  //loops according to the selected password length (variable numCar)
                    let num = Math.floor(Math.random() * (drawPool.length));    
    console.log(num);
                    let x = parseInt (num);
    console.log(typeof x);
                    let swOrd = drawPool.slice(x,x+1); //extract the string from the array at the random index
                    let y = (swOrd.toString());
                    passWord.push(y);
                  } 
                      
    console.log(passWord.join(''));
                    alert ((passWord.join('')))
                    var passwordText = document.querySelector("#password");
                    passwordText.value = ((passWord.join('')));
                    return ((passWord.join('')));
            }         
              }                 
                }
