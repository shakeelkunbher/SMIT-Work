// Math round, ceil, and floor methods
// round plus 1 in given number if dacimals or greater than 5, if dacimal is less then 5 then it removes all dacimals
// floor removes all dacimal pointes(if its 1.9999 to 1,  or 2.547 to 2 )
// ceil removes all decimals and plus 1 in the given number (if its 1.999 to 2, or 2.454 to 3)
// var num = 3.45214;
// document.write("Number: " + num + "<br>")
// document.write("Rounde off value: " + Math.round(num) + "<br>")
// document.write("Floor value: " + Math.floor(num) + "<br>")
// document.write("Ceil value: " + Math.ceil(num))

// var num = parseFloat(-2.673)
// document.write("Number: " + num + "<br>");
// document.write("Rounde off value: " + Math.round(num) + "<br>")
// document.write("Floor the value: " + Math.floor(num)+ "<br>" )
// document.write("Ceil value: " + Math.ceil(num))

// a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
// var num = parseInt(prompt("Enter a number"));
// var absoluteValue;
// if (num < 0) {
//   absoluteValue = -num;
// } else {
//   absoluteValue = num;
// }
// document.write("Absolute value of " + num + " is " + absoluteValue);

// A program that simulates a dice using random() method of JS Math class
// var num = Math.floor(Math.random() * 6 + 1); // math.floor removed all decimals, now random number in fisrt step will range between 0 to 5 after +1 they will range between 1 to 6
// console.log(num)
// if (num === 6) {
//   document.write("Random dice value is: " + num);
// } else if (num === 5) {
//   document.write("Random dice value is: " + num);
// } else if (num === 4) {
//   document.write("Random dice value is: " + num);
// } else if (num === 3) {
//   document.write("Random dice value is: " + num);
// } else if (num === 2) {
//   document.write("Random dice value is: " + num);
// } else if (num === 1) {
//   document.write("Random dice value is: " + num);
// }

// a program that simulates a coin toss using random() method of JS Math class
// var num = Math.floor(Math.random() * 2 + 1);
// if(num===1){
//     document.write(num + "<br>")
// document.write("Random coin value: Tails")
// }else{
//     document.write(num+ "<br>")
//     document.write("Random coin value: Head" )
// }

// a program that shows a random number between 1 and 100
// var num = Math.floor(Math.random()*100 + 1)
// document.write("Random number between 1 and 100: " + num)

// a program that asks the user about his weight
// var userInput = parseFloat(prompt("Enter your wieght").toLowerCase());
// var wieght;
// if (!isNaN(userInput)) {
//   wieght = userInput;
//   document.write("The weight of user is " + wieght + " Kilograms");
// } else {
//     wieght = "Invailed input";
//     document.write(wieght);
// }

// a program which genrates random number from 1 to 10 and user has to guess
// var user = +prompt("Enter a number between 1 and 10");
// var randomNum = parseInt(Math.random() * 10 + 1);
// console.log(randomNum);
// if (user === randomNum) {
//   alert("Congratulations you Sir Guessed it Correctly");
// } else {
//   alert("Try agian!");
// }


