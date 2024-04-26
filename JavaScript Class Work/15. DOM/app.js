//Quiry Selector
// var text = document.querySelector("#h1")
// console.log(text)

// targeting specific Element throug declared varaible
// var childNode = document.getElementById("div")
// console.log(childNode.childNodes[0]);

//Child nodes
//nodeType tells us that current target is junk artifate or An element if its text then there will be 3 if its element then 1
// console.log(
//   document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].nodeType
// );

//previous sibling and nest sibling
// var test = document.getElementById("div");
// console.log(test.childNodes[4].nextSibling);
// console.log(test.childNodes[2].previousSibling);
// //parentNodes gets us parent of a specific element
// console.log(test.childNodes[2].parentNode);
// // gives us name of selected elemnt
// console.log(test.childNodes[1].nodeName);

// antributes cheak if available or not
// console.log(test.hasAttribute('class'))

// geting value of specific antribute
// console.log(test.getAttribute('class'))

// seting an antribute
// console.log(test.setAttribute('class', "Shakeel"))

// getting all antribute of an Element
// console.log(test.attributes)


//creating html
//creating tags
// var div = document.createElement("div");
// var p1 = document.createElement("p");
// var h1 = document.createElement("h1");
// var p2 = document.createElement("p");

// //storing text in varaible
// var p1Text = document.createTextNode("test");
// var h1Text = document.createTextNode("Hello");
// var p2Text = document.createTextNode("World");

// // storing saved text in html tags
// p1.appendChild(p1Text);
// p2.appendChild(p2Text);
// h1.appendChild(h1Text);

// // making tags child of a specific div
// div.appendChild(p1);
// div.appendChild(h1);
// div.appendChild(p2);

// //finally showing text on screen
// var main = document.getElementById("main");
// main.appendChild(div)


// removing an Element throug a function
function removeElem(){
 console.log(event.target.parentNode.childNodes[1].remove())   
}