// var a = 10;
// document.write("The Value of a is: " + a + "<br/>" + "<br/>");

// document.write("The Value of ++a is: " + ++a + "<br/>")
// document.write("Now the value of a is: " + a + "<br/>" + "<br/>");

// document.write("The Vaue of a++ is: " + a++ + "<br/>");
// document.write("Now the Vlaue of a++ is: " + a + "<br/>" + "<br/>");

// document.write("The Value of --a is: " + --a + "<br/>");
// document.write("Now the Value of a is: " + a + "<br/>" + "<br/>");

// document.write("The Value of a-- is: " + a-- + "<br/>");
// document.write("Now the value of a-- is " + a);

// var a = 2, b = 1;
// document.write("a is " + a + "<br/>");
// document.write("b is " + b + "<br/>");

// var result = --a - --b + ++b + b--;
// document.write("result is "+result);

// var name = prompt("Enter Your Full Name");
//  var message = "Welcome Mr " + name;
// alert(message)

 // Prompting the user for a number
 var userInput = prompt("Enter a number to display its multiplication table:");

 // If user input is empty or not a number, default to 5
 var number = userInput ? parseInt(userInput) : 5;

 // Creating a table to display the multiplication table
 var tableContent = "<h2>Multiplication Table of " + number + "</h2><table border='1'>";
 for (var i = 1; i <= 10; i++) {
     tableContent += "<tr><td>" + number + " x " + i + "</td><td>=</td><td>" + (number * i) + "</td></tr>";
 }
 tableContent += "</table>";

 // Displaying the table content on the webpage
 document.write(tableContent);ez



// //Subjects
// var subject1 = prompt("Enter First Subject");
// var obtainedMarks1 = parseInt(
//   prompt("Enter Your Obtained Marks For " + subject1 + ":")
// );

// var subject2 = prompt("Enter Second Subject");
// var obtainedMarks2 = parseInt(
//   prompt("Enter Your Obtained Marks For " + subject2 + ":")
// );

// var subject3 = prompt("Enter Third Subject");
// var obtainedMarks3 = parseInt(
//   prompt("Enter Your Obtained Marks For " + subject3 + ":")
// );

// //Total Marks
// var totalMArks = 100;

// document.write(
//   "Subjects" + " " + "Obtained Marks" + " " + "Percentage" + "</br>"
// );
// document.write(
//   subject1 +
//     " " +
//     totalMArks +
//     " " +
//     obtainedMarks1 +
//     " " +
//     (obtainedMarks1 / totalMArks) * 100 +
//     "%" +
//     "<br>"
// );
// document.write(
//   subject2 +
//     " " +
//     totalMArks +
//     " " +
//     obtainedMarks2 +
//     " " +
//     (obtainedMarks2 / totalMArks) * 100 +
//     "%" +
//     "<br>"
// );
// document.write(
//   subject3 +
//     " " +
//     totalMArks +
//     " " +
//     obtainedMarks3 +
//     " " +
//     (obtainedMarks3 / totalMArks) * 100 +
//     "%" +
//     "<br>"
// );

// var totalobtainedmarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var percentage = (totalobtainedmarks / (totalMArks * 3)) * 100;
// document.write(totalMArks * 3 + " ");
// document.write(totalobtainedmarks + " ");
// document.write(percentage + "%");





