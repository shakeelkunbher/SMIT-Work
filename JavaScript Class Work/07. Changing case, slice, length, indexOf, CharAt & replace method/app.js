//For Converting Any word In to Lower Case
// var fullName = "Shakeel Kunbehr"
// console.log(fullName.toLowerCase())

// Capitalizing First Word
// var fName = "shakeel kunbher";
// var fisrtChar = fName.slice(0, 1).toUpperCase();
// console.log(fisrtChar + fName.slice(1));

//Findin Word
// var randomText =
//   "Ranbir Kapoor starrer Animal is all set to release on the streaming giant Netflix. As per Hindustan Times, the extended version of the action-crime film will be released on January 24.");
// var cond = false;

// for (var i = 0; i < randomText.length; i++) {
//   if (
//     randomText.slice(i, i + userInput.length).toLowerCase() ===
//     userInput.toLowerCase()
//   ) {
//     cond = true;
//   }
// }
// if (cond) {
//   console.log("Hurrey! Found It");
// } else {
//   console.log("Sorry! Didnt Find");
// }

//Findin index  number Of Word
// var randomText =
//   "Ranbir Kapoor starrer Animal is all set to release on the streaming giant Netflix. As per Hindustan Times, the extended version of the action-crime film will be released on January 24.";
// var userInput = prompt("Enter Word TO search");
// console.log(randomText.indexOf(userInput))

// Finding Index Number Of a Word Through If Else Condition
// if (randomText.indexOf(userInput)!== -1){
// console.log("Found It")
// }else {
//   console.log('didnt find')
// }

// FInding Index Number of A word And Replacing it With Another Word
// var text =
//   ("Ranbir Kapoor starrer Animal is all set to release on the streaming giant Netflix. As per Hindustan Times, the extended version of the action-crime film will be released on January 24.");
//   var firstChar = text.indexOf("Ranbir Kapoor");
//    if (firstChar !== -1) {
//    text = text.slice(0, firstChar) + "Akshey Kumar" + text.slice(firstChar + 12);
//    console.log(text)
//   }

//Findin Character In word
// var text = "Shakeel"
//Following Methods Are Same
// var char = text.charAt(2)
// var char = text[3]
// console.log(char)
// if (text.indexOf(userInputOfWord) !== -1){
//     // console.log("Found")
// }
// // else (
// //     // console.log("didnt Found")
// )


// replacing word through for loop
// var text =
//   ("Ranbir Kapoor starrer Animal is all set to release on the streaming giant Netflix. As per Hindustan Times, the extended version of the action-crime film will be released on January 24.");
// var userInputOfWordToBeReplaced = prompt("Word To be replaced");
// var cond = false;
// for (var i = 0; i < text.length; i++) {
//     var wordLen = text.slice(i, i + userInputOfWord.length).toLowerCase()
//   if (
//     wordLen === userInputOfWord.toLowerCase()
//   ) {
//     cond = true;
//   }
// }

// if (cond){
//     console.log("Found")
// }else{
//     console.log("didnt found")
// }


// replace method
var text = "my name is shakeel and iam learning python"
var text2 = text.replace("python", 'JavaScript')
console.log(text2)



