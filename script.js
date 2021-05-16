// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = [];
var uppercase = [];
var numbers = [];
var special = [];
var selection = [];
var passwordarray = [];

var charnum = parseInt(window.prompt("How many characters is your chosen password? (at least 8 no more than 128)"), 10);
console.log("charnum",charnum);




if ( charnum >= 8 && charnum <=128 ){
  var lower = window.confirm("Do you want lower case letters in your password?")

  if (lower) {
    var lowercase =  ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  }
    console.log("lower",lower);  
    console.log("Lowercase",lowercase);

var upper = window.confirm("Do you want upper case letters in your password?")

  if(upper) {
    var uppercase =  ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  }
    console.log("upper",upper);  
    console.log("Uppercase",uppercase);

var num = window.confirm("Do you want numbers in your password?")

  if(num) {
    var numbers = ["1","2","3","4","5","6","7","8","9","0"];
  }
    console.log("num",num);  
    console.log("numbers",numbers);

var spec = window.confirm("Do you want special characters in you password?")
  if(spec) {
    var special = ["!","@","#","%","^","&","*","(",")","-","=","+"];
  }
    console.log("spec",spec);  
    console.log("special",special);

  // var selection = [selection, lowercase, uppercase, numbers, special];

  var selection = selection.concat(lowercase, uppercase, numbers, special)

    console.log("selection",selection);

    for (i = 0; i < charnum; i++) {

      var x = selection[Math.floor(Math.random()* selection.length)];
      passwordarray.push(x);
      console.log("password", passwordarray);
      }

      console.log(passwordarray.join(''));
      var finalpassword = passwordarray.join('');

}
else { alert("Value needs to be greater than or equal to 8 or less than or equal to 128.")};

// Write password to the #password input
function writePassword() {
  var password = finalpassword;
  var passwordText = document.querySelector("#password");

  passwordText.setAttribute("placeholder", password);
 

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


 