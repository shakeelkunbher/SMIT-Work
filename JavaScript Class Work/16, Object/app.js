var student = {
  name: "Shakeel Ur Rehman",
  father: "Abdul Ghani",
  email: "shakeelkunbher566@gmail.com",
  enrollment: true,
  subject: ["HTML", "CSS", "JS"],
  course: {
    timing: "9 - 11",
    timePeriod: "12 months",
  },
};

// findind values
// console.log(student.course.timePeriod)

//adding new value in object
// student.Status = "UnderGraduate"

//delenting value in object
// delete student.Father

//we can create object in object
// student.Course = {
//     name: "Web Development",
//     Timing: "9pm to 11pm"
// }

// adding arrey in object
// student.subjects = ["HTML", "CSS", "JS"]

// adding value in arrey in object
// student.subjects.push("React")

// it cheaks weather geven propertie in string is avaible or not
// console.log("Name" in student)
// console.log(student);

// findind property value through user input
// var user = prompt("Enter a prop!");
// console.log(student[user]);

//looop for object
for (var key in student) {

  //getting all values of properties in for loop
  console.log(student[key]);

}
