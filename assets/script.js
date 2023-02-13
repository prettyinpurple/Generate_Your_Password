// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  passwordText.length = 128;
  passwordText.special = " '!,@#$%^&*()?+-./\=;.:><{}[]_`~|";
  passwordText.numeric = "0,1,2,3,4,5,6,7,8,9";
  passwordText.lowercase = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,u,s,t,u,v,w,x,y,z";
  passwordText.uppercase = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
  

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



confirm("Click OK to confirm using special characters.\nEither OK or Cancel.")
confirm("Click OK to confirm using numeric charcters. \nEither OK or Cancel.")
confirm("Click OK to confirm using lowercase characters. \nEither OK or Cancel.")
confirm("Click OK to confirm using upper case characters.\nEither OK or Cancel.")


passwordText.length = prompt("How many characters would you like the password to contain");
if (passwordText.length < 8, passwordText.length > 128) {
  alert("Please enter a number no less than 8 and no greater than 128");
};


