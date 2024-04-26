// replacing a word with the help of .replce method
// var text = "my name is shakeel kunbher and iam currently studing Information Technology and iam very exicited to learn Java script"
// console.log(text.replace("iam", "me"))    //this method replace just one word from start
// console.log(text.replace(/and/, "&"))    //this method replaces given word in whole text(globaly)


// Replcaing a word with the help of for loop and slice method
// var text = "my name is shakeel";
// var user = "my";
// var add = "his";
// for (var i = 0; i < text.length; i++) {
//   var word = text.slice(i, i + 2);
//   if (word === user) {
//     text = text.slice(0, i) + add + text.slice(i + user.length);
//     console.log(text);
//   }
// }

//round method is just for number thats appear after dacimal point if number after dacimal is 5 or more than then it will increase in return(eg: 1.5 = 2 ) if its 4 or less than 4 then it'll remove number after dacimal (eg : 1.4 = 1)
// var score = 1.5;
// var math  = Math.round(score);
// console.log(math)


// Math.ceil increase it self (eg: if it is 1.2 then it will be 2, if its 2.4 then it will be 3 etc)
// var score = 1.1;
// var math  = Math.ceil(score);
// console.log(math)


// Math.ceil removes all decimal number(eg: if it is 1.2 then it will be 1, if its 2.4 then it will be 2 etc)
// var score = 1.3;
// var math  = Math.floor(score);
// console.log(math)


// Math.random genrates random number from 1 to 0 by default if we perform math opration with it then it will genrates numbers according to equation
// var num = Math.random()*5;  //it range will be in between 5
// console.log(Math.round(num))

// Converting strings to integers with the help of method
// var numstr = "223"
// console.log(typeof(numstr) + " " + numstr)
// numstr = parseInt(numstr)
// console.log(typeof(numstr) + " " + numstr)

// parseFloat method gives exact value in consol return if convert it from string to intiger
// var num = parseFloat("1.9999");
// console.log(num)


// toString method converts numbers to strings
// var num = 123;
// console.log(num.toString())

// Number(Varaible name) we Convert strings to numbers in this method too
// var num = "123.23"
// num  = Number(num);
// console.log(num)

// num.toFixed(how many dacimal number do you want) throug this method we can controll the length of a lengthy dicimal number
// var num = 23.34353463;
// console.log(num.toFixed(1))