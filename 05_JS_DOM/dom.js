// Get method value
// get element by id, classname, tagname 

var element;
element = document.getElementById("psw");
element = document.getElementsByClassName("psw");
element = document.getElementsByTagName("psw");
console.log(element);



// // get element by inner text.
var element;
element = document.getElementById("imgcontainer").innerText;
console.log(element);


// // get element by innerHTML.
var element;
element = document.getElementById("imgcontainer").innerHTML;
console.log(element);




// getAttribute
var element;
element = document.getElementById("imgcontainer").getAttribute("style");
console.log(element); 
// getAttributeNode with value
element = document.getElementById("imgcontainer").getAttributeNode("class").value;  //getAttributeNode
console.log(element); 
//and getAttribute same as.


//  getAttributeNode
element = document.getElementById("imgcontainer").getAttributeNode("style"); 
console.log(element);

//to retrive all attribute of tag or element
element = document.getElementById("imgcontainer").attributes;
console.log(element);

//retirive value of attribute.
element = document.getElementById("imgcontainer").attributes[1].value; //same as 
//getAttributeNode with value or getAttribute
console.log(element);



// //retirive name of attribute.
// element = document.getElementById("imgcontainer").attributes[1].name;
// console.log(element);



// // Set value Method
// // change   text of P tag
// var element;
// element = document.getElementById("imgcontainer").innerHTML = "Wow";
// console.log(element);
// // element = document.getElementById("imgcontainer").innerText;
// // console.log(element);

// // set value Method
// // change   text of attribute or [class 0r id]
// // var element_01;
// // document.getElementById("container").setAttribute("class","xyz" );
// // element_01= document.getElementById("container").getAttribute("class" );
// // console.log(element_01);

// // set value Method
// // change   text of attribute or [class 0r id] by value
// var element_02;
// document.getElementById("container").attributes[2].value = "Akl";
// element_02= document.getElementById("container").getAttribute("class" );
// console.log(element_02);



// // Remove Attribute
// // change   text of attribute or [class 0r id] by value
// var element_02;
// document.getElementById("container").removeAttribute("class" );
// element_02= document.getElementById("container").getAttribute("class" );
// console.log(element_02);


// //querySelector find out first element but  getElementsByClassName is find out all element.
// var element_02;
// element_02= document.querySelector(".container");
// element_02=document.getElementsByClassName("container");
// // element_02= document.querySelector(".container").innerHTML= "hyyy"; // change text of element.
// console.log(element_02);


// //querySelectorAll shows all element means shows arrays. it works like gatelement. 
// var element_02;
// element_02= document.querySelectorAll(".container");
// element_02= document.querySelectorAll(".container")[0]; // give index to show 1 element.
// element_02= document.querySelectorAll(".container")[0].innerHTML; // to get text.
// console.log(element_02);





//CSS styling method. it working with querySelector to add property of stlye border. 
// 1) style
// 2) classname
// 3) classlist


// 1) style
// var element_02;
// element_02= document.querySelector(".container").style.border;
// console.log(element_02);

// 2) classname
// it retur name not return array
// var element_02;
// element_02= document.querySelector(".container").className = "Omg oop";
// console.log(element_02);



// 3) classlist
// it return array
// var element_02;
// element_02= document.querySelector(".container").classList = "Omg xzz";
// console.log(element_02);


// Class add
// it retur return array
var element_02;
element_02= document.querySelector(".container").classList.add = ("ppl");
console.log(element_02);


// Class remove
// it retur return array
var element_02;
element_02= document.querySelector(".container_01").classList;
console.log(element_02);
