
//multidimantional arrey
// var matrix = [
//     [0, 1, 2, 3],
//     [0, 1, 0, 1],
//     [2, 1, 0, 1]
// ];

// Loop Till "10"
// for (var i = 1; i<=10; i++){
// console.log(i);
// }

// Multiplication Table
// var tabel =prompt("Enter A Number for Its Multiplication")
// var length = prompt("Enter Length");

// for (var i = 1; i<length; i++){
// console.log(i, tabel+ "x" + i + "=" + tabel*i) }

//loop On Arrey
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//   document.write(fruits[i] + "<br/>");
// }
// document.write("<br/>"+ "<br/>")
// document.write("Element at index 0 is " + fruits[0] + "<br/>")
// document.write("Element at index 1 is " + fruits[1] + "<br/>")
// document.write("Element at index 2 is " + fruits[2] + "<br/>")
// document.write("Element at index 3 is " + fruits[3] + "<br/>")
// document.write("Element at index 4 is " + fruits[4] + "<br/>")

// for Loop
// document.write("counting: " + "<br/>");
// for (var i = 1; i < 15; i++) {
//   document.write(i + ", ");
// }

// document.write("<br/>" + "<br/>")
// document.write("Reverse counting: " + "<br/>")
// for (var i = 10; i>=1; i--){
// document.write(i+ ", ")
// }

// document.write("<br/>" + "<br/>")
// document.write("Even:" + "<br/>")
// for (var i = 0; i <= 20; i += 2){
// document.write(i + ", " )
// }

// document.write("<br/>" + "<br/>")
// document.write("Odd:" + "<br/>")
// for(var i = 1; i<=19; i += 2){
// document.write(i + ", " )
// }

// document.write("<br/>" + "<br/>")
// document.write("Series:" + "<br/>")
// for(var i = 2; i<=20; i += 2){
// document.write(i + "k" +  ", " )
// }

// searching varaible and index in arrey By user
// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var user = prompt(
//   "Welcome To Shakeel's Bakery. What do you want to order sir/ma'am?"
// );
// var cond = false;
// for (var i = 0; i < a.length; i++) {
//   if (a[i].toLowerCase() === user.toLowerCase()) {
//     cond = true;
//     break;
//   }
// }
// if (cond===true){
//     document.write(user + "<b> is available </b>" + "at index " + a.indexOf(user) + " in our bakery")
// }else {
//   document.write("We are sorry.  " + user + " is "+ "<b>not available </b>" + "in our bakery")
// }

// Finding Largest Number
// var numbers = [24, 53, 78, 91, 12];
// var largestNumber = numbers[0];
// document.write("Arrey Items: ");
// for (var i = 0; i < numbers.length; i++) {
//   document.write(numbers[i] + ", ");

//   if (numbers[i] > largestNumber) {
//     largestNumber = numbers[i];
//   }
// }

// document.write("<br/>");
// document.write("The Largest Number is " + largestNumber);
// document.write("<br/>");
// document.write("<br/>");

// Finding Smallest Number
// var numbers = [24, 53, 78, 91, 12];
// var smallestNumber = numbers[0]
// document.write("Arrey Items: ");
// for (var i = 0; i < numbers.length; i++) {
//   document.write(numbers[i] + ", ");

//   if (numbers[i] < smallestNumber) {
//     smallestNumber = numbers[i];
//   }
// }

// document.write("<br/>");
// document.write("The Smallest Number is " + smallestNumber);


// Write a program to print multiples of 5 ranging 1 to 100.
for (var i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}
