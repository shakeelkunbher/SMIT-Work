// function for only dropdown , input fields & for text area
// function inputValue(){
//     var input = document.getElementById('Submit')
//     console.log(input.value)
//     input.value =  ''
// }

// function for checkBox
// function checkBox() {
//   var Subjects = document.getElementsByName("Subject");
//   for (var i = 0; i < Subjects.length; i++) {
//     if (Subjects[i].checked) {
//       console.log(Subjects[i].value);
//     }
//   }
//  }

//innerHTMl can  be used to add or remove content from an HTML element including html tags
// var text = document.getElementById('text')
// document.write(text.innerHTML = "<h1>" +  text.innerHTML + "</h1>")

// innerText can be used  to get the text value of a tag , it does not include any HTML tags with himself like innerHTML
// var text = document.getElementById('text')
// console.log(text.innerText)

// innerContent can be used  to get the plain text of an HTML element, without any HTML tags included in it innerHTML and innerContent are both little bit simler.
// var text = document.getElementById("text");
// console.log(text.textContent);

// expanding text on click more
// function expand() {
//   var fullText =
//     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, iusto, quo culpa dolorum perferendis sed consequatur laborum perspiciatis vitae sunt distinctio aperiam iure sapiente voluptates, suscipit molestiae at reprehenderit aliquam. Quod, nisi!";
//   var lessText =
//     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, iusto,quo culpa dolorum perferendis....";

//   var text = document.getElementById("text");
//   var span = document.getElementById("span");
//   if (span.innerText === "see more") {
//     text.innerText = fullText;
//     span.innerText = "see less";
//   } else {
//     text.innerText = lessText;
//     span.innerText = "see more";
//   }
// }



// showing text on click and hiding text on click throug Css in javascript
// function showHide(){
//     var text = document.getElementById("text")
// var showText = document.getElementById("span1");
// var showMoreSpan = document.getElementById('span');
// if(showMoreSpan.innerText === "see more"){
// showText.style.display="block";
// text.style.display = "none"
// showMoreSpan.innerText = "see less"
// }else{
//     showText.style.display = "none"
//     text.style.display = "block"

//     showMoreSpan.innerText = "see more"
// }
// }
// replacing text in a html Element through javaScript
// function testingInnerHTML() {
//   var firstName = document.getElementById("firstName");
//   var lastName = document.getElementById("lastName");
//   var heading = document.getElementById("heading");
//   if (firstName.value === "" || lastName.value === "") {
//     alert("Plaese write your name");
//   } else {
//     heading.innerText = firstName.value + " " + lastName.value;
//   }
//   firstName.value = "";
//   lastName.value = "";
// }
// function windowF() {
//   if (event.key === "Enter") {
//     if (firstName.value === "" || lastName.value === "") {
//       alert("Plaese write your name");
//     } else {
//       heading.innerText = firstName.value + " " + lastName.value;
//     }
//   }
// }

// window.onkeydown = windowF;
