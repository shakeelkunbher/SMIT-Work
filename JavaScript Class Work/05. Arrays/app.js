// adding value in the last
// var students = ["Shakeel", "Hanif", "Hafeez", "Haseeb"];
// students[students.length -0] = "Zia"
// console.log(students)

//push And pop add and remove elements from last respectivaly
// var students = ["Shakeel", "Hanif", "Hafeez", "Haseeb"];
// var retrunValue = students.pop(); //it start removing element from last (IF we use .pop in a varaible and consol it then it will show us that which element is removed)
// console.log(retrunValue);

//.push added 2 values from last
// var students = ["Shakeel", "Hanif", "Hafeez", "Haseeb"];
// var returnValueOfPush=students.push("Jameel","Sumera")
// console.log(returnValueOfPush)//shows total length of arry after push method
// console.log(students);

//shif and unshift add and remove elements from Start respectivaly
// var students = ["Shakeel", "Hanif", "Hafeez", "Haseeb"];
// //unshift for addition of element
// var returnValueOfPush=students.unshift("Jameel","Sumera")
// console.log(returnValueOfPush)   //shows total length of arry after unshift method
// console.log(students)

// shift for removing of element
// var students = ["Shakeel", "Hanif", "Hafeez", "Haseeb"];
// var returnValueOfPush=students.shift()
// console.log(returnValueOfPush)  //shows removed value from string through shoft method
// console.log(students);

// var students = ["Shakeel", "Hanif", "Hafeez", "Haseeb"];
// var returnValueOfPush=students.splice(0,1, "Usama");   //FIRST number targets varaible second number asks how many values to be deleted from targeted number
// console.log(returnValueOfPush)    //shows removed value from string through splice method
// console.log(students);

// var students = ["Shakeel", "Hanif", "Hafeez", "Haseeb"];
// var returnValueOfPush=students.slice(0,2);    //FIRST number targets varaible second number asks how many values to be copied from targeted number
// console.log(returnValueOfPush)  //shows copied values
// console.log(students);

// .slice also works on strings
// var str = "Shakeel Kunbher" //in vraible "slice" targets alphates number wise
// console.log(str)
// var cpy = str.slice(0, 7);
// console.log(cpy);



// finding missing number in aarey 

// solution number 1
// var arr = [21, 22, 24, 25, 26, 27, 29, 30,];
// for (var i = arr[0]; i < arr[arr.length - 1]; i++) {
//     if (arr.indexOf(i) === -1) {
//         console.log(i);
//     }
// }

// solution number 2
var arr = [21, 22, 24, 26,27, 29, 30,];
for (var i = 0; i < arr.length; i++){
    var diff = arr[i + 1] - arr[i]
    console.log(diff)
if(diff !== 1){
    for(var j = 0; j < diff; j++){
        console.log(j)
// console.log(arr[i] + j)
    }
}

}

