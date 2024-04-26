//geeting input of name from user
// var fName = prompt("Enter Your First Name");
// var lName = prompt("ENter Your Last Name")
// var fullname = fName + lName;
// console.log(fullname);

//finding length of user's input
// var mbl = prompt("Write Your Mobile Phone model");
// var leng = mbl.length;
// console.log("My Favorite phone is: " + mbl + " Length of sting is " + leng)

//Findin Index number of a latter
// var word = "Pakistani";
// document.write("String: " + word + "<br/>")
// var ind = word.indexOf("n");
// document.write("Index of 'n': " + ind );

// Findin Last Index number of a latter
//  var word = "Hello World";
//  document.write("String: " + word + "<br/>")
//  var ind = word.lastIndexOf("l");
//  document.write("Index of 'l': " + ind );

// Findin a latter at an espacfic Index number
//  var word = "Pakistani";
//  document.write("String: " + word + "<br/>")
//  var char = word.charAt(3);
//  document.write("Character at inex 3: " + char );

//replacing latters
// var fisrWord = "Hyderabad"
// var copyWord = fisrWord.slice(5);
// document.write("City: " + fisrWord + "<br/>");
// var updatedWord = "Islam" + copyWord;
// document.write("After replacment: " + updatedWord);

// replacing an espacific latter in whole sentance globaly
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var update = message.replace(/and/g, "&");
// document.write(update)

//changing Data type of a srting into a number
// var strNum = "472";
// document.write("Value: " + strNum + "<br/>")
// var typeOfStrNum = typeof(strNum);
// document.write("Type: " + typeOfStrNum + "</br>")
// var num =+ "472"
// document.write("Value: " + num + "<br/>")
// var typeOfNum = typeof(num);
// document.write("Type: " + typeOfNum + "</br>")

// changing a word to upper case
// var firstWord  = "peanuts";
// document.write("User input: " + firstWord + "<br/>");
// var upperCase = firstWord.toUpperCase();
// document.write("Upper case: " + upperCase);

// captilizing fist latter of user's input
// var user = prompt("Type a word");
// var firstChar = user.slice(0,1).toUpperCase();
// var lastChars = user.slice(1).toLowerCase();
// var fullChars = firstChar + lastChars;
// document.write(fullChars);

// replacing a latter in a number and converting its data in to string
// var number = 35.36;
// document.write("Number: " + number + "<br/>")
//  var rep = number.toString().replace('.','')
//  document.write("Result: " + rep)

// ristricting user from writing special charcaters
// var user = prompt("Enter Your Name");
// var cond = true;
// for (var i = 0; i < user.length; i++) {
//   var charCode = user.charCodeAt(i);
//   if (
//     !(
//       (charCode >= 65 && charCode <= 90) ||
//       (charCode >= 97 && charCode <= 122) ||
//       charCode === 32
//     )
//   )
//     cond = false;
// }

// if (cond) {
//   alert("Welcome Mr " + user);
// } else {
//   alert("Please enter valid user name");
// }

// findig varaible in arry
// var arry = ["cake", "apple pie", "cookie", "chips", "patties"];
// var user = prompt(
//   "welcome to Shakeel's Bakery. What do you want to order Sir/ma'am?"
// );
// var cond = false;
// for (var i = 0; i < arry.length; i++) {
//   if (arry[i].toLowerCase() === user.toLowerCase()) {
//     cond = true;
//   }
// }
// var ind = arry.indexOf(user);
// if (cond) {
//   alert(user + " is available at index " + ind + " in our bakery");
// } else {
//   alert("We are sorry. " + user + " is not available in our bakery");
// }

// geting a input of password from userof six charcters and should not start from a number
// var user = prompt("Enter a password of six or more charcters");
// var condition = false;
// for (var i = 0; i < user.length; i++) {
//isNaN Cheak weather the given value is number or not if its then it return true
//   if (user.length >= 6 && isNaN(user[0])) {
//     condition = true;
//   }
// }
// if (condition === true) {
//   alert("Correct Password!");
// } else {
//   alert("Password should start from alphabetes!");
// }

// text.split('') separates every character into individual elements in an array.
// text.split(' ') separates the string into elements based on spaces, effectively creating an array of words.

// converting strings into arrey
// var text = "University of Karachi";
// var split = text.split('');
// for (var i = 0; i < split.length; i++) {
//     document.write(split[i] + "<br/>");
// }

// Finding a character at last index
// var text ="Pakistan"
// var lastInd = text.charAt(text.length -1);
// console.log(lastInd)
// finding occurnce of word " the " in sentence
// var text = "The quick brown fox jumps over the lazy dog";
// var word = "the";
// var lowerCase = text.toLowerCase();
// var timesRep = lowerCase.split(word).length -1;
// document.write("Text: " + text + "<br/>")
// document.write("There are " + timesRep + " occurence(s) of word " + "'" + word + "'.")
