// var emptyArry = [];
// emptyArry=["Shakeel", "Zia", "Usama"]
// console.log(emptyArry);

// var ed = ["SSC",  "HSC",  "BCS",  "BS",  "BCOM", "MS",  "M. Phil", "PhD"];
// document.write("<h1>Qualifications</h1>" +"<br>"+"1) " + ed[0] + "</br>" + "2) " + ed[1]+  "<br/>" +"3) "  + ed[2] + "<br/>" +"4) "  + ed[3] + "<br/>" +"5) "  + ed[4] + "<br/>" +"6) "  + ed[5] + "<br/>" +"7) "  + ed[6] + "<br/>" +"8) "  + ed[7])

// var students = ["Shakeel", "Hafeez", "Hanif"];
// var marksOfStudents = [230, 499, 388];
// var totalMarks = 500;
// document.write(
//   "Score of " +
//     students[0] +
//     " is " +
//     marksOfStudents[0] +
//     ". Percentage: " +
//     (marksOfStudents[0] / totalMarks) * 100
// );
// document.write("<br>"+
//   "Score of " +
//     students[1] +
//     " is " +
//     marksOfStudents[1] +
//     ". Percentage: " +
//     (marksOfStudents[1] / totalMarks) * 100
// );
// document.write("<br>"+
//   "Score of " +
//     students[2] +
//     " is " +
//     marksOfStudents[2] +
//     ". Percentage: " +
//     (marksOfStudents[2] / totalMarks) * 100
// );

var colours = ["red", "blue", "green"];
console.log(colours);

// var userInput = prompt("Add a Colour at the beginning");

// if (userInput) {
//   colours.unshift(userInput);
// } else {
//   alert("Enter A colour please");
// }
// console.log(colours);
// var userInput = prompt("Add a Colour in the end");

// if (userInput) {    
//   colours.push(userInput);
// } else {
//   alert("Enter A colour please");
// }
// console.log(colours);



// colours.unshift("purpel", "yellow")
// // colours.unshift()
// console.log(colours)

// colours.shift();
// console.log(colours)


// colours.pop()
// console.log(colours)





var indexNum=prompt("Enter Index Nmber")
var colorName=prompt("Enter colour Name")

colours.splice(indexNum,0, colorName);
console.log(colours)



// var indexNum=prompt("Enter a colour index to be deleted")
// var colorName=prompt("How many do you want to delete?")

// colours.splice(indexNum,colorName);
// console.log(colours)



// var cities = ["Lahore", "Multan", "Pishwer", "Islamabad", "Hyderabad"];
// console.log(cities)
// var selectedCities;
// var selectedCities=cities.slice(0, 3)
// console.log("Selected Cities: ", selectedCities); 


// var arr = ["This" ,  "is",  "my",  "cat"];

// var single = arr.join('')
// console.log(single)



