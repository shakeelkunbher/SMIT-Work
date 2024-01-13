// displying system date and time
// var date = new Date ();
// document.write(date)

// displying current Month
// var month = new Date();
// var months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// document.write("Current month: " + months[month.getMonth()]);

// displying fir 3 latters of day
// var day = new Date();
// var daysNames = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Satarday",
// ];
// var slice = daysNames[day.getDay()].slice(0,3)
// document.write("Today is " + slice)

// using coditions on date and time
// var today = new Date();
// var daysNames = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Satarday",
// ];
// if (today.getDay() === 0 || today.getDay() === 6) {
//     alert("It’s Fun day");
// } else {
//     alert("Not a Fun day");
// }

// A program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.
// var date = new Date ();
// var currentDate = date.getDate()
// if(currentDate<=15){
// document.write("First fifteen days of the month")
// }else{
// document.write("last days of the month")
// }

// A program that determines the minutes since midnight, Jan. 1, 1970
// var date = new Date ();
// var milliSec = date.getTime()
// var mint = date.getMinutes()
// document.write("Current date: " + date + "<br>")
// document.write("Elapsed milliseconds since January 1, 1970: " + milliSec + "<br>");
// document.write("Current date: " + milliSec/(1000*60) + "<br>")

// a program that tests whether it's before noon and alert “Its AM” else “its PM”.
// var date = new Date();
// var amPm = date.getHours()
// if(amPm>12){
// alert("Its PM")
// }else{
//     alert("Its AM")
// }

// A program that creates a Date object for the last day of the last month of 2020
// var laterDate = new Date("12 / 31 / 2020")
// document.write('Later date: ' + laterDate)

// A profram which shows passed days since 1st ramadan of 2023
// var currentDate = new Date();
// var ramdanDate = new Date("03/22/2023")
// var diff = currentDate - ramdanDate;
// var daysPast = Math.floor(diff/(1000*60*60*24))
// document.write(daysPast + " days have been passed since 1st Ramadan, 2023")

// a program that displays the seconds that elapsed between the reference date and the beginning of 2023.
// var currentDate = new Date();
// var ramdanDate = new Date("01/01/2023");
// document.write("On refrence date " + ramdanDate + "<br>")
// var sec= Math.floor((currentDate - ramdanDate) / 1000);
// document.write(sec + " seconds had passed since beginning of 2023")

//{ following codes gives us same results but they are slightly changed
// exctacing 1 hour from curent date
// var currentDate = new Date();
// document.write("Current date: " + currentDate + "<br>");
// var extractHour = new Date(currentDate.setHours("14"));
// document.write("1 Hour ago, it was " + extractHour);

// var currentDate  = new Date ();
// document.write("Current date: " + currentDate + "<br>")
// var hours = currentDate.getHours();
// currentDate.setHours(hours - 1);
// document.write("1 hour ago, it was " + currentDate);
//}

// going 100 years back in time
// var currentDate = new Date();
// document.write("Current date: " + currentDate + "<br>")
// var year = currentDate.getFullYear();
// currentDate.setFullYear(year - 100);
// document.write('100 years back, it was ' + currentDate)

// findin out date of year of user
// var user = parseInt(prompt("Enter your age!"));
// document.write("Your age is " + user + "<br>");
// var currentDate = new Date();
// var year = currentDate.getFullYear();
// var setingFullYear = currentDate.setFullYear(year - user);
// var fullYear = currentDate.getFullYear();
// document.write("Your birth year is  " + fullYear);

// A program to generate K-Electric bill of user
// var totalMonth = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// var currentDate = new Date();
// document.write("<h1>K-Electric Bill</h1>");
// var user = prompt("Enter user name!");
// document.write("Coustomer Name: " + user + "<br>");
// var month = totalMonth[currentDate.getMonth()];
// document.write("Month: " + month + "<br>");
// var units = parseInt(prompt("Enter Number of units!"));
// document.write("Number of units: " + units + "<br>");
// var chargesPerUnit = 17;
// document.write("Charges per unit: "+ chargesPerUnit +  "<br>")
// var totalAmount =  (units * chargesPerUnit);
// document.write("Net Amout Paybel (within Due Date): " + totalAmount +  "<br>")
// var latePayment = 350;
// document.write('Late payment surcharges: '+ latePayment +  "<br>")
// var totalLateAmount = (totalAmount + latePayment);
// document.write("Gross Amount Paybel (After Due Date ): " + totalLateAmount)
