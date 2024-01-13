// var city = prompt("Enter Your City");
//  if (city==="karachi"){
//     alert("Welcome To The City Of Light")}

//Gender

// var gender = prompt("Enter Your Gender");
// var message = "Not Match";

// if (gender === "male") {
//   message = "Good Morning Sir!";
// }

// if (gender === "female") {
//   message = "Good Morning ma'am!";
// }
// alert(message);

//Trafic Signal

// var signal = prompt("Enter Signal");
// var message = "Wronge Input";
// if (signal === "red") {
//   message = "Must Stop";
// } else if (signal === "yellow") {
//   message = "Ready to move";
// } else if (signal === "green") {
//   message = "Move now";
// }

// alert(message);

// var fuel = prompt("Enter Remaining Fuel in your car")
// var message="Your Tank is full"
// if(fuel < 0.25){
//     message= "Please refill the fuel in your car"
// }
// alert(message);

// var a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true");
// }
// if(c === 14){
//     alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }

// if (true){
//     alert("True");
// }

// if (false){
//     alert("False")
// }

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

//Marks And Grades
// var totalMArksInThreeSubjects = prompt("Enter Total Marks in three Subjects");
// var obtainedMarksOf3Subjects = prompt("Enter Obtained marks in three Subjects");
// var grade;
// var remarks;

// var percentage = (obtainedMarksOf3Subjects / totalMArksInThreeSubjects) * 100;
// if (percentage >= 80) {
//   grade = "A-one";
//   remarks = "Excelent";
// }else if(percentage>=70){
//     grade = "A";
//   remarks = "Good";
// }

// else if(percentage>=60){
//     grade = "B";
//   remarks = "You Need to improve";
// }

// else if(percentage<60){
//     grade = "Fail";
//   remarks = "Sorry";
// }

// document.write("<h1>Marks Sheet</h1>" +"<br>")
// document.write("Total marks : " + totalMArksInThreeSubjects + "<br/>");
// document.write("Marks obtained : " + obtainedMarksOf3Subjects +"<br/>");
// document.write("Percentage : " + percentage + "%"+"<br/>");
// document.write("Grade : " + grade +"<br/>");
// document.write("Remarks : "+remarks +"<br/>");

//Guess Game

//  var ogNumber=+prompt("Guess The Correct Number");
// var message = "Sorry Try Again!"

// if (ogNumber === 7){
//   message="Bingo! Correct answer"
// }else if (ogNumber === 6){
//   message="Close enough to the correct answer"
// }

// alert(message);

// var number =prompt("Enter a number To see Wheather Its devisble by 3 or not");
// var message;

// if (number%3===0){
//   message=(number + " is devisble by 3")

// }else{
// message=(number + " Is Not devisble by 3")
// }

// alert(message);

// checking a number wheather its an odd number even number
// var number =prompt("Enter number to check wheather its an odd number or even number");
// var message ;

// if (number===""){
//   message="Please enter a number"

// }

// else if (isNaN(number)) {
// message="Please Enter a valid number"
// }

// else if (number%2===0){
// message="This is an even number!"

// }

// else {
//   message="This is an odd number!"
// }

// alert(message);

// var temp = +prompt("Enter your area temprature");
// var message;

// if(temp>40){
// message="It is too hot outside."
// }

// else if (temp>30){
// message="The Weather today is Normal."
// }

// else if (temp>20){
//   message="Today’s Weather is cool."
// }

// else if (temp>10){
// message="OMG! Today’s weather is so Cool."
// }else{
//   message="Its too cool today"
// }

// alert(message);



// Arthmetic Opration
var firstNumber = +prompt("Enter first number");
var secondNumber = +prompt("Enter second number");
var mathOpration = prompt("Enter math opration which you want to perform");
var answer;

if (mathOpration === "subtraction") {
  answer = firstNumber - secondNumber;
} else if (mathOpration === "addition") {
  answer = firstNumber + secondNumber;
} else if (mathOpration === "multiplication") {
  answer = firstNumber * secondNumber;
} else if (mathOpration === "divsion") {
  answer = firstNumber / secondNumber;
} else if (mathOpration === "remainder") {
  answer = firstNumber % secondNumber;
}

alert(answer);



